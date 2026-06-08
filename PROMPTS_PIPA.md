# Prompts de construcción — Pipa Group (Praia da Pipa, RN, Brasil)

> **Arquitectura principal:** `CONTEXT/deep-research-report2.md` + contexto real de Pipa.
> **"Mallorca as Local" / Component Canvas:** se usa SOLO como referencia de sistema visual premium (componentes animados, accesibilidad, reduced-motion, seguridad, i18n, estructura de experiencia). NO es el producto.
> **Producto real:** plataforma de conversión **multi-marca** para Pipa Group (alojamiento, gastronomía, beach/pool club, eventos y partner B2B). NO un directorio genérico.
>
> Reglas globales que aplican a los 5 prompts:
> - Idiomas: **pt-BR (primario y fallback) · en · es**. (NO de/fr/it/ar/ru.)
> - Moneda: **BRL (R$)**. Contacto principal: **WhatsApp +55**.
> - Objetivo de conversión: **acción en ≤3 interacciones**. El concierge NO es la columna vertebral.
> - **Veracidad:** no inventar ratings, horarios, precios, capacidades ni claims. No `aggregateRating` automático salvo ratings verificados y preparados. Diferenciar `verified` / `needs_review` / `placeholder` en TODO dato.
> - Quick-path switcher: **Stay · Dine · Pool · Events · Partners**.
> - Soporte preparado para **Supabase (RLS) + n8n + dashboard de staff** según report2.
> - Component Canvas como sistema visual, eligiendo componentes por utilidad real. **Máx 2–3 efectos fuertes por sección.**
> - Seguridad y accesibilidad fuertes en los 5 prompts (ver bloques).

Orden de build:
1. Arquitectura base, stack, data model, i18n, seguridad, Supabase/n8n/dashboard preparado.
2. Home premium multi-marca con quick-path switcher + marcas reales + conversion paths + UI animada.
3. Brand pages y contenido por marca (datos verified vs needs_review separados).
4. Booking/enquiry flows ≤3 interacciones por path (Stay/Dine/Pool/Events/Partners).
5. Hardening final (a11y, reduced motion, performance, SEO/schema, QA, deployment, content safety, legal, docs).

---

## PROMPT 1/5 — Arquitectura base Pipa Group: stack, data model, i18n, seguridad, Supabase/n8n/dashboard

```md
Actúa como senior full-stack product engineer, UI architect y accessibility/security lead.

Construye la BASE de una plataforma web premium, multilingüe, animada y responsive para "Pipa Group": una colección curada y multi-marca de hospitality en y alrededor de Praia da Pipa (Tibau do Sul, RN, Brasil). Sigue como arquitectura principal el estudio de producto (multi-brand conversion layer): grupo curado con distintos entry points por audiencia, NO un directorio genérico ni una web de un solo local.

Usa el sistema visual de referencia (estilo editorial Apple, dark-luxury con calidez tropical: madera, arena, mar) solo como guía de UI premium: microinteracciones suaves, cards premium, formularios guiados, mobile-first, nada saturado. Máximo 2–3 efectos visuales fuertes por sección.

OBJETIVO DE NEGOCIO (rige todas las decisiones):
Un visitante debe entender el grupo en una vista e iniciar la acción correcta (reservar/consultar) en 3 interacciones o menos, por cualquiera de estos paths: Stay, Dine, Pool, Events, Partners.

STACK OBLIGATORIO:
- Next.js App Router + TypeScript estricto + React (server components por defecto, client logic ligero).
- Tailwind CSS.
- Motion / Framer Motion.
- Data layer preparada para Supabase (Postgres + Row Level Security). En esta fase los datos viven tipados en /data, pero detrás de una capa de acceso (repos/services) que pueda migrarse a Supabase SIN reescribir las páginas.
- Automatización preparada para n8n (routing de leads, alertas, digests) — sin implementarla aún, pero con el shape de datos y los puntos de integración listos.
- i18n interno ligero (sin dependencia pesada).
- Sin secretos ni tokens en frontend. Sin dangerouslySetInnerHTML salvo sanitización explícita. Todo dato editable en /data o /config.

IDIOMAS (mercado brasileño):
- pt-BR (primario y fallback automático).
- en.
- es.
Estructura tipada y extensible, pero NO implementes de/fr/it/ar/ru.
El sistema debe: detectar locale desde URL (/pt, /en, /es); fallback a pt-BR; objeto translations tipado por clave; no romper si falta una clave (fallback automático, warning solo en dev); actualizar html lang y dir (ltr); mantener rutas localizadas y CTAs/formularios traducidos; preservar la página al cambiar de idioma.

MONEDA Y FORMATO:
- Moneda por defecto BRL (R$), con Intl.NumberFormat por locale.
- Fechas y números por locale (pt-BR por defecto).
- WhatsApp/teléfono en +55, construidos siempre desde config validada (helper, nunca string suelto).

ESTRUCTURA DE CARPETAS:
/app
  /[locale]
    layout.tsx
    page.tsx                      # Landing del grupo (Prompt 2)
    /experiences/page.tsx         # Colección agrupada por path
    /brands/[slug]/page.tsx       # Página de marca (Prompt 3)
    /book/[slug]/page.tsx         # Enquiry/booking por marca (Prompt 4)
    /stay/page.tsx                # Hub de alojamiento
    /dine/page.tsx                # Hub de restauración
    /pool/page.tsx                # Hub Makai / pool & leisure
    /events/page.tsx              # Eventos privados
    /partners/page.tsx            # PIPA Ice Supply (B2B)
    /offers/page.tsx              # Ofertas y menús estacionales
    /gallery/page.tsx
    /contact/page.tsx
    /faq/page.tsx
    /privacy/page.tsx
    /terms/page.tsx
  /api/inquiries/route.ts         # POST lead intake (Prompt 4)
  globals.css
/components
  /ui          # Componentes del Component Canvas (lista abajo), como sistema visual
  /layout      # Header, Footer, MobileNav, DesktopDock, LocaleSwitcher, QuickPathSwitcher
  /sections    # Hero, FeaturedCollection, StayStrip, DiningStrip, PoolStrip, EventsSection, SeasonalOffers, GuestConfidence, ContactCTA
  /forms       # InquiryModal, StayForm, DineForm, PoolForm, EventForm, PartnerForm
/data
  brands.ts            # marcas reales + perfiles (verified/needs_review/placeholder)
  offers.ts            # ofertas semanales/mensuales/anuales + eventos estacionales
  menus.ts             # menús HTML-first
  navigation.ts
  translations.ts
  seo.ts
/lib
  i18n.ts  validation.ts  whatsapp.ts  schema.ts  format.ts  analytics.ts  security.ts  cn.ts
  /supabase/server.ts  /supabase/client.ts   # clientes preparados; claves server-side fuera del bundle
  /data-access/brands.ts  /data-access/inquiries.ts   # repos migrables a Supabase
/types
  brand.ts  offer.ts  menu.ts  event.ts  inquiry.ts  booking.ts  locale.ts

DATA MODEL (alineado con report2; preparado como tablas Supabase):
Define types para: Brand, BrandLocation, BrandCategory, AudiencePath ('stay'|'dine'|'pool'|'events'|'partners'),
BookableItem, Offer, Menu, BrandEvent, ReviewExcerpt, Inquiry, Booking, QrDestination, StaffUser, NotificationRule.

type Locale = 'pt-BR' | 'en' | 'es';
type LocalizedText = Partial<Record<Locale, string>> & { 'pt-BR': string };
type VerificationStatus = 'verified' | 'needs_review' | 'placeholder';
// Cada CAMPO sensible puede llevar su propio estado, no solo la marca entera:
type Field<T> = { value: T; status: VerificationStatus; source?: string };

type Brand = {
  id: string;
  slug: string;
  name: string;
  audiencePath: AudiencePath;
  category: BrandCategory;            // restaurant | cafe | beach_club | stay | b2b ...
  shortLine: LocalizedText;          // una frase de posicionamiento
  description: LocalizedText;
  heroImage: string;
  gallery: { src: string; alt: LocalizedText; meta?: Record<string,string> }[];
  location: { area: string; address?: Field<string>; mapUrl?: string; coords?: {lat:number;lng:number} };
  priceLevel?: Field<1|2|3|4>;
  priceLabel?: LocalizedText;
  hours?: Field<LocalizedText>;
  signature?: Field<LocalizedText>;
  facilities: Field<string>[];
  bestFor: string[];
  moodTags: string[];
  peakTimes?: Field<LocalizedText>;
  contact?: { whatsapp?: Field<string>; instagram?: Field<string>; website?: Field<string>; email?: Field<string> };
  services: LocalizedText[];
  recentEvents?: BrandEvent[];
  reviewExcerpts?: ReviewExcerpt[];  // TEXTO citado, con fuente. NUNCA rating numérico inyectado.
  primaryCta: { labelKey: string; href: string };
  secondaryCta?: { labelKey: string; href: string };
  verificationStatus: VerificationStatus;  // estado global de la ficha
  updatedAt: string;
};

REGLAS DE VERACIDAD (críticas):
- NO incluyas rating numérico de Google/TripAdvisor como dato estructurado ni en UI. Solo reviewExcerpts como texto citado con fuente.
- Todo dato no confirmado por la investigación va con status 'needs_review' o 'placeholder', nunca 'verified' por defecto.
- En UI, un dato 'needs_review'/'placeholder' se muestra como fallback traducido ("Horário a confirmar", "Preço sob consulta", "Solicitar detalhes") o se oculta; nunca como hecho confirmado.
- Badge "Verified" SOLO si verificationStatus === 'verified'.

TEMA (dark luxury cálido, tropical):
--bg:#070707; --bg-soft:#0f0e0c; --card:#141210; --card-2:#1b1813;
--line:rgba(255,255,255,.08); --line-strong:rgba(255,255,255,.16);
--text:#f4ece0; --muted:rgba(244,236,224,.62);
--gold:#c9a96e; --gold-soft:rgba(201,169,110,.16); --gold-glow:rgba(201,169,110,.32);
--sea:#0c2a33; --sand:#e7d8be; --wood:#6b4f33;
--whatsapp:#25d366; --danger:#ef4444; --success:#10b981;
Tipografía: sans limpia para UI + serif editorial para titulares; titulares con letter-spacing negativo; secundarios suaves (no blanco puro).

COMPONENT CANVAS (sistema visual; convierte a TSX si vienen en JS; elige por utilidad real):
MVP probables: Dialog, AnimatedStepper, Checkbox, AnimatedToggle, ExpandableCards, GlowHoverCards,
ImageMetadataPreview, MagneticButton, GradualBlur, BlurText.
Secundarios disponibles: ExposureSlider, AppleInvites, InteractiveImageSelector, InfiniteSlider,
TiltedCard, Dock, Stepper (React Bits), RevealText, ScrollRevealParagraph.
No metas efectos por meter. Documenta en cada componente: soporte reduced-motion y a11y.

ACCESIBILIDAD (desde el inicio, global):
- Nombre accesible en todos los botones; icon-only siempre con aria-label.
- Dialog con focus trap + focus return, aria-modal, aria-labelledby/describedby.
- Sliders con role="slider" + aria-valuemin/max/now/text + teclado (Arrow/Home/End).
- Cards interactivas = <button>/<a> reales (o role + Enter/Space). Nada de div clickable sin teclado.
- Imágenes con alt significativo; decorativo con aria-hidden.
- focus-visible; touch targets ≥44px.
- prefers-reduced-motion respetado en TODO: sin tilt, magnetic, blur-in, scroll reveal fuerte, dock magnification ni slides de step.
- Formularios: labels visibles SIEMPRE; nunca placeholder como única label; label encima del campo en mobile (W3C).

SEGURIDAD (global):
- Sin API keys/tokens en frontend. Sin eval. Sin innerHTML salvo sanitización.
- Validar y sanitizar todos los inputs.
- Honeypot anti-spam + consent checkbox cuando se guarde info personal.
- localStorage SOLO preferencias no sensibles (locale, path activo, saved brand IDs). NUNCA email/teléfono/PII.
- Links externos con rel="noopener noreferrer". WhatsApp con encodeURIComponent + número desde config validada.
- Supabase: acceso cliente solo con RLS; claves server-side fuera del bundle. TODO SECURITY donde falte backend real.
- mathjs: instalar solo si GradualBlur lo usa de verdad; si no, omitir. Eliminar libs no usadas.

SUPABASE / n8n / DASHBOARD (preparar, no construir entero):
- Esboza el esquema de tablas (brands, brand_locations, bookable_items, offers, menus, events, review_excerpts, lead_sources, enquiries, bookings, qr_destinations, staff_users, notification_rules) como migración SQL comentada + RLS de ejemplo.
- Deja documentados los puntos de integración n8n (routing de leads, alerta de nuevo lead, alerta de respuesta perdida, digest diario).
- Deja el shape de datos del dashboard de staff (enquiries, bookings, tiempos de respuesta, source breakdown, client management) listo, sin implementar la UI admin todavía.

PERFORMANCE/SEO base:
- next/image, lazy load, dynamic import de componentes pesados (Dock, TiltedCard, ImageMetadataPreview, InteractiveImageSelector).
- CSS variables para mood. Reducir CLS. font-display swap. Preload solo del hero.
- Metadata por locale, OG/Twitter, canonical + hreflang, slugs limpios.
- lib/schema.ts: builder JSON-LD Organization para el grupo (subtipo por marca en Prompt 3/5).

ENTREGABLE:
Genera tokens, tipos, data model con las marcas reales y su verificationStatus por campo, i18n (pt-BR/en/es), capa de acceso a datos Supabase-ready, esquema SQL+RLS comentado, layout, QuickPathSwitcher base, componentes base del Canvas y stubs de páginas. No hagas preguntas. Imágenes faltantes = placeholders seguros con comentario de reemplazo. Marca TODO_CONTENT / TODO_BACKEND donde aplique.
```

---

## PROMPT 2/5 — Home premium multi-marca con quick-path switcher (Stay/Dine/Pool/Events/Partners)

```md
Actúa como senior frontend designer y motion engineer. Construye la Home de "Pipa Group" siguiendo el estudio de producto: una landing editorial premium que ayuda al visitante a ELEGIR un path antes de pedirle consumir detalle, y a iniciar una acción en ≤3 interacciones.

Tono visual: cálido, táctil, tropical (madera/arena/mar), editorial con disciplina de imagen. Premium por composición, espaciado y tipografía, no por saturación. Máx 2–3 efectos fuertes a la vez.

ORDEN DE SECCIONES:
1. Header premium.
2. Hero (una imagen editorial amplia + headline + una línea + 2 CTAs).
3. Quick-path switcher (Stay · Dine · Pool · Events · Partners) justo bajo el hero — la decisión UX más importante.
4. Featured collection (cards grandes de las marcas, con pesos distintos).
5. Stay strip (las 2 estancias, entrada a fechas/enquiry).
6. Dining & beach moments (Umi, Nami, TĀO + Makai como leisure).
7. Pool & day-use (Makai: piscina, sunbeds, eventos).
8. Private events (captación de leads de alto valor, calmada).
9. Menús y ofertas estacionales (semanal/mensual/anual; HTML-first; eventos de temporada).
10. Guest confidence (extractos de reseña citados; ubicación; promesa de tiempo de respuesta).
11. Final contact CTA (WhatsApp + llamada + formulario).
12. Footer (links de marca, legal, partner path, social, contacto).

HEADER:
- Desktop: logo "Pipa", nav (Experiences, Stay, Dine, Pool, Events, Contact), LocaleSwitcher, MagneticButton CTA "Iniciar reserva".
- Mobile: logo + menú accesible + bottom nav estándar (sin dock magnification).
- Dock solo desktop opcional: Home, Stay, Dine, Pool, Events, Saved, Language; con activación teclado (Enter/Space), aria-label por item, sin magnification en reduced motion.

HERO:
- BlurText para headline (aria-label con texto completo).
- RevealText para la línea de apoyo.
- GradualBlur en el bottom (aria-hidden).
- MagneticButton para el CTA primario; CTA secundario normal.
- Imagen editorial amplia con overlay; sin vídeo pesado autoplay.

Copy del hero (traducido; no es claim final):
PT-BR: "Descubra a Pipa, organizada com intenção." / "Estadias boutique, destinos gastronômicos, pool club, eventos e contato direto com o grupo Pipa." / CTA "Explorar o grupo" / Secundario "Iniciar reserva".
EN: "Discover Pipa, arranged with intention." / "Boutique stays, dining destinations, pool club, event enquiries, and direct contact across the Pipa group." / "Explore the Group" / "Start a Booking".
ES: "Descubre Pipa, organizada con intención." / "Estancias boutique, destinos gastronómicos, pool club, eventos y contacto directo con el grupo Pipa." / "Explorar el grupo" / "Iniciar reserva".

QUICK-PATH SWITCHER (núcleo de conversión):
- Tabs segmentados accesibles: Stay · Dine · Pool · Events · Partners.
- Al seleccionar: hace scroll a la sección correspondiente O intercambia el contenido de una "booking strip" sin sacar al usuario de la página.
- El CTA contextual cambia por path:
  - Stay → "Book Your Stay" → /stay o /book/[brand]
  - Dine → "Reserve a Table" → /dine o reserva
  - Pool → "Explore Makai" → /pool
  - Events → "Plan a Private Event" → /events
  - Partners → "Request Supply Information" → /partners
- a11y: role="tablist"/"tab"/"tabpanel" o radios con aria; navegable por teclado (Arrow/Home/End); aria-selected/current.
- Persistir el path elegido en localStorage (no sensible) para coherencia entre páginas.

FEATURED COLLECTION (pesos distintos, no aplanar):
- GlowHoverCards + ExpandableCards/ImageMetadataPreview. Una imagen fuerte por card, sin carruseles dentro.
- Estancias = privadas/restaurativas; restauración = sensorial/social; Makai = experiencial/eventos; PIPA Ice Supply = secundario (footer o sección Partners), NUNCA en el hero emocional.
Microcopy de cards (dirección, no claim final):
- Casa Palmeira: "Central, íntima e silenciosamente desenhada para estadias curtas em Pipa."
- Recanto de Ibiza: "Um refúgio tropical com um ritmo mais calmo e reservado."
- Umi Fun Kitchen: "Comida, atmosfera e um momento gastronômico mais editorial."
- Makai Pool Club: "Lazer à beira da piscina e energia de eventos perto da costa."
- Nami Madeiro: "Gastronomia de frente para o mar, com o clima relaxado do Madeiro."
- TĀO Pipa: "Um ritmo de café mais leve para o café da manhã, brunch e pausas."
- PIPA Ice Supply: "Produção e entrega confiáveis para operadores." (Partners, secundaria)
Cada card: imagen, una línea de posicionamiento, UN CTA primario por path + como mucho UNA acción secundaria. Card = button/link real.

STAY STRIP: dos cards (Casa Palmeira, Recanto de Ibiza) con diferenciadores cortos + entrada a fechas/huéspedes o enquiry. CTA "Book Casa Palmeira" / "Book Recanto de Ibiza". (Datos de estancia limitados → fallbacks "A confirmar".)

DINING & BEACH MOMENTS: 3-4 cards (Umi, Nami, TĀO; Makai como leisure) con etiqueta de cocina/atmósfera, link a menú y a reservar. CTA "View Menu" / "Reserve a Table".

POOL & DAY-USE (Makai): card/sección con piscina, sunbeds, surfboard rental, noches de DJ (Makai Boate, sábados). CTA "Explore Makai" / "Plan a pool day". Marca como nuevo venue (sin rating).

PRIVATE EVENTS: sección calmada (mesas, luz de noche, grupo privado; NO estética de cartel de discoteca). MagneticButton + enlace a /events. Honeypot oculto; sin guardar PII sin consentimiento.

MENÚS Y OFERTAS ESTACIONALES: highlights semanales, agenda mensual, deck anual. HTML-first; flipbook segundo; PDF solo si hace falta. Conecta con eventos reales de Pipa (Sabores da Pipa, São João da Pipa 2026, Carnaval da Pipa) marcados TODO_CONTENT si no hay fecha confirmada. Preparar landings de temporada (variantes de campaña) sin construirlas aún.

GUEST CONFIDENCE: extractos de reseña como TEXTO citado (con fuente si hay permiso). NUNCA ratings numéricos de terceros ni aggregateRating. Ubicación, contacto directo, promesa de tiempo de respuesta.

FINAL CTA + FOOTER: bloque de contacto (WhatsApp verde solo aquí, llamada, formulario). Footer con links de marca, legal (Privacy/Terms placeholders), partner path, social, contacto. Nota: "Curated places and services in and around Pipa. Availability may change." (traducida).

ANIMACIONES: BlurText solo en hero; glow en featured; InfiniteSlider (si se usa) pausado en hover y estático en reduced motion; scroll reveal en bloques editoriales. prefers-reduced-motion global.

MULTILINGÜE: todo texto visible desde translations (pt-BR/en/es), fallback pt-BR. LocaleSwitcher cambia URL y mantiene página. Emphasis vía componente TransText seguro (tokens, sin HTML raw).

SEGURIDAD: WhatsApp/teléfono desde config validada con encodeURIComponent; links externos con rel="noopener noreferrer"; formularios con validación + honeypot; sin PII en localStorage.

ENTREGABLE: Home completa con secciones conectadas, quick-path switcher funcional con CTA contextual, datos reales de marcas con su verificationStatus, i18n y responsive. Comenta TODO_CONTENT/TODO_BACKEND donde aplique.
```

---

## PROMPT 3/5 — Brand pages y contenido por marca (datos verified vs needs_review separados)

```md
Actúa como product engineer de hospitality multi-marca. Construye la capa de colección y las páginas de marca del Pipa Group. NO es un directorio con SEO programático: es una colección editada con entry points por audiencia (Stay/Dine/Pool/Events/Partners).

PÁGINAS:
1. /[locale]/experiences — colección agrupada por path (Stay well · Eat beautifully · Pool & leisure · Celebrate with intention · Work with the group).
2. /[locale]/brands/[slug] — página de marca (SEO-friendly).
3. Modal de detalle reusable (Dialog) para abrir una marca sin salir de experiences.
4. Hubs por path: /stay, /dine, /pool, /events, /partners.

EXPERIENCES (colección):
- ExpandableCards + GlowHoverCards + ImageMetadataPreview.
- Filtros honestos y ligeros (NO directory): por path, priceLevel, moodTags, facilities, "tem WhatsApp", "tem piscina", "vista mar". Si falta un dato → "A confirmar" traducido, nunca inventado.
- Sort: Featured, priceLevel asc/desc, recientes. No dependas de ratings.
- Card: imagen, badge de path, nombre, una línea de posicionamiento, priceLevel (si verified), top 2 facilities, moodTags, CTA primario por path + acción secundaria opcional. Card = button/link real.
- Favoritos en localStorage SOLO por ID. Save/Share/Remove con aria-label.

DETAIL DIALOG (reusable): hero image, nombre, path, resumen; tabla semántica (best for, priceLevel, peak time, facilities, signature, contacto) con fallbacks para needs_review; gallery con ImageMetadataPreview; extractos de reseña citados (sin ratings); CTA primario por path + "Save"; disclaimer "Os detalhes podem mudar. Confirmamos disponibilidade antes de fechar." (traducido); focus trap, Escape, aria-labelledby/describedby.

BRAND PAGE (/brands/[slug], SEO-friendly):
Secciones: hero editorial, overview, gallery, key facts, why go, best time, facilities, menú/signature (si aplica), eventos/actividad reciente, marcas similares del mismo path, CTA de booking/enquiry (Prompt 4).
JSON-LD con el subtipo MÁS específico:
- Restaurantes (Umi, Nami, TĀO): Restaurant + menu URL + openingHoursSpecification (solo si verified) + location.
- Estancias (Casa Palmeira, Recanto de Ibiza): tipo lodging adecuado.
- Makai: LocalBusiness/leisure adecuado; Event schema SOLO si hay página de evento real con fecha.
- PIPA Ice Supply: Organization/LocalBusiness B2B.
NO uses aggregateRating con datos de terceros. No diseñes la sección de restaurantes esperando el carousel de Google.

MENÚS (HTML-first): /data/menus.ts tipado y localizado; render HTML legible primero; teaser de flipbook (MenuFlipbookTeaser) y PDF descargable solo si existe; menu URL real para el JSON-LD; preparar qrDestinations por menú/marca.

DATOS REALES POR MARCA — separa estrictamente verified / needs_review / placeholder.
Considera VERIFIED solo lo respaldado por la investigación con fuente. Marca como needs_review lo que las fuentes públicas reportan de forma inconsistente (horarios, precios, capacidades, ratings) y como placeholder lo que no aparece en la investigación.

UMI FUN KITCHEN
- verified: tipo Restaurant/Cocktail Bar; cozinha fusão nipo-peruana; Av. Baía dos Golfinhos, 965, Praia da Pipa; IG @umifunkitchen; WhatsApp +55 84 99616-2007; terraço multinível com vista para o mar; música ao vivo; sem piscina; signature robalo/poke/sushi.
- needs_review: horários (fontes divergem ~07:30–00:00/01:00); faixa de preço (~R$40–60); capacidade (~100+); avaliações.
- nunca: rating numérico como dado estruturado.

MAKAI POOL CLUB
- verified: Beach/Pool Club; Largo de São Sebastião, 102, Praia do Centro; IG @makaipipapoolclub; piscina + sunbeds + DJ + aluguel de prancha; conceito Ibiza-style; noites de balada aos sábados (Makai Boate); signature Spag & Balls / Makai Burger; venue novo (sem avaliações consolidadas).
- needs_review: WhatsApp +55 12 99159-4653 (indireto, via parceiro Surf's Up); horários (~11:00–20:00 + eventos); preços.
- placeholder: capacidade exata.

NAMI MADEIRO
- verified: restaurante à beira-mar do resort Aldeia do Madeiro Beach; Av. Antônio Florêncio, 3647, Praia do Madeiro; IG @namimadeiro; piscina/day-use; cozinha brasileira/frutos do mar; reservas via Instagram.
- needs_review: horários (IG ~08:00–22:00); preços (~R$40–80); telefone próprio (não divulgado).
- placeholder: capacidade; e-mail.

TĀO PIPA
- verified: Café/Brunch; Av. Baía dos Golfinhos, 1520, Praia do Centro; IG @taopipa; WhatsApp +55 71 99636-2261; café de especialidade + brunch; signature ceviche de robalo ao leite de tigre de maracujá; espaço pequeno/íntimo; sem site oficial.
- needs_review: horários (IG ~07:30–22:00); preços (~R$25–50); capacidade (~20).

CASA PALMEIRA (Stay)
- verified: marca de estadia do grupo; perfil central e íntimo para estadias curtas.
- placeholder: endereço, contato, fotos, preços, disponibilidade → TODO_CONTENT.

RECANTO DE IBIZA (Stay)
- verified: marca de estadia do grupo; perfil de refúgio tropical mais reservado.
- placeholder: endereço, contato, fotos, preços, disponibilidade → TODO_CONTENT.

PIPA ICE SUPPLY (Partners / B2B)
- verified: serviço B2B de produção e entrega de gelo para operadores.
- placeholder: área de cobertura, tabelas, contato, prazos → TODO_CONTENT.

REGLA DE RENDER: ningún campo needs_review/placeholder se muestra como hecho confirmado. Usa fallbacks traducidos o oculta. Badge "Verified" solo si verificationStatus==='verified'.

PARTNERS (PIPA Ice Supply): patrón de fiabilidad (no de mood): service area, order size/tipo, delivery timing, business name + contacto. Sección secundaria o nav "For Partners". No compite con marcas guest-facing.

A11y/SEGURIDAD/PERFORMANCE: labels visibles, teclado, focus-visible, reduced motion, sanitizar search, links seguros, WhatsApp con encodeURIComponent, next/image, debounce 150ms, dynamic import del Dialog/ImageMetadataPreview.

ENTREGABLE: experiences, brand pages, hubs por path, modal de detalle, menús HTML-first, filtros honestos, JSON-LD por subtipo, datos reales cargados con verificationStatus por campo. No hagas preguntas; TODO_CONTENT/TODO_BACKEND donde falte.
```

---

## PROMPT 4/5 — Booking/enquiry flows ≤3 interacciones (Stay · Dine · Pool · Events · Partners)

```md
Actúa como senior product designer, conversion strategist y full-stack engineer. Construye las journeys de reserva/consulta del Pipa Group. Regla rectora: el usuario inicia la acción correcta en 3 interacciones o menos. NO conviertas nada en un wizard largo. Cada journey tiene su propia lógica de routing.

Patrón de ≤3 interacciones (referencia): (1) elegir path/marca, (2) completar un único formulario corto, (3) enviar / abrir WhatsApp prerelleno.

1) STAY (Casa Palmeira, Recanto de Ibiza) — /book/[slug] o modal:
   Campos mínimos: name, dates (rango aproximado ok), nº de huéspedes, niños/habitaciones si aplica, una nota opcional.
   Si NO hay integración de booking real, NO finjas que existe: enquiry de alta confianza → WhatsApp/email/dashboard.

2) DINE (Umi, Nami, TĀO) — reserva corta:
   El visitante quiere: menú, atmósfera, horarios/ubicación o reservar. CTAs "View Menu" / "Reserve a Table".
   Reserva = modal corto o WhatsApp prerelleno: fecha, hora, nº de personas, preferencias (opcional). Sin formulario largo salvo seating formal real.

3) POOL (Makai day-use) — enquiry de día:
   Campos: fecha, nº de personas, tipo (day-use / sunbeds / área) o "evento/festa". Opción de mesa/área. → WhatsApp/enquiry.
   Marca como venue nuevo; no prometas disponibilidad.

4) EVENTS (Makai, Umi, estancias seleccionadas) — lead de mayor valor, routing propio:
   Pre-book: ofrece 3 tipos curados primero (private dining · celebration/group day · custom event enquiry).
   Form: event type, fecha preferida, nº de invitados, venue preferido o "abierto a recomendación", contacto.
   Concierge OPCIONAL como enriquecimiento (no columna vertebral, siempre saltable): AnimatedStepper corto para perfilar el evento (mood con ExposureSlider, intereses con Checkbox/GlowHoverCards, inspiración con InteractiveImageSelector, participantes con AppleInvites) que termina en el mismo enquiry. Botón visible "Ir directo al formulario".

5) PARTNERS (PIPA Ice Supply, B2B) — quotation journey:
   Patrón de fiabilidad: service area, order size/tipo de enquiry, delivery timing, business name + contacto. Distinto del resto; lleva a "Request a quote".

WHATSAPP-FIRST (realista, sin over-automation):
- Deep links al lanzamiento. Helper lib/whatsapp.ts: número desde config validada + encodeURIComponent del mensaje.
- Plantilla por defecto (pt-BR; traducir):
  "Olá Pipa, gostaria de mais informações sobre [marca/serviço]. Nome: / Datas: / Nº de pessoas: / Horário preferido: / Observações: / Origem: [Nome da página]"
- Assistant/bot (si se añade): NARROW — FAQs + routing + handoff a humano. No chatbot libre que simule reservas.

SUPABASE LEADS:
- Endpoint /app/api/inquiries/route.ts (POST) con validación zod en servidor.
- Persistir en Supabase tabla `enquiries` (preparar `bookings`, `lead_sources`). Acceso con RLS; nunca claves en frontend.
- Sin Supabase conectado aún: en dev loguea sin PII; en prod muestra TODO_BACKEND. Rate-limit placeholder. Payload mínimo necesario.
- Puntos de integración n8n marcados (routing, alerta de nuevo lead, alerta de respuesta perdida, digest diario).

type Inquiry = {
  type: 'stay'|'dine'|'pool'|'event'|'partner';
  brandSlug?: string;
  name: string;
  whatsapp: string;
  email?: string;
  dates?: string;
  guests?: number;
  preferredTime?: string;
  partySize?: number;
  eventType?: string;
  poolOption?: string;
  partnerInfo?: { serviceArea?: string; orderSize?: string; deliveryTiming?: string; businessName?: string };
  message?: string;
  consent: boolean;
  preferredLanguage: Locale;
  source: string;     // 'home_quick_path' | 'brand_page' | 'events' ...
  locale: Locale;
  createdAt: string;
};

VALIDACIÓN (zod; errores traducidos pt-BR/en/es):
- name requerido (min 2). whatsapp requerido y normalizado (+55). email opcional pero válido si se da. consent requerido.
- guests/partySize entre 1 y 99. fechas futuras si son reales; permitir texto aproximado si flexible.
- Honeypot oculto: no enviar si está relleno. encodeURIComponent en cualquier fallback de WhatsApp.

ESTADO DE ÉXITO: "Sua solicitação está pronta." + CTA WhatsApp fallback si no hay backend + "Explore enquanto preparamos." No prometas confirmación instantánea ni disponibilidad garantizada si no hay operación real. Si generas un ID local, aclara si NO se envió a backend.

A11y: labels visibles (encima del campo en mobile), errores con aria-describedby, focus al primer error, focus al heading al cambiar de paso, stepper con aria-current, reduced motion sin slides, inputs reales (no placeholder-only).

SEGURIDAD: nunca PII en localStorage; validar/sanitizar; honeypot; CSRF si hay sesión; rate-limit; logs sin PII en prod; WhatsApp solo con acción del usuario; links externos seguros.

ENTREGABLE: journeys Stay/Dine/Pool/Events/Partners (cada una ≤3 interacciones), WhatsApp helper, endpoint /api/inquiries (Supabase-ready), validación i18n, concierge opcional/saltable dentro de Events, success state, puntos n8n marcados. No hagas preguntas; TODO_BACKEND claro donde falte.
```

---

## PROMPT 5/5 — Hardening final: a11y, reduced motion, performance, SEO/schema, QA, deployment, content safety, legal, docs

```md
Actúa como principal engineer de producción (seguridad, accesibilidad, performance, QA, deployment). Haz el hardening del Pipa Group para un MVP real, sin puntos ciegos. No añadas features nuevas si comprometen estabilidad.

CHECKLIST DE COMPONENTES (Component Canvas) — verifica en cada uno:
GlowHoverCards (overlay aria-hidden, pointer-events none, reduced motion sin tracking),
ImageMetadataPreview (aria-label en botones, tabla semántica, focus ring, 44px, Escape),
InteractiveImageSelector (alt por imagen, Share/Delete con aria-label, selección por teclado, contador, límite, sin shake en reduced motion),
InfiniteSlider (pause on hover, estático en reduced motion, duplicados ocultos a screen readers),
ScrollRevealParagraph / RevealText (texto completo accesible, plano en reduced motion),
MagneticButton (touch off, reduced motion off, disabled real, asChild conserva semántica, sin layout shift),
Dialog/AlertDialog (focus trap+return, aria-labelledby/describedby/modal, Escape/backdrop correcto, scroll lock),
Checkbox (label conectado, aria-checked mixed, Space, disabled real),
AnimatedToggle (role switch, aria-checked, aria-label, Enter/Space, disabled real),
AnimatedStepper (step anunciado, teclado, focus al cambiar, reduced motion),
AppleInvites (alt en avatares, add/remove anunciado, fallback teclado),
ExpandableCards (Enter/Space, aria-expanded, tabIndex, nada de div clickable sin teclado),
ExposureSlider (role slider + aria-valuemin/max/now/text, Arrow/Home/End, touch, throttle de CSS vars, reduced motion),
GradualBlur (aria-hidden, pointer-events none, fallback sin backdrop-filter, reduced motion),
TiltedCard (off en touch/reduced motion, alt, sin info crítica solo en tooltip, sin warning en prod),
Dock (desktop only + bottom nav en mobile, role toolbar, aria-label panel/item, Enter/Space, sin magnification en reduced motion, focus ring),
Stepper React Bits (indicadores como button, aria-current, reduced motion, focus, alt),
BlurText (aria-label con texto completo, plano en reduced motion, no para párrafos largos).

SEGURIDAD:
- Formularios: validación + sanitización + honeypot + consent; sin PII en localStorage; sin PII en logs de prod; errores genéricos de red; validación servidor (zod); rate-limit (TODO si falta backend); payload mínimo.
- Links externos: target blank + rel noopener noreferrer. WhatsApp con encodeURIComponent; teléfonos desde config validada; sin URLs user-generated sin whitelist.
- Sin dangerouslySetInnerHTML. Emphasis vía TransText con tokens seguros (ej. "Pipa, {em}arranged with intention{/em}").
- Supabase: cliente con RLS, claves server-side fuera del bundle; revisar policies por tabla.
- Dependencias: revisar motion; confirmar si mathjs se usa (si no, quitar); eliminar libs no usadas.
- ENV: .env.example (NEXT_PUBLIC_* solo lo intencional; claves Supabase server-side documentadas); nunca commitear .env.

I18N: verificar pt-BR/en/es, fallback pt-BR, html lang correcto, dir ltr, sin strings hardcodeadas, fechas/precios por locale (BRL por defecto), warning de traducción faltante solo en dev.

SEO / SCHEMA:
- Metadata por página/locale, OG, Twitter card, canonical, hreflang.
- JSON-LD: Organization para el grupo; subtipo específico por marca (Restaurant con menu+openingHours solo si verified para Umi/Nami/TĀO; lodging para Casa Palmeira/Recanto de Ibiza; LocalBusiness/leisure para Makai; Organization B2B para PIPA Ice Supply). Event SOLO con página de evento real con fecha.
- NO aggregateRating con datos de terceros (riesgo de compliance). Reseñas como texto citado.
- FAQ existe como activo de confianza/objeciones, no por rich results.
- Sitemap y robots.txt. Menús con menu URL real; flipbook/PDF secundarios.

PERFORMANCE (targets Lighthouse: Perf 90+, A11y 95+, BP 95+, SEO 95+):
- next/image, lazy load, dynamic imports de componentes pesados; sin animaciones pesadas en mobile; CSS vars para temas; reducir CLS; skeletons ligeros; preconnect solo a dominios usados; font-display swap; preload solo del hero.

MOBILE: header simple, bottom nav estándar, Dock off, TiltedCard off/estático, MagneticButton sin efecto, ExposureSlider con touch, grid 1-2 columnas, sticky CTA sin tapar contenido, safe-area insets.

CONTENT SAFETY:
- Cada brand con id, slug, name, category, audiencePath, shortLine, heroImage, verificationStatus.
- Sin undefined visible. Fallbacks traducidos: "Horário a confirmar", "Preço sob consulta", "Solicitar detalhes".
- Badge "Verified" solo si verificationStatus==='verified'. No mostrar horarios/ratings/preços/capacidades inventados.
- Diferenciar visualmente datos verified vs needs_review/placeholder donde aporte confianza.

n8n / ADMIN (placeholder, dejar preparado):
- Documentar flujos n8n: routing de leads, alerta de nuevo lead, alerta de respuesta perdida, digest diario.
- Esbozar dashboard de staff (protegido, role-aware): enquiries totales, bookings, tiempos de respuesta, source breakdown, client management. Solo expone lo que cada rol debe gestionar (RLS). NO construir entero; dejar shape de datos listo.

LEGAL / PLACEHOLDERS: páginas Privacy y Terms con estructura y placeholders claros (marcados TODO_LEGAL); aviso de cookies/consent si se recopila info; nota de que disponibilidad/precios pueden cambiar.

UX COPY: premium, cercano, local, claro; sin claims no verificables ("melhor de Pipa", "disponibilidade garantida", "confirmação instantânea" sin backend, "oficial" si no lo es).

TESTS / QA checklist:
- Cambio de locale preserva ruta. Quick-path switcher cambia CTA contextual y persiste el path.
- Validación bloquea submit vacío en cada journey. Dialog abre/cierra y devuelve focus.
- Slider y cards usables por teclado. Reduced motion funciona. Sin PII en localStorage.
- Links externos seguros. Bottom nav visible en mobile. Sin errores de consola.
- Cada journey (Stay/Dine/Pool/Events/Partners) alcanzable en ≤3 interacciones.
- Ningún dato needs_review/placeholder se muestra como verified.

DOCS: /docs/IMPLEMENTATION_NOTES.md con: arquitectura, componentes usados, cómo añadir una marca (y su verificationStatus), cómo añadir traducciones, cómo conectar Supabase/n8n para leads, esquema de tablas + RLS, seguridad pendiente, a11y pendiente, deployment checklist.

DEPLOYMENT: npm run lint / typecheck / build; .env.example; README; TODO_BACKEND y TODO_LEGAL marcados.

CRITERIO DE ACEPTACIÓN:
- El visitante entiende la oferta del grupo above the fold.
- Elige su path desde la home de inmediato (quick-path switcher).
- Llega a una acción de reserva/consulta en ≤3 interacciones, en cualquier path.
- Cada brand card: una línea de posicionamiento, un CTA claro, máx una acción secundaria.
- Formularios con labels visibles, cortos, cómodos en mobile.
- Imagen remota configurada de forma segura, sin CLS.
- JSON-LD correcto por tipo, sin sobre-declarar reseñas/rich results.
- Admin protegido por acceso role-aware que solo expone lo gestionable.
- Sin PII en localStorage; reduced motion funcional; usable por teclado; pt-BR/en/es con fallback; sin secretos expuestos; sin datos inventados sin marcar placeholder/needs_review.

ENTREGABLE: hardening completo, TODOs donde dependa de backend/legal real, documentación de lo pendiente, app lista para MVP deployment. No hagas preguntas.
```
