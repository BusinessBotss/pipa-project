import type { Brand } from '@/types/brand';
import { field, placeholder } from '@/types/common';

/**
 * Pipa Group brands.
 *
 * VERACITY RULES (do not violate):
 *  - `verified`     → confirmed, safe to publish.
 *  - `needs_review` → public/received but confirm before production.
 *  - `placeholder`  → no real data yet → render "A confirmar / To be confirmed".
 *  - NEVER invent data. NEVER a numeric rating. NEVER aggregateRating.
 *  - WhatsApp/Instagram for live CTAs come from lib/config/contact-routing.ts
 *    via `contactKey`. Numbers marked PENDING there render a "Consultar" CTA.
 *
 * Images are remote Unsplash placeholders. TODO_CONTENT: replace with owned media.
 */

const IMG = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=70`;

export const brands: Brand[] = [
  // ── UMI FUN KITCHEN ──────────────────────────────────────────────
  {
    id: 'umi',
    slug: 'umi-fun-kitchen',
    name: 'Umi Fun Kitchen',
    audiencePath: 'dine',
    categoryGroups: ['dine', 'events'],
    category: 'restaurant',
    contactKey: 'umi',
    subtitle: {
      'pt-BR': 'Uma experiência única com comida, música e drinks na Praia da Pipa.',
      en: 'A unique experience with food, music and drinks in Praia da Pipa.',
      es: 'Una experiencia única con comida, música y drinks en Praia da Pipa.',
    },
    description: {
      'pt-BR':
        'Restaurante e cocktail bar com terraço multinível e vista para o mar: breakfast, lunch, sunset, dinner e drinks, com inspiração nipo-peruana.',
      en: 'Restaurant and cocktail bar with a multi-level terrace and sea views: breakfast, lunch, sunset, dinner and drinks, Japanese-Peruvian inspired.',
      es: 'Restaurante y cocktail bar con terraza multinivel y vista al mar: breakfast, lunch, sunset, dinner y drinks, de inspiración nipo-peruana.',
    },
    heroImage: IMG('photo-1517248135467-4c7edcad34c4'),
    gallery: [
      { src: IMG('photo-1579871494447-9811cf80d66c'), alt: { 'pt-BR': 'Sushi e ceviche' } },
      { src: IMG('photo-1414235077428-338989a2e8c0'), alt: { 'pt-BR': 'Terraço com vista para o mar' } },
    ],
    location: {
      area: 'Praia da Pipa',
      address: field('Av. Baía dos Golfinhos, 965, Praia da Pipa, Tibau do Sul, RN', 'verified', 'official site'),
      // mapUrl: TODO_CONTENT — exact Google Maps pending.
    },
    hours: field(
      {
        'pt-BR': 'Aberto todos os dias das 08h às 00h. Horários especiais podem ser confirmados pelo WhatsApp.',
        en: 'Open daily from 08:00 to 00:00. Special opening hours can be confirmed via WhatsApp.',
        es: 'Abierto todos los días de 08:00 a 00:00. Horarios especiales pueden confirmarse por WhatsApp.',
      },
      'needs_review',
      'conflict 08:00–00:00 vs 08:00–02:00 → safer value kept',
    ),
    capacity: field({ 'pt-BR': '70 pessoas', en: '70 people', es: '70 personas' }, 'needs_review'),
    followersLabel: field('14,3K', 'needs_review', 'Instagram, may change'),
    priceLevel: field(3, 'needs_review', 'review-derived (~R$40–60)'),
    priceLabel: field({ 'pt-BR': '~R$40–60' }, 'needs_review'),
    signature: field({ 'pt-BR': 'Robalo com legumes e molho tarê; poke e sushi.' }, 'verified'),
    facilities: [
      field({ 'pt-BR': 'Terraço multinível' }, 'verified'),
      field({ 'pt-BR': 'Vista para o mar' }, 'verified'),
      field({ 'pt-BR': 'Música ao vivo' }, 'verified'),
      field({ 'pt-BR': 'Delivery' }, 'needs_review'),
      field({ 'pt-BR': 'Reservas' }, 'verified'),
    ],
    bestFor: ['couples', 'foodies', 'sunset'],
    moodTags: ['editorial', 'sunset', 'music'],
    peakTimes: field({ 'pt-BR': 'Noites de fim de semana e verão' }, 'needs_review'),
    services: [
      { 'pt-BR': 'Breakfast' }, { 'pt-BR': 'Lunch' }, { 'pt-BR': 'Sunset' },
      { 'pt-BR': 'Dinner' }, { 'pt-BR': 'Drinks' }, { 'pt-BR': 'Music' },
      { 'pt-BR': 'Delivery' }, { 'pt-BR': 'Reservations' },
    ],
    contact: {
      // Number 5584996162007 (official site) kept as a source note; awaiting
      // reconfirmation, so live CTA routes via contactKey (PENDING → "Consultar").
      whatsapp: field('5584996162007', 'needs_review', 'official site — pending reconfirmation'),
      instagram: field('https://www.instagram.com/umifunkitchen', 'verified'),
    },
    reviewExcerpts: [
      { text: { 'pt-BR': '“Robalo… o melhor peixe que já comi.”' }, source: 'Google review (citado na pesquisa)' },
    ],
    primaryCta: { labelKey: 'cta.reserve', action: 'reserve' },
    secondaryCta: { labelKey: 'cta.menu', action: 'menu' },
    verificationStatus: 'verified',
    updatedAt: '2026-06-08',
  },

  // ── MAKAI POOL CLUB ──────────────────────────────────────────────
  {
    id: 'makai',
    slug: 'makai-pool-club',
    name: 'Makai Pool Club',
    audiencePath: 'pool',
    categoryGroups: ['pool', 'beach', 'events'],
    category: 'beach_club',
    contactKey: 'makai',
    subtitle: {
      'pt-BR': 'Beach front · DJs · Food & Drinks. Lazer à beira da piscina perto da costa.',
      en: 'Beach front · DJs · Food & Drinks. Poolside leisure near the coast.',
      es: 'Beach front · DJs · Food & Drinks. Ocio junto a la piscina cerca de la costa.',
    },
    description: {
      'pt-BR':
        'Pool club frente ao mar com comida, drinks, DJs e experiência de dia junto à piscina (day use, eventos e restaurante).',
      en: 'Beachfront pool club with food, drinks, DJs and a daytime pool experience (day use, events and restaurant).',
      es: 'Pool club frente al mar con comida, drinks, DJs y experiencia de día junto a la piscina (day use, eventos y restaurante).',
    },
    heroImage: IMG('photo-1530053969600-caed2596d242'),
    gallery: [
      { src: IMG('photo-1572331165267-854da2b10ccc'), alt: { 'pt-BR': 'Piscina e espreguiçadeiras' } },
      { src: IMG('photo-1571902943202-507ec2618e8f'), alt: { 'pt-BR': 'DJ e lounge' } },
    ],
    location: {
      area: 'Praia do Centro',
      address: field('Largo de São Sebastião, 102, Praia do Centro, Pipa, Tibau do Sul, RN', 'verified', 'research'),
      mapUrl: 'https://maps.app.goo.gl/b8Exbdif4eDm8Fjq6',
    },
    hours: field(
      {
        'pt-BR': 'Seg–Qui: 11h–20h · Sex: 11h–21h · Sáb: 11h–23h · Dom: 11h–21h',
        en: 'Mon–Thu: 11:00–20:00 · Fri: 11:00–21:00 · Sat: 11:00–23:00 · Sun: 11:00–21:00',
        es: 'Lun–Jue: 11:00–20:00 · Vie: 11:00–21:00 · Sáb: 11:00–23:00 · Dom: 11:00–21:00',
      },
      'needs_review',
    ),
    capacity: field({ 'pt-BR': '300 pessoas', en: '300 people', es: '300 personas' }, 'needs_review'),
    priceLevel: field(3, 'needs_review'),
    priceLabel: field({ 'pt-BR': 'Pool club / day use' }, 'needs_review'),
    signature: field({ 'pt-BR': 'Spag & Balls; Makai Burger.' }, 'needs_review'),
    facilities: [
      field({ 'pt-BR': 'Beach front' }, 'verified'),
      field({ 'pt-BR': 'Piscina / pool club' }, 'verified'),
      field({ 'pt-BR': 'DJs' }, 'verified'),
      field({ 'pt-BR': 'Day use' }, 'verified'),
      field({ 'pt-BR': 'Restaurante' }, 'verified'),
    ],
    bestFor: ['groups', 'daytrip', 'sunset'],
    moodTags: ['social', 'beach', 'music'],
    peakTimes: field({ 'pt-BR': 'Tarde/pôr do sol; fins de semana' }, 'needs_review'),
    services: [
      { 'pt-BR': 'Beach front' }, { 'pt-BR': 'DJs' }, { 'pt-BR': 'Food & Drinks' },
      { 'pt-BR': 'Pool Club' }, { 'pt-BR': 'Restaurant' }, { 'pt-BR': 'Day Use' }, { 'pt-BR': 'Events' },
    ],
    contact: {
      whatsapp: field('5584994196079', 'verified', 'reservations'),
      instagram: field('https://www.instagram.com/makaipipapoolclub', 'verified'),
    },
    primaryCta: { labelKey: 'cta.explore', action: 'explore' },
    secondaryCta: { labelKey: 'cta.enquire', action: 'enquire' },
    verificationStatus: 'needs_review',
    updatedAt: '2026-06-08',
  },

  // ── MAKAI THE CLUB (separate entity) ─────────────────────────────
  {
    id: 'makai-club',
    slug: 'makai-the-club',
    name: 'Makai The Club',
    audiencePath: 'events',
    categoryGroups: ['nightlife', 'events'],
    category: 'club',
    contactKey: 'makaiClub',
    subtitle: {
      'pt-BR': 'Entre o mar e o beat. Todo sábado, o ritual acontece.',
      en: 'Between the sea and the beat. Every Saturday, the ritual happens.',
      es: 'Entre el mar y el beat. Cada sábado, el ritual sucede.',
    },
    description: {
      'pt-BR': 'Nightlife · DJs · Events. Conceito de balada do Makai, relacionado ao @makaipipapoolclub.',
      en: 'Nightlife · DJs · Events. Makai’s club concept, related to @makaipipapoolclub.',
      es: 'Nightlife · DJs · Events. Concepto de club de Makai, relacionado con @makaipipapoolclub.',
    },
    heroImage: IMG('photo-1571266028243-d220c9c3b31f'),
    gallery: [
      { src: IMG('photo-1516450360452-9312f5e86fc7'), alt: { 'pt-BR': 'DJ set' } },
    ],
    location: {
      area: 'Praia do Centro',
      // Same venue as Makai Pool Club unless a specific one is provided.
      address: field('Praia do Centro, Pipa, Tibau do Sul, RN', 'needs_review', 'same space as Makai Pool Club?'),
      mapUrl: 'https://maps.app.goo.gl/b8Exbdif4eDm8Fjq6',
    },
    hours: field(
      {
        'pt-BR': 'Sábados e feriados: 00h às 07h. Horários especiais podem variar conforme o evento.',
        en: 'Saturdays and holidays: 00:00–07:00. Special opening hours may vary by event.',
        es: 'Sábados y festivos: 00:00–07:00. Los horarios especiales pueden variar según el evento.',
      },
      'needs_review',
      'conflict 00:00–07:00 vs 23:00–07:00 → safer value kept',
    ),
    capacity: field({ 'pt-BR': '400 pessoas', en: '400 people', es: '400 personas' }, 'needs_review'),
    followersLabel: field('21,2K', 'needs_review', 'Instagram, may change'),
    facilities: [
      field({ 'pt-BR': 'DJs' }, 'verified'),
      field({ 'pt-BR': 'Events' }, 'verified'),
      field({ 'pt-BR': 'Bottle service' }, 'placeholder'),
      field({ 'pt-BR': 'Mesas VIP' }, 'placeholder'),
    ],
    bestFor: ['party', 'groups'],
    moodTags: ['nightlife', 'music'],
    peakTimes: field({ 'pt-BR': 'Sábados à noite' }, 'needs_review'),
    services: [{ 'pt-BR': 'Nightlife' }, { 'pt-BR': 'DJs' }, { 'pt-BR': 'Events' }],
    contact: {
      whatsapp: field('5584994196079', 'verified', 'reservations'),
      instagram: field('https://www.instagram.com/makaipipaclub', 'verified'),
    },
    primaryCta: { labelKey: 'cta.enquire', action: 'enquire' },
    secondaryCta: { labelKey: 'cta.explore', action: 'explore' },
    verificationStatus: 'needs_review',
    updatedAt: '2026-06-08',
  },

  // ── NAMI MADEIRO ─────────────────────────────────────────────────
  {
    id: 'nami',
    slug: 'nami-madeiro',
    name: 'Nami Madeiro',
    audiencePath: 'dine',
    categoryGroups: ['dine', 'pool', 'events'],
    category: 'restaurant',
    contactKey: 'nami',
    subtitle: {
      'pt-BR': 'Gastronomia de frente para o mar, com o clima relaxado do Madeiro.',
      en: 'Beach-facing dining with a relaxed Madeiro mood.',
      es: 'Gastronomía frente al mar, con el ambiente relajado de Madeiro.',
    },
    description: {
      'pt-BR':
        'Restaurante e bar à beira-mar do resort Aldeia do Madeiro Beach, com piscina, day-use e cozinha brasileira / frutos do mar.',
      en: 'Beachfront restaurant and bar at the Aldeia do Madeiro Beach resort, with a pool, day-use and Brazilian / seafood cuisine.',
      es: 'Restaurante y bar frente al mar del resort Aldeia do Madeiro Beach, con piscina, day-use y cocina brasileña / mariscos.',
    },
    heroImage: IMG('photo-1437846972679-9e6e537be46e'),
    gallery: [
      { src: IMG('photo-1559339352-11d035aa65de'), alt: { 'pt-BR': 'Frutos do mar' } },
      { src: IMG('photo-1507525428034-b723cf961d3e'), alt: { 'pt-BR': 'Praia do Madeiro' } },
    ],
    location: {
      area: 'Praia do Madeiro',
      address: field('Av. Antônio Florêncio, 3647, Praia do Madeiro, Tibau do Sul, RN', 'verified', 'research'),
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Avenida+Ant%C3%B4nio+Flor%C3%AAncio+3647%2C+Praia+do+Madeiro%2C+Pipa%2C+Tibau+do+Sul%2C+RN',
    },
    hours: field({ 'pt-BR': 'Diariamente ~08:00–22:00 (Instagram)' }, 'needs_review'),
    priceLevel: field(2, 'needs_review'),
    priceLabel: field({ 'pt-BR': '~R$40–80' }, 'needs_review'),
    signature: field({ 'pt-BR': 'Frutos do mar; camarão; polvo.' }, 'needs_review'),
    facilities: [
      field({ 'pt-BR': 'Piscina e deck' }, 'verified'),
      field({ 'pt-BR': 'Acesso à praia / day-use' }, 'verified'),
      field({ 'pt-BR': 'Jardins' }, 'verified'),
      field({ 'pt-BR': 'Capacidade (~100)' }, 'placeholder'),
    ],
    bestFor: ['families', 'daytrip', 'relaxed'],
    moodTags: ['relaxed', 'nature', 'beach'],
    peakTimes: field({ 'pt-BR': 'Meio-dia / tarde' }, 'needs_review'),
    contact: {
      instagram: field('https://www.instagram.com/namimadeiro', 'verified'),
      whatsapp: placeholder<string>(),
      email: placeholder<string>(),
    },
    primaryCta: { labelKey: 'cta.reserve', action: 'reserve' },
    secondaryCta: { labelKey: 'cta.menu', action: 'menu' },
    verificationStatus: 'needs_review',
    updatedAt: '2026-06-08',
  },

  // ── TĀO PIPA ─────────────────────────────────────────────────────
  {
    id: 'tao',
    slug: 'tao-pipa',
    name: 'TĀO Pipa',
    audiencePath: 'dine',
    categoryGroups: ['dine'],
    category: 'cafe',
    contactKey: 'tao',
    subtitle: {
      'pt-BR': 'Um ritmo de café mais leve para o café da manhã, brunch e pausas.',
      en: 'A lighter café rhythm for breakfast, brunch and pauses.',
      es: 'Un ritmo de café más ligero para el desayuno, brunch y pausas.',
    },
    description: {
      'pt-BR': 'Café e brunch contemporâneo no centro de Pipa, com café de especialidade e pratos leves.',
      en: 'Contemporary café and brunch spot in central Pipa, with specialty coffee and light dishes.',
      es: 'Café y brunch contemporáneo en el centro de Pipa, con café de especialidad y platos ligeros.',
    },
    heroImage: IMG('photo-1501339847302-ac426a4a7cbb'),
    gallery: [
      { src: IMG('photo-1495474472287-4d71bcdd2085'), alt: { 'pt-BR': 'Café de especialidade' } },
      { src: IMG('photo-1533089860892-a7c6f0a88666'), alt: { 'pt-BR': 'Brunch' } },
    ],
    location: {
      area: 'Praia do Centro',
      address: field('Av. Baía dos Golfinhos, 1520, Praia do Centro, Pipa, Tibau do Sul, RN', 'verified', 'research'),
    },
    hours: field({ 'pt-BR': 'Diariamente ~07:30–22:00 (Instagram)' }, 'needs_review'),
    priceLevel: field(2, 'needs_review'),
    priceLabel: field({ 'pt-BR': '~R$25–50' }, 'needs_review'),
    signature: field({ 'pt-BR': 'Ceviche de robalo ao leite de tigre de maracujá.' }, 'verified'),
    facilities: [
      field({ 'pt-BR': 'Espaço íntimo' }, 'verified'),
      field({ 'pt-BR': 'Wi-Fi' }, 'verified'),
      field({ 'pt-BR': 'Capacidade (~20)' }, 'needs_review'),
    ],
    bestFor: ['couples', 'brunch', 'remote_work'],
    moodTags: ['calm', 'brunch', 'local'],
    peakTimes: field({ 'pt-BR': 'Café da manhã e almoço' }, 'needs_review'),
    contact: {
      // Kept as previously verified; routing key is PENDING per the latest brief.
      whatsapp: field('5571996362261', 'needs_review', 'research — pending reconfirmation'),
      instagram: field('https://www.instagram.com/taopipa', 'verified'),
    },
    primaryCta: { labelKey: 'cta.reserve', action: 'reserve' },
    secondaryCta: { labelKey: 'cta.menu', action: 'menu' },
    verificationStatus: 'verified',
    updatedAt: '2026-06-08',
  },

  // ── CASA PALMEIRA (STAY) — partially real ────────────────────────
  {
    id: 'casa-palmeira',
    slug: 'casa-palmeira',
    name: 'Casa Palmeira Pipa',
    audiencePath: 'stay',
    categoryGroups: ['stay'],
    category: 'stay',
    contactKey: 'casaPalmeira',
    subtitle: {
      'pt-BR': 'Conforto com charme rústico e toque moderno em Pipa.',
      en: 'Comfortable stay with rustic charm and a modern touch in Pipa.',
      es: 'Alojamiento con confort, encanto rústico y toque moderno en Pipa.',
    },
    description: {
      'pt-BR':
        'A hospedagem na Casa Palmeira combina privacidade, localização e clima acolhedor: quartos privados e apartamentos com cozinha.',
      en: 'Casa Palmeira combines privacy, location and a welcoming atmosphere: private rooms and apartments with kitchen.',
      es: 'Casa Palmeira combina privacidad, ubicación y ambiente acogedor: habitaciones privadas y apartamentos con cocina.',
    },
    heroImage: IMG('photo-1582719478250-c89cae4dc85b'),
    gallery: [],
    location: {
      area: 'Pipa',
      address: field('Rua do Céu, 11, Pipa, RN', 'verified', 'brand'),
      // mapUrl: TODO_CONTENT — exact Google Maps pending.
    },
    capacity: placeholder(),
    followersLabel: field('~3.465', 'needs_review', 'Instagram, may change'),
    priceLevel: placeholder(),
    facilities: [
      field({ 'pt-BR': '5 quartos privados', en: '5 private rooms', es: '5 habitaciones privadas' }, 'verified'),
      field({ 'pt-BR': '2 apartamentos privados com cozinha', en: '2 private apartments with kitchen', es: '2 apartamentos privados con cocina' }, 'verified'),
      // Wi-Fi, A/C, pool, breakfast, parking, cleaning → TODO_CONTENT (placeholder)
    ],
    bestFor: ['couples', 'short_stay'],
    moodTags: ['intimate', 'rustic', 'central'],
    contact: {
      whatsapp: field('5584991328102', 'verified', 'reservations'),
      instagram: field('https://www.instagram.com/casapalmeirapipa', 'verified'),
    },
    primaryCta: { labelKey: 'cta.book', action: 'book' },
    verificationStatus: 'needs_review',
    updatedAt: '2026-06-08',
  },

  // ── RECANTO DE IBIZA (STAY) — partially real ─────────────────────
  {
    id: 'recanto-ibiza',
    slug: 'recanto-de-ibiza',
    name: 'Recanto de Ibiza',
    audiencePath: 'stay',
    categoryGroups: ['stay'],
    category: 'stay',
    contactKey: 'recantoIbiza',
    subtitle: {
      'pt-BR': 'Pipa e Ibiza se fundem em uma nova experiência.',
      en: 'Pipa and Ibiza come together in a new experience.',
      es: 'Pipa e Ibiza se fusionan en una nueva experiencia.',
    },
    description: {
      'pt-BR':
        'Uma hospedagem com personalidade, atmosfera tropical e apartamentos privados com cozinha.',
      en: 'A stay with personality, tropical atmosphere and private apartments with kitchen.',
      es: 'Un alojamiento con personalidad, atmósfera tropical y apartamentos privados con cocina.',
    },
    heroImage: IMG('photo-1571896349842-33c89424de2d'),
    gallery: [],
    location: {
      area: 'Tibau do Sul',
      address: field('Rua do Céu, 141, Tibau do Sul, RN', 'verified', 'brand'),
      // mapUrl: TODO_CONTENT — exact Google Maps pending.
    },
    capacity: placeholder(),
    followersLabel: field('~6.155', 'needs_review', 'Instagram, may change'),
    priceLevel: placeholder(),
    facilities: [
      field({ 'pt-BR': '5 quartos privados', en: '5 private rooms', es: '5 habitaciones privadas' }, 'verified'),
      field({ 'pt-BR': '4 apartamentos privados com cozinha', en: '4 private apartments with kitchen', es: '4 apartamentos privados con cocina' }, 'verified'),
    ],
    bestFor: ['couples', 'retreat'],
    moodTags: ['tropical', 'calm', 'secluded'],
    contact: {
      whatsapp: field('5584992216112', 'verified', 'reservations'),
      instagram: field('https://www.instagram.com/recantodeibiza', 'verified'),
      email: field('recantodeibiza@gmail.com', 'verified', 'brand'),
    },
    primaryCta: { labelKey: 'cta.book', action: 'book' },
    verificationStatus: 'needs_review',
    updatedAt: '2026-06-08',
  },

  // ── NEW RESTAURANT BAR 2026 (placeholder / coming soon) ──────────
  {
    id: 'novo-restaurante-2026',
    slug: 'novo-restaurante-bar-2026',
    name: 'Novo Restaurante Bar 2026',
    audiencePath: 'dine',
    categoryGroups: ['dine', 'coming_soon'],
    publicReady: false, // not built yet — future concept, hidden from public
    category: 'restaurant',
    contactKey: 'newRestaurant',
    subtitle: {
      'pt-BR': 'Novo conceito de restaurante-bar em Pipa. Mais informações em breve.',
      en: 'New restaurant-bar concept in Pipa. More information coming soon.',
      es: 'Nuevo concepto de restaurante-bar en Pipa. Más información próximamente.',
    },
    description: {
      'pt-BR': 'Novo conceito de restaurante-bar em Pipa. Mais informações em breve. TODO_CONTENT.',
      en: 'New restaurant-bar concept in Pipa. More information coming soon. TODO_CONTENT.',
      es: 'Nuevo concepto de restaurante-bar en Pipa. Más información próximamente. TODO_CONTENT.',
    },
    heroImage: IMG('photo-1414235077428-338989a2e8c0'),
    gallery: [],
    location: { area: 'Pipa', address: placeholder<string>() },
    hours: placeholder(),
    priceLevel: placeholder(),
    facilities: [],
    bestFor: [],
    moodTags: ['coming_soon'],
    contact: { whatsapp: placeholder<string>(), instagram: placeholder<string>() },
    primaryCta: { labelKey: 'cta.enquire', action: 'enquire' },
    verificationStatus: 'placeholder',
    updatedAt: '2026-06-08',
  },

  // ── PIPA ICE SUPPLY (PARTNERS / B2B) ─────────────────────────────
  {
    id: 'pipa-ice-supply',
    slug: 'pipa-ice-supply',
    name: 'PIPA Ice Supply',
    audiencePath: 'partners',
    categoryGroups: ['partners'],
    publicReady: false, // not built yet — B2B concept, hidden from public
    category: 'b2b',
    contactKey: 'ice',
    subtitle: {
      'pt-BR': 'Produção e entrega confiáveis para operadores.',
      en: 'Reliable production and delivery for operators.',
      es: 'Producción y entrega fiables para operadores.',
    },
    description: {
      'pt-BR':
        'Serviço B2B de produção e entrega de gelo para operadores de hospitality. TODO_CONTENT: cobertura e tabelas a confirmar.',
      en: 'B2B ice production and delivery service for hospitality operators. TODO_CONTENT.',
      es: 'Servicio B2B de producción y entrega de hielo para operadores. TODO_CONTENT.',
    },
    heroImage: IMG('photo-1561049501-e1f96bdd98fd'),
    gallery: [],
    location: { area: 'Pipa e arredores', address: placeholder<string>() },
    facilities: [],
    bestFor: ['operators'],
    moodTags: ['b2b', 'reliable'],
    contact: { whatsapp: placeholder<string>(), email: placeholder<string>() },
    primaryCta: { labelKey: 'cta.quote', action: 'quote' },
    verificationStatus: 'placeholder',
    updatedAt: '2026-06-08',
  },
];

export const audiencePaths = ['stay', 'dine', 'pool', 'events', 'partners'] as const;
