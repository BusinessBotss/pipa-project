import { notFound } from 'next/navigation';
import type { Locale } from '@/types/locale';
import { localize, t } from '@/lib/i18n';
import { getBrandBySlug, getBrands } from '@/lib/data-access/brands';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { resolveWhatsapp } from '@/lib/config/contact-routing';

export function generateStaticParams() {
  return getBrands().map((b) => ({ slug: b.slug }));
}

// Only public-ready brands get a route; unknown/non-public slugs → 404.
export const dynamicParams = false;

export default function BookPage({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const brand = getBrandBySlug(params.slug);
  if (!brand || brand.publicReady === false) notFound();
  const { locale } = params;

  return (
    <section className="container-content max-w-prose py-16">
      <h1 className="text-3xl">{brand.name}</h1>
      <p className="mt-2 text-muted">{localize(locale, brand.subtitle)}</p>
      <p className="mt-1 text-sm text-muted">{t(locale, 'success.disclaimer')}</p>

      <div className="mt-8">
        <InquiryForm
          locale={locale}
          type={brand.audiencePath}
          brandSlug={brand.slug}
          brandName={brand.name}
          brandWhatsapp={resolveWhatsapp(brand.contactKey) ?? undefined}
          source={`book_${brand.slug}`}
        />
      </div>
    </section>
  );
}
