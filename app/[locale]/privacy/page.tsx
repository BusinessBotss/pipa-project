import type { Locale } from '@/types/locale';

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const copy = {
    'pt-BR':
      'Política de Privacidade — TODO_LEGAL. Este texto é um placeholder e requer revisão jurídica (LGPD). Coletamos apenas os dados necessários para responder às solicitações e não armazenamos dados pessoais no navegador.',
    en:
      'Privacy Policy — TODO_LEGAL. This is a placeholder requiring legal review (Brazil LGPD). We collect only the data needed to respond to enquiries and do not store personal data in the browser.',
    es:
      'Política de Privacidad — TODO_LEGAL. Texto placeholder que requiere revisión legal (LGPD). Recopilamos solo los datos necesarios para responder y no almacenamos datos personales en el navegador.',
    de:
      'Datenschutzrichtlinie — TODO_LEGAL. Dies ist ein Platzhalter. Wir erheben nur die zur Beantwortung von Anfragen erforderlichen Daten und speichern keine personenbezogenen Daten im Browser.',
    fr:
      'Politique de confidentialité — TODO_LEGAL. Ce texte est un espace réservé. Nous ne collectons que les données nécessaires pour répondre aux demandes et ne stockons pas de données personnelles dans le navigateur.',
  } satisfies Record<Locale, string>;
  return (
    <section className="container-content max-w-prose py-16">
      <h1 className="text-3xl">{locale === 'en' ? 'Privacy' : 'Privacidade'}</h1>
      <p className="mt-6 text-sm text-muted">{copy[locale]}</p>
    </section>
  );
}
