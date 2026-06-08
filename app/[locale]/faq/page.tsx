import type { Locale } from '@/types/locale';

// FAQ exists as a trust / objection-handling asset, not for rich results.
const faqs: { q: Record<Locale, string>; a: Record<Locale, string> }[] = [
  {
    q: {
      'pt-BR': 'Como faço uma reserva?',
      en: 'How do I make a booking?',
      es: '¿Cómo hago una reserva?',
    },
    a: {
      'pt-BR': 'Escolha um caminho (Hospedagem, Gastronomia, Pool, Eventos ou Parceiros) e envie uma solicitação. Confirmamos a disponibilidade antes de fechar.',
      en: 'Choose a path (Stay, Dine, Pool, Events or Partners) and send an enquiry. We confirm availability before finalising.',
      es: 'Elige un camino (Alojamiento, Gastronomía, Pool, Eventos o Socios) y envía una solicitud. Confirmamos disponibilidad antes de cerrar.',
    },
  },
  {
    q: {
      'pt-BR': 'Os horários e preços são definitivos?',
      en: 'Are hours and prices final?',
      es: '¿Los horarios y precios son definitivos?',
    },
    a: {
      'pt-BR': 'Alguns dados aparecem como “A confirmar” quando ainda não estão verificados. Nunca publicamos horários ou preços não confirmados como definitivos.',
      en: 'Some data shows as “To be confirmed” when not yet verified. We never publish unconfirmed hours or prices as final.',
      es: 'Algunos datos aparecen como “A confirmar” cuando no están verificados. Nunca publicamos horarios o precios no confirmados como definitivos.',
    },
  },
];

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="container-content max-w-prose py-16">
      <h1 className="text-3xl sm:text-4xl">FAQ</h1>
      <dl className="mt-8 space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-line pb-6">
            <dt className="text-lg">{f.q[locale]}</dt>
            <dd className="mt-2 text-sm text-muted">{f.a[locale]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
