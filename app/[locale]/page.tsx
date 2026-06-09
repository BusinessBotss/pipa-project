import Image from 'next/image';
import type { Locale } from '@/types/locale';
import { localize } from '@/lib/i18n';
import { BlurText } from '@/components/ui/BlurText';
import { GradualBlur } from '@/components/ui/GradualBlur';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { GlassButton } from '@/components/ui/GlassButton';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { organizationJsonLd } from '@/lib/schema';
import {
  discoverHero,
  discoverIntro,
  discoverSections,
  discoverFinalCta,
  discoverPipaImages,
} from '@/data/discover';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const L = (t: Parameters<typeof localize>[1]) => localize(locale, t);
  const contactHref = `/${locale}/contact`;
  const s = discoverSections;

  // Editorial blocks paired with a region image (generic alt; no content claim).
  const editorial = [
    { ...s.nature, img: discoverPipaImages[8], flip: false },
    { ...s.culture, img: discoverPipaImages[5], flip: true },
    { ...s.food, img: discoverPipaImages[3], flip: false },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <Image
          src={discoverHero.image}
          alt={L(discoverHero.title)}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-bg" />
        <div className="container-content relative flex min-h-[88vh] flex-col justify-end pb-28 pt-32">
          <BlurText text={L(discoverHero.title)} className="max-w-4xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl" />
          <p className="mt-6 max-w-2xl text-base text-sand sm:text-lg">{L(discoverHero.subtitle)}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PremiumButton href={contactHref} className="px-7 py-3.5">{L(discoverHero.cta)}</PremiumButton>
            <GlassButton href={contactHref}>{L(discoverHero.ctaSecondary)}</GlassButton>
          </div>
        </div>
        <GradualBlur position="bottom" />
      </section>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className="container-content py-20 sm:py-28">
        <p className="mx-auto max-w-3xl text-center font-serif text-xl leading-relaxed text-text/90 sm:text-2xl">
          {L(discoverIntro)}
        </p>
      </section>

      {/* ── Beaches ──────────────────────────────────────── */}
      <section id="beaches" className="container-content scroll-mt-20 pb-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{L(s.beaches.title)}</h2>
          <p className="mt-3 text-muted">{L(s.beaches.body)}</p>
        </div>
        {/* Text only — we don't pair beach names with unverified photos. */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {beaches.map((b) => (
            <div key={b.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur">
              <p className="font-serif text-lg text-sand">{b.name}</p>
              <p className="mt-1 text-sm text-muted">{b.tag[locale] ?? b.tag['pt-BR']}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Editorial: Nature / Culture / Food ───────────── */}
      <section className="container-content py-12">
        <div className="flex flex-col gap-20">
          {editorial.map((block) => (
            <div
              key={L(block.title)}
              className={
                'grid items-center gap-8 lg:grid-cols-2 ' + (block.flip ? 'lg:[&>*:first-child]:order-2' : '')
              }
            >
              <ImageFrame
                src={block.img.url}
                alt={L(block.img.alt)}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                containerClassName="aspect-[4/3]"
              />
              <div className="max-w-prose">
                <h2 className="text-3xl sm:text-4xl">{L(block.title)}</h2>
                <p className="mt-4 text-muted">{L(block.body)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Activities ───────────────────────────────────── */}
      <section id="activities" className="container-content scroll-mt-20 py-12">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{L(s.activities.title)}</h2>
          <p className="mt-3 text-muted">{L(s.activities.body)}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {activities.map((a) => (
            <li
              key={a.name['pt-BR']}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-colors hover:border-amber-300/30"
            >
              <p className="font-serif text-lg text-sand">{a.name[locale] ?? a.name['pt-BR']}</p>
              <p className="mt-1 text-sm text-muted">{a.desc[locale] ?? a.desc['pt-BR']}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Gallery (captionless carousel, all images) ───── */}
      <section id="gallery" className="scroll-mt-20 py-12">
        <div className="container-content mb-8">
          <h2 className="text-3xl sm:text-4xl">Praia da Pipa</h2>
        </div>
        <ul
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Praia da Pipa"
        >
          {discoverPipaImages.map((g) => (
            <li key={g.id} className="shrink-0 snap-center">
              <ImageFrame
                src={g.url}
                alt={L(g.alt)}
                width={520}
                height={360}
                sizes="(max-width:768px) 80vw, 520px"
                className="h-[280px] w-[78vw] max-w-[520px] object-cover sm:h-[360px]"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Responsible travel ───────────────────────────── */}
      <section className="container-content py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur sm:p-12">
          <h2 className="text-2xl sm:text-3xl">{L(s.responsible.title)}</h2>
          <p className="mt-3 max-w-prose text-muted">{L(s.responsible.body)}</p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden py-24">
        <Image src={discoverPipaImages[4].url} alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">{L(discoverFinalCta.title)}</h2>
          <p className="mx-auto mt-4 max-w-prose text-muted">{L(discoverFinalCta.body)}</p>
          <div className="mt-8 flex justify-center">
            <PremiumButton href={contactHref} className="px-8 py-4">{L(discoverFinalCta.cta)}</PremiumButton>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Static landing data (destination, not brands) ─────────
const beaches: { name: string; tag: Record<string, string> }[] = [
  { name: 'Praia do Centro', tag: { 'pt-BR': 'Perto da vila · piscinas naturais', en: 'By the village · natural pools', es: 'Junto al pueblo · piscinas naturales' } },
  { name: 'Baía dos Golfinhos', tag: { 'pt-BR': 'Golfinhos · depende da maré', en: 'Dolphins · tide-dependent', es: 'Delfines · según la marea' } },
  { name: 'Praia do Madeiro', tag: { 'pt-BR': 'Surfe · falésias · natureza', en: 'Surf · cliffs · nature', es: 'Surf · acantilados · naturaleza' } },
  { name: 'Praia do Amor', tag: { 'pt-BR': 'Surfe · mirantes', en: 'Surf · viewpoints', es: 'Surf · miradores' } },
  { name: 'Praia das Minas', tag: { 'pt-BR': 'Natural · preservação', en: 'Natural · conservation', es: 'Natural · conservación' } },
  { name: 'Cacimbinhas · Tibau do Sul', tag: { 'pt-BR': 'Falésias · lagoa · pôr do sol', en: 'Cliffs · lagoon · sunset', es: 'Acantilados · laguna · atardecer' } },
];

const activities: { name: Record<string, string>; desc: Record<string, string> }[] = [
  { name: { 'pt-BR': 'Observar golfinhos', en: 'Watch the dolphins', es: 'Observar delfines' }, desc: { 'pt-BR': 'Na Baía dos Golfinhos e no Madeiro.', en: 'At Baía dos Golfinhos and Madeiro.', es: 'En Baía dos Golfinhos y Madeiro.' } },
  { name: { 'pt-BR': 'Mirante do Chapadão', en: 'Chapadão viewpoint', es: 'Mirador de Chapadão' }, desc: { 'pt-BR': 'Vistas das falésias e do mar.', en: 'Wide cliff and ocean views.', es: 'Vistas de acantilados y mar.' } },
  { name: { 'pt-BR': 'Aula de surfe', en: 'Surf lesson', es: 'Clase de surf' }, desc: { 'pt-BR': 'Do iniciante ao avançado.', en: 'From beginner to advanced.', es: 'De principiante a avanzado.' } },
  { name: { 'pt-BR': 'Beach & pool clubs', en: 'Beach & pool clubs', es: 'Beach & pool clubs' }, desc: { 'pt-BR': 'Comida, música e mar.', en: 'Food, music and the sea.', es: 'Comida, música y mar.' } },
  { name: { 'pt-BR': 'Passeio de buggy', en: 'Buggy tour', es: 'Paseo en buggy' }, desc: { 'pt-BR': 'Praias, dunas e mirantes.', en: 'Beaches, dunes and viewpoints.', es: 'Playas, dunas y miradores.' } },
  { name: { 'pt-BR': 'Pôr do sol', en: 'Sunset', es: 'Atardecer' }, desc: { 'pt-BR': 'Lagoa de Guaraíras e falésias.', en: 'Guaraíras lagoon and cliffs.', es: 'Laguna de Guaraíras y acantilados.' } },
  { name: { 'pt-BR': 'Centro da vila', en: 'Village centre', es: 'Centro del pueblo' }, desc: { 'pt-BR': 'Lojas, cafés e restaurantes.', en: 'Shops, cafés and restaurants.', es: 'Tiendas, cafés y restaurantes.' } },
  { name: { 'pt-BR': 'Vida noturna', en: 'Nightlife', es: 'Vida nocturna' }, desc: { 'pt-BR': 'Bares, música ao vivo e DJs.', en: 'Bars, live music and DJs.', es: 'Bares, música en vivo y DJs.' } },
];
