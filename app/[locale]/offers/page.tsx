import type { Locale } from '@/types/locale';
import { localize, t } from '@/lib/i18n';
import { offers } from '@/data/offers';

export default function OffersPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="container-content py-16">
      <h1 className="mb-8 text-3xl sm:text-4xl">{t(locale, 'section.offers')}</h1>
      {/* HTML-first. TODO_CONTENT: add flipbook/PDF + QR destinations + confirmed dates. */}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o) => (
          <li key={o.id} className="rounded-2xl border border-line bg-card p-6">
            <h2 className="text-lg">{localize(locale, o.title)}</h2>
            <p className="mt-2 text-sm text-muted">{localize(locale, o.description)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
