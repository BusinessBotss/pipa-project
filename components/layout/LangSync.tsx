'use client';

import { useEffect } from 'react';
import type { Locale } from '@/types/locale';

/** Keeps <html lang> in sync with the active locale (dir is always ltr here). */
export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = 'ltr';
  }, [locale]);
  return null;
}
