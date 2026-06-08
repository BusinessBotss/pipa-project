import Image from 'next/image';
import type { Locale } from '@/types/locale';
import { localize } from '@/lib/i18n';
import { getBrands } from '@/lib/data-access/brands';

export default function GalleryPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const images = getBrands().map((b) => ({ src: b.heroImage, alt: localize(locale, b.subtitle) }));
  return (
    <section className="container-content py-16">
      <h1 className="mb-8 text-3xl sm:text-4xl">Gallery</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
