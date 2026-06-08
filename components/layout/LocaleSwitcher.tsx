'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, type Locale } from '@/types/locale';

const LABEL: Record<Locale, string> = { 'pt-BR': 'PT', en: 'EN', es: 'ES' };

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
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          aria-current={l === locale ? 'true' : undefined}
          className={
            'rounded px-2 py-1 text-xs ' +
            (l === locale ? 'bg-card-2 text-gold' : 'text-muted hover:text-text')
          }
        >
          {LABEL[l]}
        </button>
      ))}
    </div>
  );
}
