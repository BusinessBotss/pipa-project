import { notFound } from 'next/navigation';
import { isLocale, LOCALES, type Locale } from '@/types/locale';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LangSync } from '@/components/layout/LangSync';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <LangSync locale={locale} />
      <Header locale={locale} />
      <main className="min-h-[60vh]">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
