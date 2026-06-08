'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { pathTabs } from '@/data/navigation';
import { t } from '@/lib/i18n';
import type { Locale } from '@/types/locale';
import type { AudiencePath } from '@/types/brand';
import { cn } from '@/lib/cn';

/**
 * The most important UX decision: choose a path before consuming detail.
 * Tabs are keyboard-navigable; the contextual CTA changes by selection.
 * The chosen path persists (non-sensitive) for cross-page coherence.
 */
export function QuickPathSwitcher({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<AudiencePath>('stay');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pipa.path') as AudiencePath | null;
      if (saved && pathTabs.some((p) => p.path === saved)) setActive(saved);
    } catch {
      /* ignore */
    }
  }, []);

  function choose(p: AudiencePath) {
    setActive(p);
    try {
      localStorage.setItem('pipa.path', p);
    } catch {
      /* ignore */
    }
  }

  const current = pathTabs.find((p) => p.path === active)!;

  return (
    <section
      aria-label={t(locale, 'section.choosePath')}
      className="container-content -mt-10 relative z-20"
    >
      <div className="rounded-2xl border border-line-strong bg-bg-soft/90 p-4 backdrop-blur">
        <div role="tablist" aria-label={t(locale, 'section.choosePath')} className="flex flex-wrap gap-2">
          {pathTabs.map((tab) => (
            <button
              key={tab.path}
              role="tab"
              aria-selected={tab.path === active}
              onClick={() => choose(tab.path)}
              className={cn(
                'rounded-full px-4 py-2 text-sm transition',
                tab.path === active
                  ? 'bg-gold text-black'
                  : 'border border-line text-muted hover:text-text',
              )}
            >
              {t(locale, tab.labelKey)}
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm text-muted">{t(locale, 'section.choosePath')}</p>
          <Link
            href={`/${locale}${current.href}`}
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-black hover:brightness-110"
          >
            {t(locale, current.ctaKey)}
          </Link>
        </div>
      </div>
    </section>
  );
}
