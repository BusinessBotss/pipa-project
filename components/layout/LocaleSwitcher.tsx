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
    // No background — just the initials.
    <div className="flex items-center gap-2" role="group" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          aria-current={l === locale ? 'true' : undefined}
          className={
            'bg-transparent px-1 text-[11px] font-medium tracking-widest transition-colors ' +
            (l === locale ? 'text-gold' : 'text-muted hover:text-text')
          }
        >
          {LABEL[l]}
        </button>
      ))}
    </div>
  );
}
