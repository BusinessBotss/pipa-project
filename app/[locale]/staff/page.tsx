import { redirect } from 'next/navigation';
import { getInquiries } from '@/lib/data-access/staff';
import Link from 'next/link';

function formatDate(dateString: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(dateString));
}

export const metadata = {
  title: 'Staff Dashboard',
  robots: { index: false, follow: false },
};

export default async function StaffDashboardPage({
  searchParams,
  params: { locale },
}: {
  searchParams: { [key: string]: string | undefined };
  params: { locale: string };
}) {
  const isEnabled = process.env.STAFF_DASHBOARD_ENABLED === 'true';
  if (!isEnabled) {
    redirect(`/${locale}/_not-found`);
  }

  const inquiries = await getInquiries(searchParams);

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Leads & Inquiries</h1>
          <div className="flex gap-4">
            <Link href={`/${locale}/staff?status=new`} className="text-sm px-3 py-1 bg-neutral-800 rounded">Novos</Link>
            <Link href={`/${locale}/staff?type=dine`} className="text-sm px-3 py-1 bg-neutral-800 rounded">Dine</Link>
            <Link href={`/${locale}/staff`} className="text-sm px-3 py-1 bg-neutral-800 rounded">Limpar</Link>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-950 text-neutral-400">
              <tr>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">WhatsApp</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              {inquiries?.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-700/50 transition-colors">
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-700 text-neutral-300">
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-neutral-300">{lead.path_id}</td>
                  <td className="px-4 py-3 text-neutral-300">{lead.brand_id || '-'}</td>
                  <td className="px-4 py-3 font-medium">{lead.name}</td>
                  <td className="px-4 py-3 text-neutral-400">{lead.whatsapp}</td>
                  <td className="px-4 py-3 text-neutral-400">
                    {formatDate(lead.created_at, locale)}
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <Link
                      href={`/${locale}/staff/${lead.id}`}
                      className="px-3 py-1 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors"
                    >
                      View
                    </Link>
                    {lead.whatsapp && (
                      <a
                        href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, recebemos sua solicitação pelo Pipa Group. Posso te ajudar com a reserva?')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-500 transition-colors"
                      >
                        WhatsApp
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {inquiries?.length === 0 && (
            <div className="p-8 text-center text-neutral-500">Nenhum lead encontrado.</div>
          )}
        </div>
      </div>
    </div>
  );
}
