import { redirect } from 'next/navigation';
import { getInquiryDetails, updateInquiryStatus, addStaffNote } from '@/lib/data-access/staff';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export const metadata = {
  title: 'Staff Dashboard - Detail',
  robots: { index: false, follow: false },
};

function formatDate(dateString: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(dateString));
}

export default async function StaffDashboardDetailPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  const isEnabled = process.env.STAFF_DASHBOARD_ENABLED === 'true';
  if (!isEnabled) {
    redirect(`/${locale}/_not-found`);
  }

  const { inquiry, events, notes } = await getInquiryDetails(id);

  // Server actions
  async function handleStatusChange(formData: FormData) {
    'use server';
    const newStatus = formData.get('status') as string;
    if (newStatus && newStatus !== inquiry.status) {
      await updateInquiryStatus(id, newStatus, inquiry.status);
      revalidatePath(`/${locale}/staff/${id}`);
      revalidatePath(`/${locale}/staff`);
    }
  }

  async function handleAddNote(formData: FormData) {
    'use server';
    const note = formData.get('note') as string;
    if (note && note.trim()) {
      const sanitized = note.replace(/[<>]/g, '').trim().slice(0, 2000);
      await addStaffNote(id, sanitized);
      revalidatePath(`/${locale}/staff/${id}`);
    }
  }

  const waLink = inquiry.whatsapp 
    ? `https://wa.me/${inquiry.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, recebemos sua solicitação pelo Pipa Group. Posso te ajudar com a reserva?')}` 
    : null;

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/staff`} className="text-neutral-400 hover:text-white">&larr; Back</Link>
            <h1 className="text-2xl font-semibold">Lead: {inquiry.name}</h1>
            <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">{inquiry.status}</span>
          </div>
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-500 transition-colors"
            >
              Abrir WhatsApp
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-medium border-b border-neutral-700 pb-2">Información Principal</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500">Path / Brand</p>
                  <p>{inquiry.path_id} / {inquiry.brand_id || '-'}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Contacto</p>
                  <p>{inquiry.whatsapp} <br/> {inquiry.email}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Fecha creación</p>
                  <p>{formatDate(inquiry.created_at, locale)}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Idioma / Origen</p>
                  <p>{inquiry.locale} / {inquiry.source}</p>
                </div>
              </div>

              {inquiry.message && (
                <div className="pt-4 border-t border-neutral-700 mt-4">
                  <p className="text-neutral-500 text-sm mb-1">Mensaje original:</p>
                  <p className="bg-neutral-900 p-3 rounded text-sm">{inquiry.message}</p>
                </div>
              )}
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-medium border-b border-neutral-700 pb-2">Payload (Extras)</h2>
              <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto text-neutral-300">
                {JSON.stringify(inquiry.payload, null, 2)}
              </pre>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-medium border-b border-neutral-700 pb-2">Technical Info</h2>
              <div className="text-xs text-neutral-400 space-y-1">
                <p>IP Hash: {inquiry.ip_hash || 'N/A'}</p>
                <p>User Agent: {inquiry.user_agent?.substring(0, 100) || 'N/A'}...</p>
                <p>Consent: {inquiry.consent ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Status Form */}
            <div className="bg-neutral-800 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Manejar Lead</h2>
              <form action={handleStatusChange} className="space-y-4">
                <select 
                  name="status" 
                  defaultValue={inquiry.status}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-sm text-white"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="converted">Converted</option>
                  <option value="lost">Lost</option>
                  <option value="spam">Spam</option>
                  <option value="archived">Archived</option>
                </select>
                <button type="submit" className="w-full py-2 bg-neutral-700 hover:bg-neutral-600 rounded text-sm transition-colors">
                  Actualizar Status
                </button>
              </form>
            </div>

            {/* Notes Form */}
            <div className="bg-neutral-800 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Notas Internas</h2>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {notes.map((note: any) => (
                  <div key={note.id} className="bg-neutral-900 p-3 rounded text-sm">
                    <p className="text-neutral-300">{note.note}</p>
                    <p className="text-xs text-neutral-500 mt-2 text-right">
                      {note.author} · {formatDate(note.created_at, locale)}
                    </p>
                  </div>
                ))}
                {notes.length === 0 && <p className="text-xs text-neutral-500">Sin notas aún.</p>}
              </div>

              <form action={handleAddNote} className="space-y-2">
                <textarea 
                  name="note" 
                  required
                  placeholder="Escribir una nota..."
                  className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-sm text-white min-h-[80px]"
                />
                <button type="submit" className="w-full py-2 bg-neutral-700 hover:bg-neutral-600 rounded text-sm transition-colors">
                  Añadir Nota
                </button>
              </form>
            </div>

            {/* Timeline */}
            <div className="bg-neutral-800 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Eventos</h2>
              <div className="space-y-3">
                {events.map((ev: any) => (
                  <div key={ev.id} className="text-xs">
                    <span className="text-neutral-500">{formatDate(ev.created_at, locale)}</span>
                    <p className="text-neutral-300 font-medium">{ev.type}</p>
                    {ev.detail && Object.keys(ev.detail).length > 0 && (
                      <p className="text-neutral-500">{JSON.stringify(ev.detail)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
