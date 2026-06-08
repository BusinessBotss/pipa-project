-- ════════════════════════════════════════════════════════════════════
-- Pipa Group — seed data
-- Mirrors data/brands.ts. VERACITY POLICY: never invent data.
--   verified | needs_review | placeholder.  No aggregateRating.
-- Run AFTER schema.sql. Re-runnable (upsert via on conflict).
-- ════════════════════════════════════════════════════════════════════

-- ── Quick paths ─────────────────────────────────────────────────────
insert into public.quick_paths (id, label, cta_label, sort_order) values
  ('stay',     '{"pt-BR":"Hospedagem","en":"Stay","es":"Alojamiento"}',     '{"pt-BR":"Reservar estadia","en":"Book your stay","es":"Reservar estancia"}', 1),
  ('dine',     '{"pt-BR":"Gastronomia","en":"Dine","es":"Gastronomía"}',    '{"pt-BR":"Reservar mesa","en":"Reserve a table","es":"Reservar mesa"}',       2),
  ('pool',     '{"pt-BR":"Pool Club","en":"Pool Club","es":"Pool Club"}',   '{"pt-BR":"Explorar Makai","en":"Explore Makai","es":"Explorar Makai"}',       3),
  ('events',   '{"pt-BR":"Eventos","en":"Events","es":"Eventos"}',          '{"pt-BR":"Planejar evento","en":"Plan an event","es":"Planear evento"}',      4),
  ('partners', '{"pt-BR":"Parceiros","en":"Partners","es":"Socios"}',       '{"pt-BR":"Solicitar orçamento","en":"Request a quote","es":"Solicitar presupuesto"}', 5)
on conflict (id) do update set label = excluded.label, cta_label = excluded.cta_label;

-- ── Brands ──────────────────────────────────────────────────────────
insert into public.brands
  (id, name, path_id, category, category_groups, subtitle, description, area, address, hours, price_label, capacity, followers_label, followers_status, signature, verification_status)
values
-- verified
(
  'umi-fun-kitchen', 'Umi Fun Kitchen', 'dine', 'restaurant', '{dine,events}',
  '{"pt-BR":"Uma experiência única com comida, música e drinks na Praia da Pipa.","en":"A unique experience with food, music and drinks in Praia da Pipa.","es":"Una experiencia única con comida, música y drinks en Praia da Pipa."}',
  '{"pt-BR":"Restaurante e cocktail bar com terraço e vista para o mar: breakfast, lunch, sunset, dinner e drinks.","en":"Restaurant and cocktail bar with a terrace and sea views.","es":"Restaurante y cocktail bar con terraza y vista al mar."}',
  'Praia da Pipa',
  '{"value":"Av. Baía dos Golfinhos, 965, Praia da Pipa, Tibau do Sul, RN","status":"verified","source":"official site"}',
  '{"value":{"pt-BR":"Aberto todos os dias das 08h às 00h. Horários especiais pelo WhatsApp."},"status":"needs_review","source":"conflict 08:00-00:00 vs 08:00-02:00"}',
  '{"value":{"pt-BR":"~R$40–60"},"status":"needs_review"}',
  '{"value":{"pt-BR":"70 pessoas"},"status":"needs_review"}',
  '14,3K', 'needs_review',
  '{"value":{"pt-BR":"Robalo com legumes e molho tarê; poke e sushi."},"status":"verified"}',
  'verified'
),
(
  'tao-pipa', 'TĀO Pipa', 'dine', 'cafe', '{dine}',
  '{"pt-BR":"Um ritmo de café mais leve para o café da manhã, brunch e pausas.","en":"A lighter café rhythm for breakfast, brunch and pauses.","es":"Un ritmo de café más ligero."}',
  '{"pt-BR":"Café e brunch contemporâneo no centro de Pipa.","en":"Contemporary café and brunch in central Pipa.","es":"Café y brunch contemporáneo en el centro de Pipa."}',
  'Praia do Centro',
  '{"value":"Av. Baía dos Golfinhos, 1520, Praia do Centro, Pipa, Tibau do Sul, RN","status":"verified","source":"research"}',
  '{"value":{"pt-BR":"Diariamente ~07:30–22:00 (Instagram)"},"status":"needs_review"}',
  '{"value":{"pt-BR":"~R$25–50"},"status":"needs_review"}',
  '{"value":{"pt-BR":"~20"},"status":"needs_review"}',
  null, 'needs_review',
  '{"value":{"pt-BR":"Ceviche de robalo ao leite de tigre de maracujá."},"status":"verified"}',
  'verified'
),
-- needs_review
(
  'makai-pool-club', 'Makai Pool Club', 'pool', 'beach_club', '{pool,beach,events}',
  '{"pt-BR":"Beach front · DJs · Food & Drinks.","en":"Beach front · DJs · Food & Drinks.","es":"Beach front · DJs · Food & Drinks."}',
  '{"pt-BR":"Pool club frente ao mar com comida, drinks, DJs e day use.","en":"Beachfront pool club with food, drinks, DJs and day use.","es":"Pool club frente al mar con comida, drinks, DJs y day use."}',
  'Praia do Centro',
  '{"value":"Largo de São Sebastião, 102, Praia do Centro, Pipa, Tibau do Sul, RN","status":"verified","source":"research"}',
  '{"value":{"pt-BR":"Seg–Qui 11h–20h · Sex 11h–21h · Sáb 11h–23h · Dom 11h–21h"},"status":"needs_review"}',
  '{"value":{"pt-BR":"Pool club / day use"},"status":"needs_review"}',
  '{"value":{"pt-BR":"300 pessoas"},"status":"needs_review"}',
  null, 'needs_review',
  '{"value":{"pt-BR":"Spag & Balls; Makai Burger."},"status":"needs_review"}',
  'needs_review'
),
(
  'makai-the-club', 'Makai The Club', 'events', 'club', '{nightlife,events}',
  '{"pt-BR":"Entre o mar e o beat. Todo sábado, o ritual acontece.","en":"Between the sea and the beat. Every Saturday, the ritual happens.","es":"Entre el mar y el beat. Cada sábado, el ritual sucede."}',
  '{"pt-BR":"Nightlife · DJs · Events. Conceito de balada do Makai.","en":"Nightlife · DJs · Events. Makai club concept.","es":"Nightlife · DJs · Events. Concepto de club de Makai."}',
  'Praia do Centro',
  '{"value":"Praia do Centro, Pipa, Tibau do Sul, RN","status":"needs_review","source":"same space as Makai Pool Club?"}',
  '{"value":{"pt-BR":"Sábados e feriados: 00h às 07h. Pode variar conforme o evento."},"status":"needs_review","source":"conflict 00:00-07:00 vs 23:00-07:00"}',
  null,
  '{"value":{"pt-BR":"400 pessoas"},"status":"needs_review"}',
  '21,2K', 'needs_review',
  null,
  'needs_review'
),
(
  'nami-madeiro', 'Nami Madeiro', 'dine', 'restaurant', '{dine,pool,events}',
  '{"pt-BR":"Gastronomia de frente para o mar, com o clima relaxado do Madeiro.","en":"Beach-facing dining with a relaxed Madeiro mood.","es":"Gastronomía frente al mar."}',
  '{"pt-BR":"Restaurante e bar à beira-mar do resort Aldeia do Madeiro Beach.","en":"Beachfront restaurant and bar at Aldeia do Madeiro Beach resort.","es":"Restaurante y bar frente al mar del resort Aldeia do Madeiro Beach."}',
  'Praia do Madeiro',
  '{"value":"Av. Antônio Florêncio, 3647, Praia do Madeiro, Tibau do Sul, RN","status":"verified","source":"research"}',
  '{"value":{"pt-BR":"Diariamente ~08:00–22:00 (Instagram)"},"status":"needs_review"}',
  '{"value":{"pt-BR":"~R$40–80"},"status":"needs_review"}',
  null, null, 'needs_review',
  '{"value":{"pt-BR":"Frutos do mar; camarão; polvo."},"status":"needs_review"}',
  'needs_review'
),
-- partially real (stays)
(
  'casa-palmeira', 'Casa Palmeira Pipa', 'stay', 'stay', '{stay}',
  '{"pt-BR":"Conforto com charme rústico e toque moderno em Pipa.","en":"Comfortable stay with rustic charm and a modern touch in Pipa.","es":"Confort con encanto rústico y toque moderno en Pipa."}',
  '{"pt-BR":"Quartos privados e apartamentos com cozinha. Privacidade, localização e clima acolhedor.","en":"Private rooms and apartments with kitchen.","es":"Habitaciones privadas y apartamentos con cocina."}',
  'Pipa',
  '{"value":"Rua do Céu, 11, Pipa, RN","status":"verified","source":"brand"}',
  null, null, null, '~3.465', 'needs_review', null,
  'needs_review'
),
(
  'recanto-de-ibiza', 'Recanto de Ibiza', 'stay', 'stay', '{stay}',
  '{"pt-BR":"Pipa e Ibiza se fundem em uma nova experiência.","en":"Pipa and Ibiza come together in a new experience.","es":"Pipa e Ibiza se fusionan en una nueva experiencia."}',
  '{"pt-BR":"Hospedagem com personalidade, atmosfera tropical e apartamentos privados com cozinha.","en":"A stay with personality, tropical atmosphere and private apartments with kitchen.","es":"Un alojamiento con personalidad, atmósfera tropical y apartamentos privados con cocina."}',
  'Tibau do Sul',
  '{"value":"Rua do Céu, 141, Tibau do Sul, RN","status":"verified","source":"brand"}',
  null, null, null, '~6.155', 'needs_review', null,
  'needs_review'
),
-- placeholder / coming soon
(
  'novo-restaurante-bar-2026', 'Novo Restaurante Bar 2026', 'dine', 'restaurant', '{dine,coming_soon}',
  '{"pt-BR":"Novo conceito de restaurante-bar em Pipa. Mais informações em breve.","en":"New restaurant-bar concept in Pipa. More information coming soon.","es":"Nuevo concepto de restaurante-bar en Pipa. Más información próximamente."}',
  '{"pt-BR":"Novo conceito de restaurante-bar em Pipa. TODO_CONTENT.","en":"New restaurant-bar concept in Pipa. TODO_CONTENT.","es":"Nuevo concepto de restaurante-bar en Pipa. TODO_CONTENT."}',
  'Pipa',
  '{"value":null,"status":"placeholder"}',
  null, null, null, null, 'placeholder', null,
  'placeholder'
),
(
  'pipa-ice-supply', 'PIPA Ice Supply', 'partners', 'b2b', '{partners}',
  '{"pt-BR":"Produção e entrega confiáveis para operadores.","en":"Reliable production and delivery for operators.","es":"Producción y entrega fiables para operadores."}',
  '{"pt-BR":"Serviço B2B de produção e entrega de gelo. TODO_CONTENT.","en":"B2B ice production and delivery. TODO_CONTENT.","es":"Servicio B2B de producción y entrega de hielo. TODO_CONTENT."}',
  'Pipa e arredores',
  '{"value":null,"status":"placeholder"}',
  null, null, null, null, 'placeholder', null,
  'placeholder'
)
on conflict (id) do update set
  name = excluded.name, path_id = excluded.path_id, category = excluded.category,
  category_groups = excluded.category_groups, subtitle = excluded.subtitle,
  description = excluded.description, area = excluded.area, address = excluded.address,
  hours = excluded.hours, price_label = excluded.price_label, capacity = excluded.capacity,
  followers_label = excluded.followers_label, followers_status = excluded.followers_status,
  signature = excluded.signature, verification_status = excluded.verification_status,
  updated_at = now();

-- ── Brand contacts (only confirmed values; routing PENDING ones marked is_pending) ──
insert into public.brand_contacts (brand_id, channel, value, status, is_pending) values
  ('umi-fun-kitchen',          'whatsapp',  '5584996162007', 'needs_review', true),   -- official site, pending reconfirmation → routing PENDING
  ('umi-fun-kitchen',          'instagram', 'https://www.instagram.com/umifunkitchen', 'verified', false),
  ('tao-pipa',                 'whatsapp',  '5571996362261', 'needs_review', true),   -- research, pending reconfirmation → routing PENDING
  ('tao-pipa',                 'instagram', 'https://www.instagram.com/taopipa', 'verified', false),
  ('makai-pool-club',          'whatsapp',  '5584994196079', 'verified', false),
  ('makai-pool-club',          'instagram', 'https://www.instagram.com/makaipipapoolclub', 'verified', false),
  ('makai-the-club',           'whatsapp',  '5584994196079', 'verified', false),
  ('makai-the-club',           'instagram', 'https://www.instagram.com/makaipipaclub', 'verified', false),
  ('nami-madeiro',             'instagram', 'https://www.instagram.com/namimadeiro', 'verified', false),
  ('nami-madeiro',             'whatsapp',  null, 'placeholder', true),
  ('casa-palmeira',            'whatsapp',  '5584991328102', 'verified', false),
  ('casa-palmeira',            'instagram', 'https://www.instagram.com/casapalmeirapipa', 'verified', false),
  ('recanto-de-ibiza',         'whatsapp',  '5584992216112', 'verified', false),
  ('recanto-de-ibiza',         'instagram', 'https://www.instagram.com/recantodeibiza', 'verified', false),
  ('recanto-de-ibiza',         'email',     'recantodeibiza@gmail.com', 'verified', false),
  ('novo-restaurante-bar-2026','whatsapp',  null, 'placeholder', true),
  ('pipa-ice-supply',          'whatsapp',  null, 'placeholder', true),
  ('pipa-ice-supply',          'email',     null, 'placeholder', true)
on conflict do nothing;

-- ── Journey fields (drive the ≤3-interaction forms) ─────────────────
insert into public.journey_fields (path_id, field_key, required, sort_order) values
  ('stay','dates',false,1), ('stay','guests',false,2), ('stay','message',false,3),
  ('dine','preferredTime',false,1), ('dine','guests',false,2), ('dine','message',false,3),
  ('pool','dates',false,1), ('pool','guests',false,2), ('pool','message',false,3),
  ('events','eventType',false,1), ('events','dates',false,2), ('events','guests',false,3),
  ('partners','message',false,1)
on conflict (path_id, field_key) do nothing;

-- ── Seasonal offers (dates unconfirmed → TODO_CONTENT) ──────────────
insert into public.offers (id, cadence, title, description, status) values
  ('sabores-da-pipa','seasonal','{"pt-BR":"Sabores da Pipa"}','{"pt-BR":"Festival gastronômico. TODO_CONTENT: datas a confirmar."}','needs_review'),
  ('sao-joao-da-pipa','seasonal','{"pt-BR":"São João da Pipa 2026"}','{"pt-BR":"Festa junina. TODO_CONTENT."}','placeholder'),
  ('carnaval-da-pipa','seasonal','{"pt-BR":"Carnaval da Pipa 2026"}','{"pt-BR":"Carnaval. TODO_CONTENT."}','placeholder')
on conflict (id) do nothing;

-- ── Brand assets (37 needs_review assets + 4 placeholders) ──
-- Update url and status here or via service role when real assets arrive.
insert into public.brand_assets (id, brand_id, asset_type, title, url, alt, status, source, is_public, sort_order) values
  -- Casa Palmeira
  ('cpa_hero_1', 'casa-palmeira', 'hero_image', '{"pt-BR":"Fachada Casa Palmeira","en":"Casa Palmeira Facade","es":"Fachada Casa Palmeira"}', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/665750393.jpg?k=c62159643007bec06bd562730cb211ae7df8c3510844aa466acb333dc89285ab&o=', '{"pt-BR":"Casa Palmeira Pipa com ambiente tropical e hospedagem em Pipa","en":"Casa Palmeira Pipa tropical guesthouse atmosphere in Pipa","es":"Casa Palmeira Pipa con ambiente tropical y alojamiento en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 1),
  ('cpa_gallery_1', 'casa-palmeira', 'gallery_image', '{"pt-BR":"Quarto Privado","en":"Private Room","es":"Habitación Privada"}', 'https://casa-palmeira.hotels-in-pipa.com/data/Images/1920x1080w/16572/1657227/1657227339/image-praia-de-pipa-casa-palmeira-3.JPEG', '{"pt-BR":"Quarto privado da Casa Palmeira Pipa","en":"Private room at Casa Palmeira Pipa","es":"Habitación privada de Casa Palmeira Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 2),
  ('cpa_gallery_2', 'casa-palmeira', 'gallery_image', '{"pt-BR":"Acomodação Privada","en":"Private Accommodation","es":"Alojamiento Privado"}', 'https://casa-palmeira.hotels-in-pipa.com/data/Images/1920x1080w/13254/1325487/1325487754/image-praia-de-pipa-casa-palmeira-18.JPEG', '{"pt-BR":"Acomodação privada na Casa Palmeira Pipa","en":"Private accommodation at Casa Palmeira Pipa","es":"Alojamiento privado en Casa Palmeira Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 3),
  ('cpa_gallery_3', 'casa-palmeira', 'gallery_image', '{"pt-BR":"Entrada","en":"Entrance","es":"Entrada"}', 'https://casa-palmeira.hotels-in-pipa.com/data/Images/1920x1080w/16617/1661731/1661731553/image-praia-de-pipa-casa-palmeira-2.JPEG', '{"pt-BR":"Entrada da Casa Palmeira Pipa","en":"Entrance of Casa Palmeira Pipa","es":"Entrada de Casa Palmeira Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 4),
  ('cpa_gallery_4', 'casa-palmeira', 'gallery_image', '{"pt-BR":"Área Comum","en":"Common Area","es":"Zona Común"}', 'https://casa-palmeira.hotels-in-pipa.com/data/Images/1920x1080w/16572/1657227/1657227340/image-praia-de-pipa-casa-palmeira-16.JPEG', '{"pt-BR":"Área comum da Casa Palmeira Pipa","en":"Common area at Casa Palmeira Pipa","es":"Zona común de Casa Palmeira Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 5),
  -- Recanto de Ibiza
  ('rec_hero_1', 'recanto-de-ibiza', 'hero_image', '{"pt-BR":"Recanto de Ibiza","en":"Recanto de Ibiza","es":"Recanto de Ibiza"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEkZijrB6DXsH6Qs_D--Lh4hUPeDLVjjOR7FFTwzftbBqN5Z28KdlxsVIgUP8VO4bdP5qRitUaWJP34BU53PhA256xVTgQmVHve9DAsZ_XHdGajlS6_G7ssjtOjOS1eAL09x1KTRg=s1360-w1360-h1020-rw', '{"pt-BR":"Recanto de Ibiza em Pipa com atmosfera tropical","en":"Recanto de Ibiza in Pipa with tropical atmosphere","es":"Recanto de Ibiza en Pipa con ambiente tropical"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 1),
  ('rec_gallery_1', 'recanto-de-ibiza', 'gallery_image', '{"pt-BR":"Apartamento com Cozinha","en":"Apartment with Kitchen","es":"Apartamento con Cocina"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGYiUAnQ7ZHx6_tQARnV3aCtHdXfoBXcpO3DP5b1TTVksRIElH5ehl_NXrYBgs5uqoNF8dN-km9VOMRZYVo5XrTryB55jJY6IzQytbuKqdaO_yrFNom9Swmg2su5DWXIX8k_9vm=s1360-w1360-h1020-rw', '{"pt-BR":"Apartamento com cozinha no Recanto de Ibiza","en":"Apartment with kitchen at Recanto de Ibiza","es":"Apartamento con cocina en Recanto de Ibiza"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 2),
  ('rec_gallery_2', 'recanto-de-ibiza', 'gallery_image', '{"pt-BR":"Área Comum","en":"Common Area","es":"Zona Común"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEn9kCqjPw7U9983Alk6CBphuPKSGgvFdcGTkx-CEWRxBURKDqQf9SU-TicvX48zcRJRw7ynCNUoeZlj-gXrkT3KZDwCAMgTicvifA3_HbQJJBDCMwJ47y7K77NSOUFgkVH6qA=s1360-w1360-h1020-rw', '{"pt-BR":"Área comum do Recanto de Ibiza","en":"Common area at Recanto de Ibiza","es":"Zona común de Recanto de Ibiza"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 3),
  ('rec_gallery_3', 'recanto-de-ibiza', 'gallery_image', '{"pt-BR":"Espaço Exterior","en":"Outdoor Space","es":"Espacio Exterior"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG-QXxzYNDwod2C98GEfdBW0cOjp5LoDUdKPMoKt2cS4xDigKpHW80A_DxVcSghlV7-n0sRXWElwHxv9J2EO0TUTaYlVdMiGf-yYMNZayGT9p9tRum1Z14YSh2M0KgkkkBHNle8=s1360-w1360-h1020-rw', '{"pt-BR":"Espaço exterior do Recanto de Ibiza","en":"Outdoor space at Recanto de Ibiza","es":"Espacio exterior de Recanto de Ibiza"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 4),
  ('rec_gallery_4', 'recanto-de-ibiza', 'gallery_image', '{"pt-BR":"Hospedagem","en":"Accommodation","es":"Alojamiento"}', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/600214826.jpg?k=2b066b08aa7592ac9999fd640b5c85ca9bc97e323d5c8c111017ada3b44b9f3a&o=', '{"pt-BR":"Hospedagem Recanto de Ibiza em Pipa","en":"Recanto de Ibiza accommodation in Pipa","es":"Alojamiento Recanto de Ibiza en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 5),
  -- Umi Fun Kitchen
  ('umi_hero_1', 'umi-fun-kitchen', 'hero_image', '{"pt-BR":"Terraço Umi Fun Kitchen","en":"Umi Fun Kitchen Terrace","es":"Terraza Umi Fun Kitchen"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGTeEfQvt2xHEaNfGKsR4ogbTKQMMsbTNPQPXrruw4XKwIZpBizRHULbUil6j4AHuOjSvIO5yoc4E5ejebSDcbkSk4sJs6IibBZhQRYG3jYnrtSh5uWM4FHSWTI7MDsvI6cRjqA6E40lmM=s1360-w1360-h1020-rw', '{"pt-BR":"Terraço e ambiente do Umi Fun Kitchen em Pipa","en":"Terrace and atmosphere at Umi Fun Kitchen in Pipa","es":"Terraza y ambiente de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 1),
  ('umi_gallery_food_1', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Prato 1","en":"Dish 1","es":"Plato 1"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH5blnuqZV76QFCDD1nch9DG-A352Nv1OKPpUBrUeSzrEIMTPFunGLGiVMLP5kQckJG9-vkeNF8Ub2E_osq5YR6V7Y19a9ZhP0iUvKN99d0E8uKdu74akQZ64Qodk5dHMqRoihN=s1360-w1360-h1020-rw', '{"pt-BR":"Prato do Umi Fun Kitchen em Pipa","en":"Dish at Umi Fun Kitchen in Pipa","es":"Plato de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 2),
  ('umi_gallery_food_2', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Prato 2","en":"Dish 2","es":"Plato 2"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFY-nmnqhZiUpQjektAMzadJRDMWrrTiYZ9urcy-8-GQOmMo3HUWMtBfV8yhLHWYOs6lpzB2a0rlDdjgY3xonbCMKbe4oJOYkIjYQ70xnZROXDtAeqKHqwgewQ8123T9sGhHghoINereUH9=s1360-w1360-h1020-rw', '{"pt-BR":"Prato do Umi Fun Kitchen em Pipa","en":"Dish at Umi Fun Kitchen in Pipa","es":"Plato de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 3),
  ('umi_gallery_food_3', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Prato 3","en":"Dish 3","es":"Plato 3"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHm072fLlMI8Ytq8qrV7gTaf5_iGEDjE_NJShCoBKiUOemtfvlzrFj3Z9b10Rd-rU8KOpaSV5-bU7rLKYSXAQ9cfDjKPHv1FKhrhvmQ9JnBb_t9e9IgszI0rk5Q0mYWT22p0ae1P6Sob-Y1=s1360-w1360-h1020-rw', '{"pt-BR":"Prato do Umi Fun Kitchen em Pipa","en":"Dish at Umi Fun Kitchen in Pipa","es":"Plato de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 4),
  ('umi_gallery_food_4', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Prato 4","en":"Dish 4","es":"Plato 4"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEXbBwPTrRuqS4jDbP1tGD2_zKldneFVhl19LSDc8S4xluLX7SmUX-CL6oAppRkKTDR3NYQmr7eYdZRTQ4cLOKPyvIDCwHPoGGxkmVEkt0zjteEqfXacOOG-DbvydaA6o9vF3Y=s1360-w1360-h1020-rw', '{"pt-BR":"Prato do Umi Fun Kitchen em Pipa","en":"Dish at Umi Fun Kitchen in Pipa","es":"Plato de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 5),
  ('umi_gallery_food_5', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Prato 5","en":"Dish 5","es":"Plato 5"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFmN9VyHTt5buXKlT-YiHIFUcdmIZ1bxN_3if_E4PBbmPrGs-6r7nwvTXUcEPicldORIYoPNMYSnoJ5S1_qum8X0_zcq01_AHiX1VxiXEOU2qw-TPz-boR0khcxkRoa63BmsqoykfEgK46b=s1360-w1360-h1020-rw', '{"pt-BR":"Prato do Umi Fun Kitchen em Pipa","en":"Dish at Umi Fun Kitchen in Pipa","es":"Plato de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 6),
  ('umi_gallery_food_6', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Prato 6","en":"Dish 6","es":"Plato 6"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHkB6r3TKr6xapUjINzwQtRcJ-z4M0LYlG_EkHdHN2A7fSMZRweYhx5mtYsQMJ3yjcU2fOzl7Tv1QYcUv9dEHYEnpqNigfBgDKyGpDyuhtVAYSQzsZYeJk5EQnMlndRxxzuaUcp=s1360-w1360-h1020-rw', '{"pt-BR":"Prato do Umi Fun Kitchen em Pipa","en":"Dish at Umi Fun Kitchen in Pipa","es":"Plato de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 7),
  ('umi_gallery_drinks_1', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Drink 1","en":"Drink 1","es":"Drink 1"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFFLdkncsmBazSxWVCmCv_gE2CtUCOg5G6l-KAzuuNwJ9yuez21__1pBO0RovGLMyhW_-7Cg4axuSOzFlPk3qTzxTrC4vuk8RJ94bOILRjc8Mj92Ii8D0yZswmWQHnxZrddIeb3=s1360-w1360-h1020-rw', '{"pt-BR":"Drinks do Umi Fun Kitchen em Pipa","en":"Drinks at Umi Fun Kitchen in Pipa","es":"Drinks de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 8),
  ('umi_gallery_drinks_2', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Drink 2","en":"Drink 2","es":"Drink 2"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGoiGmThdmzU14CT9NJIY9bhv7wmnzouf0rvA_whtb3KBoDzczt7S4mcKOLHG2sI8VDxpOPrlbTMmMbv6y4QdR8n8E8VV68GMHLfDX9YxxB39tfSLmKAOfn7urWiPiz_qxeIsM=s1360-w1360-h1020-rw', '{"pt-BR":"Drinks do Umi Fun Kitchen em Pipa","en":"Drinks at Umi Fun Kitchen in Pipa","es":"Drinks de Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 9),
  ('umi_gallery_sunset_1', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Sunset 1","en":"Sunset 1","es":"Sunset 1"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEv2dwT9NWe746XXnXp5nwir8ZUqECUV0lYG-GAgRTP2L07gWSfa_ZPgujLdcKn3zl2camdQkmWevmBHgBntiffcNrsAg99pREXjF76RXmz8V3qSksHQLjky8rLbEvMWKNQNkes=s1360-w1360-h1020-rw', '{"pt-BR":"Ambiente e sunset no Umi Fun Kitchen em Pipa","en":"Atmosphere and sunset at Umi Fun Kitchen in Pipa","es":"Ambiente y sunset en Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 10),
  ('umi_gallery_sunset_2', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Sunset 2","en":"Sunset 2","es":"Sunset 2"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG3fzPWm3cQLK9MFbV3Azl4tPw9UA0OINQPFsHOtblVac9hpUW1RKabHRcx_KlzLz5AyisMl741yAjbYjfj6iUGdt-7VxYS9XPIMM6GHxPqyomScqvLiCqG30IPNf_WJO89G_HPEnkwZmI=s1360-w1360-h1020-rw', '{"pt-BR":"Ambiente e sunset no Umi Fun Kitchen em Pipa","en":"Atmosphere and sunset at Umi Fun Kitchen in Pipa","es":"Ambiente y sunset en Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 11),
  ('umi_gallery_sunset_3', 'umi-fun-kitchen', 'gallery_image', '{"pt-BR":"Sunset 3","en":"Sunset 3","es":"Sunset 3"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF9EbIGO-vp01p1fwZn8SIYaMO7FfhjSX9x-Z0pgzOrqbl-VHHbyaxfeiBRPvaLJwBqvrK3iwcd_K38Z9z0JpUAvS0c1j79k_Webc1LElKg3gzHdVVzvWoa6HaC9L6kNWx3z9J1Eg=s1360-w1360-h1020-rw', '{"pt-BR":"Ambiente e sunset no Umi Fun Kitchen em Pipa","en":"Atmosphere and sunset at Umi Fun Kitchen in Pipa","es":"Ambiente y sunset en Umi Fun Kitchen en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 12),
  -- Makai Pool Club
  ('mpc_hero_1', 'makai-pool-club', 'hero_image', '{"pt-BR":"Piscina Makai Pool Club","en":"Makai Pool Club Pool","es":"Piscina Makai Pool Club"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvFyx7K_kbJtFOQegdc5YaZI2K3_J2ns_wZVIgesl1mkULFQM6EuxCwaR3lVI6pTd_DV0Fc8QFAhlSG2QmWQp4S1EwggBggjaIRRH5PSrc_oJOSwB64FSxgZ3jmqjFiTz9vPE7=s1360-w1360-h1020-rw', '{"pt-BR":"Piscina do Makai Pool Club em Pipa","en":"Pool area at Makai Pool Club in Pipa","es":"Piscina de Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 1),
  ('mpc_gallery_dayuse_1', 'makai-pool-club', 'gallery_image', '{"pt-BR":"Day Use","en":"Day Use","es":"Day Use"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFgOzfEFJbgpVazQo7LDJtSOsfC9ga6h4D4SxspQc-om1dw2UdZUVzL4T7YGedsDQX3QZPLxkvJ1EQbT0U-dBTm1m1cpKbpnXjIcb-3hHPK1rlfASQ-p0ish_KI4bA9c4xmduuG=s1360-w1360-h1020-rw', '{"pt-BR":"Day use no Makai Pool Club em Pipa","en":"Day-use experience at Makai Pool Club in Pipa","es":"Day use en Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 2),
  ('mpc_gallery_beach_1', 'makai-pool-club', 'gallery_image', '{"pt-BR":"Beach Front 1","en":"Beach Front 1","es":"Beach Front 1"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFFYR38t-IryMcPWzKUHr7zUhqfdY_kWirXMlPBQS7IapKxjM1VW_asDwfouINkuF9BvxMK7BcQcQTBitOjMlvNv2Ex-JCyPAhfKKxPNbw5KOBOGEGirJFC3Prl1ttbOzU1472z=s1360-w1360-h1020-rw', '{"pt-BR":"Beach front do Makai Pool Club em Pipa","en":"Beachfront area at Makai Pool Club in Pipa","es":"Zona frente al mar de Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 3),
  ('mpc_gallery_beach_2', 'makai-pool-club', 'gallery_image', '{"pt-BR":"Beach Front 2","en":"Beach Front 2","es":"Beach Front 2"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEDdOfG2DKtTRMFg4uctFu3TvK2sqIPb5mwHwXtzG9mNL-pSIEkMbQIBwaEMWUhZTJ5PsdmMJkZcoZpPB_b_i70N6I_muENSvxjQYqdLMXwZCPIwnSGaLHOTIHAqzjQZvAEphJoE6svgEO6=s1360-w1360-h1020-rw', '{"pt-BR":"Beach front do Makai Pool Club em Pipa","en":"Beachfront area at Makai Pool Club in Pipa","es":"Zona frente al mar de Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 4),
  ('mpc_gallery_dj_1', 'makai-pool-club', 'gallery_image', '{"pt-BR":"DJ / Ambiente 1","en":"DJ / Atmosphere 1","es":"DJ / Ambiente 1"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780946512/SnapInsta.to_639803359_17937977112152922_8681928125013700070_n_pext3f.jpg', '{"pt-BR":"DJ e ambiente no Makai Pool Club em Pipa","en":"DJ and atmosphere at Makai Pool Club in Pipa","es":"DJ y ambiente en Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 5),
  ('mpc_gallery_dj_2', 'makai-pool-club', 'gallery_image', '{"pt-BR":"DJ / Ambiente 2","en":"DJ / Atmosphere 2","es":"DJ / Ambiente 2"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG8lS7XJoDgsEaVMliXaUKupMPWYfXKajptIWKzxmRFSTxECAB9b77LV6Jh7nJXOQmFk0ay7S-wXdzuNNHnpMhUoFZ2ho2mIWn9rDLtUGGlpjpsfOPy4goS1PKolVsIaEUM3sqj6Q=s1360-w1360-h1020-rw', '{"pt-BR":"DJ e ambiente no Makai Pool Club em Pipa","en":"DJ and atmosphere at Makai Pool Club in Pipa","es":"DJ y ambiente en Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 6),
  ('mpc_gallery_food_1', 'makai-pool-club', 'gallery_image', '{"pt-BR":"Food & Drinks 1","en":"Food & Drinks 1","es":"Food & Drinks 1"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEcbBHU1-4SUWcPy3mt-PSE-08PQYmLJApw6y3DiqVEnREYoQqnWpKYH3X60-RPz6ow7Nv-IqI09wEq9AgQH9uPXiQxPEWWEVgXlTW40m1-_tQeJ8TXDR4K0XiiBQVQVUspJiYzznOVk_8r=s1360-w1360-h1020-rw', '{"pt-BR":"Food and drinks no Makai Pool Club em Pipa","en":"Food and drinks at Makai Pool Club in Pipa","es":"Food and drinks en Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 7),
  ('mpc_gallery_food_2', 'makai-pool-club', 'gallery_image', '{"pt-BR":"Food & Drinks 2","en":"Food & Drinks 2","es":"Food & Drinks 2"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGdSl_jdxwCdSSvZ6gSvOmA514_IfVspL7-epADRDV8jDTcnFszgDp8b2OmHbUVDzg_Y350HyZtA2TmA_an5_onbRLTihfD-umFWZv7my5MKvIqyDBY4sIRr2TRTZFSHVj3Dv8U=s1360-w1360-h1020-rw', '{"pt-BR":"Food and drinks no Makai Pool Club em Pipa","en":"Food and drinks at Makai Pool Club in Pipa","es":"Food and drinks en Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 8),
  ('mpc_gallery_food_3', 'makai-pool-club', 'gallery_image', '{"pt-BR":"Food & Drinks 3","en":"Food & Drinks 3","es":"Food & Drinks 3"}', 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHGzO_enz87MbhAgkjyj5lR9DDQMgwDWv5CbZxXHKxiSgOytZ8x3QNxVeO0NAjNedtSwT7GdQE0PFNvapO7Ap9kjGrLy3UCi-ga243U16wMSdvSi0vYWiU9YOxiCIV-8vj9H2dd=s1360-w1360-h1020-rw', '{"pt-BR":"Food and drinks no Makai Pool Club em Pipa","en":"Food and drinks at Makai Pool Club in Pipa","es":"Food and drinks en Makai Pool Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 9),
  -- Makai The Club
  ('mtc_hero_1', 'makai-the-club', 'hero_image', '{"pt-BR":"Noite no Makai The Club","en":"Night at Makai The Club","es":"Noche en Makai The Club"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780945488/SnapInsta.to_537165771_18002499269798522_8284762279202387874_n_kmg19e.jpg', '{"pt-BR":"Noite no Makai The Club em Pipa","en":"Night at Makai The Club in Pipa","es":"Noche en Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 1),
  ('mtc_gallery_dj_1', 'makai-the-club', 'gallery_image', '{"pt-BR":"DJ 1","en":"DJ 1","es":"DJ 1"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780946678/SnapInsta.to_702375651_17950335672152922_5226223144413168220_n_fo0eux.jpg', '{"pt-BR":"DJ no Makai The Club em Pipa","en":"DJ at Makai The Club in Pipa","es":"DJ en Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 2),
  ('mtc_gallery_dj_2', 'makai-the-club', 'gallery_image', '{"pt-BR":"DJ 2","en":"DJ 2","es":"DJ 2"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780945488/SnapInsta.to_536358433_18002499296798522_3550522118290368732_n_nkaf8n.jpg', '{"pt-BR":"DJ no Makai The Club em Pipa","en":"DJ at Makai The Club in Pipa","es":"DJ en Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 3),
  ('mtc_gallery_dj_3', 'makai-the-club', 'gallery_image', '{"pt-BR":"DJ 3","en":"DJ 3","es":"DJ 3"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780945488/SnapInsta.to_536554944_18002499260798522_7411163316063434121_n_nfoufe.jpg', '{"pt-BR":"DJ no Makai The Club em Pipa","en":"DJ at Makai The Club in Pipa","es":"DJ en Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 4),
  ('mtc_gallery_crowd_1', 'makai-the-club', 'gallery_image', '{"pt-BR":"Ambiente 1","en":"Atmosphere 1","es":"Ambiente 1"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780945488/SnapInsta.to_466913033_17969789618798522_5574105049113674743_n_sv8eyr.jpg', '{"pt-BR":"Ambiente do Makai The Club em Pipa","en":"Atmosphere at Makai The Club in Pipa","es":"Ambiente de Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 5),
  ('mtc_gallery_crowd_2', 'makai-the-club', 'gallery_image', '{"pt-BR":"Ambiente 2","en":"Atmosphere 2","es":"Ambiente 2"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780945488/SnapInsta.to_536482368_18002499278798522_1195939979063795429_n_ynewmt.jpg', '{"pt-BR":"Ambiente do Makai The Club em Pipa","en":"Atmosphere at Makai The Club in Pipa","es":"Ambiente de Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 6),
  ('mtc_gallery_vip_1', 'makai-the-club', 'gallery_image', '{"pt-BR":"Área VIP e Bar","en":"VIP and Bar Area","es":"Área VIP y Barra"}', 'https://res.cloudinary.com/dqje367sj/image/upload/v1780946684/SnapInsta.to_701055506_17950335681152922_6993250279731996306_n_vsue3p.jpg', '{"pt-BR":"Área VIP e bar do Makai The Club em Pipa","en":"VIP and bar area at Makai The Club in Pipa","es":"Área VIP y barra de Makai The Club en Pipa"}', 'needs_review', 'provided_url_needs_usage_confirmation', true, 7),
  -- Placeholders
  ('asset_nam_1', 'nami-madeiro', 'gallery_image', '{"pt-BR":"Fotos Nami","en":"Nami Photos","es":"Fotos Nami"}', '', null, 'placeholder', null, true, 1),
  ('asset_tao_1', 'tao-pipa', 'gallery_image', '{"pt-BR":"Fotos TĀO","en":"TĀO Photos","es":"Fotos TĀO"}', '', null, 'placeholder', null, true, 1),
  ('asset_ice_1', 'pipa-ice-supply', 'gallery_image', '{"pt-BR":"Fotos Ice Supply","en":"Ice Supply Photos","es":"Fotos Ice Supply"}', '', null, 'placeholder', null, true, 1),
  ('asset_nrb_1', 'novo-restaurante-bar-2026', 'gallery_image', '{"pt-BR":"Fotos Restaurante","en":"Restaurant Photos","es":"Fotos Restaurante"}', '', null, 'placeholder', null, true, 1)
on conflict (id) do update set
  url = excluded.url, alt = excluded.alt, status = excluded.status, source = excluded.source, updated_at = now();
