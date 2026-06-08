import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/types/locale';
import { t } from '@/lib/i18n';
import { BlurText } from '@/components/ui/BlurText';
import { GradualBlur } from '@/components/ui/GradualBlur';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=70"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg" />
      </div>

      <div className="container-content flex min-h-[78vh] flex-col justify-end pb-24 pt-28">
        <BlurText
          text={t(locale, 'hero.headline')}
          className="max-w-3xl text-4xl leading-tight sm:text-6xl"
        />
        <p className="mt-5 max-w-xl text-base text-sand sm:text-lg">
          {t(locale, 'hero.subline')}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton href={`/${locale}/experiences`} variant="gold">
            {t(locale, 'hero.primary')}
          </MagneticButton>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-line-strong px-6 py-3 text-sm text-text hover:bg-card-2"
          >
            {t(locale, 'hero.secondary')}
          </Link>
        </div>
      </div>
      <GradualBlur position="bottom" />
    </section>
  );
}
