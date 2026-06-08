import 'server-only';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function getInquiries(filters: { status?: string; type?: string; brand?: string; q?: string }) {
  const supabase = getSupabaseAdmin();
  if (!supabase) throw new Error('Supabase not configured');
  let query = supabase.from('inquiries').select('*').order('created_at', { ascending: false });

  if (filters.status) query = query.eq('status', filters.status);
  if (filters.type) query = query.eq('path_id', filters.type);
  if (filters.brand) query = query.eq('brand_id', filters.brand);
  if (filters.q) {
    query = query.or(`name.ilike.%${filters.q}%,email.ilike.%${filters.q}%,whatsapp.ilike.%${filters.q}%`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function getInquiryDetails(id: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) throw new Error('Supabase not configured');
  
  const [inquiry, events, notes] = await Promise.all([
    supabase.from('inquiries').select('*').eq('id', id).single(),
    supabase.from('inquiry_events').select('*').eq('inquiry_id', id).order('created_at', { ascending: true }),
    supabase.from('staff_notes').select('*').eq('inquiry_id', id).order('created_at', { ascending: true })
  ]);

  if (inquiry.error) throw inquiry.error;

  return {
    inquiry: inquiry.data,
    events: events.data || [],
    notes: notes.data || []
  };
}

export async function updateInquiryStatus(id: string, newStatus: string, previousStatus: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) throw new Error('Supabase not configured');
  
  const { error: updateError } = await supabase
    .from('inquiries')
    .update({ status: newStatus, updated_at: new Date().toISOString() })
    .eq('id', id);

  if (updateError) throw updateError;

  const { error: eventError } = await supabase
    .from('inquiry_events')
    .insert({
      inquiry_id: id,
      type: 'status_changed',
      detail: {
        previous_status: previousStatus,
        new_status: newStatus,
        actor: 'local_staff'
      }
    });

  if (eventError) throw eventError;
}

export async function addStaffNote(id: string, noteText: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) throw new Error('Supabase not configured');
  
  const { error: noteError } = await supabase
    .from('staff_notes')
    .insert({
      inquiry_id: id,
      note: noteText,
      author: 'local_staff'
    });

  if (noteError) throw noteError;

  const { error: eventError } = await supabase
    .from('inquiry_events')
    .insert({
      inquiry_id: id,
      type: 'staff_note_added',
      detail: { actor: 'local_staff' }
    });

  if (eventError) throw eventError;
}
