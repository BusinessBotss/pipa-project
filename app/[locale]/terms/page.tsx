import type { Locale } from '@/types/locale';

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const copy = {
    'pt-BR':
      'Termos de Uso — TODO_LEGAL. Placeholder que requer revisão jurídica. A disponibilidade e os preços podem mudar; confirmamos antes de fechar qualquer reserva.',
    en:
      'Terms of Use — TODO_LEGAL. Placeholder requiring legal review. Availability and prices may change; we confirm before finalising any booking.',
    es:
      'Términos de Uso — TODO_LEGAL. Placeholder que requiere revisión legal. La disponibilidad y los precios pueden cambiar; confirmamos antes de cerrar cualquier reserva.',
  } satisfies Record<Locale, string>;
  return (
    <section className="container-content max-w-prose py-16">
      <h1 className="text-3xl">{locale === 'en' ? 'Terms' : 'Termos'}</h1>
      <p className="mt-6 text-sm text-muted">{copy[locale]}</p>
    </section>
  );
}
