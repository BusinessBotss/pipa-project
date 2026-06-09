import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Locale } from '@/types/locale';
import { isLocale } from '@/types/locale';
import { t, localize } from '@/lib/i18n';
import { getBrandBySlug, getBrands, getSimilarBrands } from '@/lib/data-access/brands';
import { brandJsonLd } from '@/lib/schema';
import { VerificationBadge } from '@/components/brand/VerificationBadge';
import { fieldText } from '@/components/brand/fieldText';
import { BrandCard } from '@/components/brand/BrandCard';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { GlassButton } from '@/components/ui/GlassButton';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { LuxuryCard } from '@/components/ui/LuxuryCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { resolveWhatsapp, resolveInstagram } from '@/lib/config/contact-routing';
import { buildWhatsappLink } from '@/lib/whatsapp';
import type { TranslationKey } from '@/data/translations';
import { brandAssets, getBrandHeroAsset, getBrandGalleryAssets } from '@/data/brand-assets';
import { brandMenus } from '@/data/brand-menus';
import { safeExternalHref, isSafePublicUrl } from '@/lib/security/url';

export function generateStaticParams() {
  return getBrands().map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Metadata {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return {};
  const locale = (isLocale(params.locale) ? params.locale : 'pt-BR') as Locale;
  return {
    title: brand.name,
    description: localize(locale, brand.subtitle),
  };
}

export default function BrandPage({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) notFound();
  const { locale } = params;
  const similar = getSimilarBrands(brand);

  // Real asset resolution — prefer brand-assets over Unsplash placeholders.
  // Asset brandId keys are slugs (e.g. 'umi-fun-kitchen'), not the short id.
  const heroAsset = getBrandHeroAsset(brand.slug);
  const galleryAssets = getBrandGalleryAssets(brand.slug);
  const heroSrc = heroAsset && isSafePublicUrl(heroAsset.url)
    ? heroAsset.url
    : brand.heroImage;
  const heroAlt = heroAsset?.alt
    ? (heroAsset.alt[locale] ?? heroAsset.alt['pt-BR'] ?? localize(locale, brand.subtitle))
    : localize(locale, brand.subtitle);

  const facts: { label: string; value: string }[] = [
    { label: 'Endereço / Address', value: fieldText(brand.location.address, locale) },
    { label: t(locale, 'form.time'), value: fieldText(brand.hours, locale) },
    { label: t(locale, 'common.capacity'), value: fieldText(brand.capacity, locale) },
    { label: 'Signature', value: fieldText(brand.signature, locale) },
    { label: 'Preço / Price', value: fieldText(brand.priceLabel, locale) },
    { label: 'Peak', value: fieldText(brand.peakTimes, locale) },
  ];

  const waNumber = resolveWhatsapp(brand.contactKey);
  const igLink = resolveInstagram(brand.contactKey) ?? brand.contact?.instagram?.value ?? null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd(brand)) }}
      />

      <section className="relative h-[42vh] min-h-72 overflow-hidden">
        <Image src={heroSrc} alt={heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
        <div className="container-content absolute inset-x-0 bottom-0 pb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-5xl">{brand.name}</h1>
            <VerificationBadge status={brand.verificationStatus} locale={locale} />
          </div>
          <p className="mt-2 max-w-prose text-sand">{localize(locale, brand.subtitle)}</p>
        </div>
      </section>

      <section className="container-content grid gap-10 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="max-w-prose text-muted">{localize(locale, brand.description)}</p>

          <h2 className="mt-10 text-xl">Key facts</h2>
          <table className="mt-4 w-full text-sm">
            <tbody>
              {facts.map((f) => (
                <tr key={f.label} className="border-b border-line">
                  <th scope="row" className="py-3 pr-4 text-left font-normal text-muted">
                    {f.label}
                  </th>
                  <td className="py-3 text-text">{f.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {brand.facilities.length > 0 && (
            <>
              <h2 className="mt-10 text-xl">Facilities</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {brand.facilities.map((f, i) => (
                  <li key={i} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {fieldText(f, locale)}
                  </li>
                ))}
              </ul>
            </>
          )}

          {brand.services && brand.services.length > 0 && (
            <>
              <h2 className="mt-10 text-xl">Services</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {brand.services.map((s, i) => (
                  <li key={i} className="rounded-full bg-card-2 px-3 py-1 text-xs text-sand">
                    {localize(locale, s)}
                  </li>
                ))}
              </ul>
            </>
          )}

          {brand.followersLabel?.value && (
            <p className="mt-6 text-xs text-muted">Instagram: {brand.followersLabel.value} ({t(locale, 'common.toBeConfirmed')})</p>
          )}

          {brand.reviewExcerpts && brand.reviewExcerpts.length > 0 && (
            <>
              <h2 className="mt-10 text-xl">{t(locale, 'section.confidence')}</h2>
              {brand.reviewExcerpts.map((r, i) => (
                <blockquote key={i} className="mt-3 border-l-2 border-gold pl-4 text-sm text-muted">
                  {localize(locale, r.text)}
                  <footer className="mt-1 text-xs opacity-70">— {r.source}</footer>
                </blockquote>
              ))}
            </>
          )}

          <h2 className="mt-10 text-xl text-sand">Media & Content</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur p-4">
              <h3 className="font-medium text-sand mb-2">Menus</h3>
              {brandMenus.filter(m => m.brandId === brand.id && m.isPublic).length > 0 ? (
                <ul className="space-y-1 text-sm text-muted">
                  {brandMenus.filter(m => m.brandId === brand.id && m.isPublic).map(m => (
                    <li key={m.id}>
                      {m.status === 'placeholder' ? (
                        <span className="opacity-50">{localize(locale, m.title)} ({locale === 'pt-BR' ? 'em breve' : locale === 'es' ? 'próximamente' : 'coming soon'})</span>
                      ) : (
                        <a href={safeExternalHref(m.url || '#')} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline decoration-line-strong underline-offset-4">
                          {localize(locale, m.title)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted opacity-50">{locale === 'pt-BR' ? 'Menu em breve' : locale === 'es' ? 'Menú próximamente' : 'Menu coming soon'}</p>
              )}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur p-4">
              <h3 className="font-medium text-sand mb-2">Gallery</h3>
              {galleryAssets.length > 0 ? (
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {galleryAssets.slice(0, 6).map((a) => (
                    <ImageFrame
                      key={a.id}
                      src={a.url}
                      alt={a.alt?.[locale] ?? a.alt?.['pt-BR'] ?? localize(locale, a.title)}
                      fill
                      sizes="150px"
                      containerClassName="aspect-square"
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted opacity-50">{locale === 'pt-BR' ? 'Fotos em breve' : locale === 'es' ? 'Fotos próximamente' : 'Photos coming soon'}</p>
              )}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <LuxuryCard className="sticky top-24 p-6 bg-white/[0.02] backdrop-blur border border-white/10">
            <p className="text-sm text-muted/80">{t(locale, 'success.disclaimer')}</p>
            <PremiumButton
              href={`/${locale}/book/${brand.slug}`}
              className="mt-6 w-full py-3"
            >
              {t(locale, brand.primaryCta.labelKey as TranslationKey)}
            </PremiumButton>

            {/* Direct WhatsApp only when a confirmed number exists; otherwise the
                booking CTA above acts as "Consultar". Never renders PENDING. */}
            {waNumber ? (
              <GlassButton
                href={buildWhatsappLink({
                  number: waNumber,
                  message: `Olá ${brand.name}, gostaria de mais informações.`,
                })}
                external
                className="mt-3 w-full hover:border-whatsapp/50 hover:text-whatsapp"
              >
                WhatsApp
              </GlassButton>
            ) : (
              <p className="mt-3 text-center text-sm text-muted">{t(locale, 'common.consult')}</p>
            )}

            <div className="mt-4 flex justify-center gap-4 text-sm">
              {igLink && (
                <a href={igLink} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:underline">
                  Instagram
                </a>
              )}
              {brand.location.mapUrl ? (
                <a href={brand.location.mapUrl} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:underline">
                  {t(locale, 'common.openMaps')}
                </a>
              ) : (
                <span className="text-muted">{t(locale, 'common.mapsSoon')}</span>
              )}
            </div>
          </LuxuryCard>
        </aside>
      </section>

      {similar.length > 0 && (
        <section className="container-content py-12">
          <SectionHeading title={t(locale, 'section.similar')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((b) => (
              <BrandCard key={b.id} brand={b} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
