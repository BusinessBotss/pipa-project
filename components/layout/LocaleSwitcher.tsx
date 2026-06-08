'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, type Locale } from '@/types/locale';

const LABEL: Record<Locale, string> = { 'pt-BR': 'PT', en: 'EN', es: 'ES', de: 'DE', fr: 'FR' };

/** Switches locale while preserving the current path. */
export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    const parts = pathname.split('/');
    parts[1] = next; // replace locale segment
    try {
      localStorage.setItem('pipa.locale', next);
    } catch {
      /* ignore */
    }
    router.push(parts.join('/') || `/${next}`);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1 backdrop-blur" role="group" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          aria-current={l === locale ? 'true' : undefined}
          className={
            'rounded-full px-2.5 py-1 text-[10px] font-medium tracking-widest transition-all ' +
            (l === locale ? 'bg-gold text-black shadow-lg' : 'text-sand hover:bg-white/[0.08]')
          }
        >
          {LABEL[l]}
        </button>
      ))}
    </div>
  );
}
