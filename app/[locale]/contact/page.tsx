import type { Locale } from '@/types/locale';
import { t } from '@/lib/i18n';
import { InquiryForm } from '@/components/forms/InquiryForm';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <section className="container-content max-w-prose py-16">
      <h1 className="text-3xl sm:text-4xl">{t(locale, 'section.contact')}</h1>
      <p className="mt-3 text-sm text-muted">{t(locale, 'footer.note')}</p>
      <div className="mt-8">
        {/* General enquiry — routed like an event/lead. */}
        <InquiryForm locale={locale} type="events" source="contact" />
      </div>
    </section>
  );
}
