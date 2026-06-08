import type { Locale } from '@/types/locale';
import { PathHub } from '@/components/sections/PathHub';

export default function StayPage({ params }: { params: { locale: Locale } }) {
  return <PathHub locale={params.locale} path="stay" />;
}
