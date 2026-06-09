import type { LocalizedText } from '@/types/locale';

/**
 * "Discover Praia da Pipa" landing content. Tourism/editorial copy (pt-BR/en/es;
 * de/fr fall back via localize()). No brand claims, prices or unverified facts.
 */

export const discoverHero = {
  title: {
    'pt-BR': 'Descubra a Praia da Pipa',
    en: 'Discover Praia da Pipa',
    es: 'Descubre Praia da Pipa',
  } as LocalizedText,
  subtitle: {
    'pt-BR':
      'Um guia das praias, cultura, natureza, gastronomia e estilo de vida de uma das vilas costeiras mais inesquecíveis do Brasil.',
    en: 'A guide to the beaches, culture, nature, food and lifestyle of one of Brazil’s most unforgettable coastal villages.',
    es: 'Una guía de las playas, cultura, naturaleza, gastronomía y estilo de vida de uno de los pueblos costeros más inolvidables de Brasil.',
  } as LocalizedText,
  cta: { 'pt-BR': 'Explorar experiências', en: 'Explore experiences', es: 'Explorar experiencias' } as LocalizedText,
  ctaSecondary: { 'pt-BR': 'Planejar sua estadia', en: 'Plan your stay', es: 'Planear tu estancia' } as LocalizedText,
  image: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010125/Praia_da_Pipa_-_Sunset_e2f5r2.jpg',
};

export const discoverIntro = {
  'pt-BR':
    'A Praia da Pipa é mais do que uma praia. É uma vila moldada pelo mar, falésias, golfinhos, cultura do surfe, tradições locais e uma comunidade internacional de viajantes. Seja pela natureza, gastronomia, vida noturna, romance ou dias tranquilos de praia, Pipa oferece um jeito de viver o Brasil com calor, beleza e personalidade.',
  en: 'Praia da Pipa is more than a beach. It is a village shaped by the sea, cliffs, dolphins, surf culture, local traditions and an international community of travellers. Whether you come for nature, food, nightlife, romance or slow beach days, Pipa offers a way to experience Brazil with warmth, beauty and personality.',
  es: 'Praia da Pipa es más que una playa. Es un pueblo moldeado por el mar, los acantilados, los delfines, la cultura del surf, las tradiciones locales y una comunidad internacional de viajeros. Ya sea por la naturaleza, la gastronomía, la vida nocturna, el romance o los días tranquilos de playa, Pipa ofrece una forma de vivir Brasil con calidez, belleza y personalidad.',
} as LocalizedText;

type Section = { title: LocalizedText; body: LocalizedText };

export const discoverSections: Record<
  'beaches' | 'nature' | 'culture' | 'activities' | 'food' | 'responsible',
  Section
> = {
  beaches: {
    title: { 'pt-BR': 'Praias para cada tipo de dia', en: 'Beaches for every kind of day', es: 'Playas para cada tipo de día' },
    body: {
      'pt-BR':
        'Da tranquila praia do centro à energia do surfe na Praia do Amor e à beleza natural da Praia do Madeiro, o litoral de Pipa muda a cada maré. Algumas praias são para nadar, outras para surfar, caminhar, observar golfinhos ou simplesmente admirar a vista.',
      en: 'From the calm central beach to the surf energy of Praia do Amor and the natural beauty of Praia do Madeiro, Pipa’s coastline changes with every tide. Some beaches are made for swimming, others for surfing, walking, dolphin watching or simply admiring the view.',
      es: 'Desde la tranquila playa central hasta la energía del surf en Praia do Amor y la belleza natural de Praia do Madeiro, la costa de Pipa cambia con cada marea. Algunas playas son para nadar, otras para surfear, caminar, observar delfines o simplemente admirar la vista.',
    },
  },
  nature: {
    title: { 'pt-BR': 'Golfinhos, falésias e paisagens protegidas', en: 'Dolphins, cliffs and protected landscapes', es: 'Delfines, acantilados y paisajes protegidos' },
    body: {
      'pt-BR':
        'Pipa é cercada por um ambiente natural sensível. Os golfinhos costumam aparecer perto da Baía dos Golfinhos e da Praia do Madeiro, enquanto falésias, Mata Atlântica e áreas de tartarugas marinhas lembram que este destino deve ser vivido com cuidado.',
      en: 'Pipa is surrounded by a sensitive natural environment. Dolphins can often be seen near Baía dos Golfinhos and Praia do Madeiro, while cliffs, Atlantic Forest and marine turtle areas remind visitors that this destination must be experienced with care.',
      es: 'Pipa está rodeada de un entorno natural sensible. A menudo se ven delfines cerca de Baía dos Golfinhos y Praia do Madeiro, mientras que los acantilados, la Mata Atlántica y las áreas de tortugas marinas recuerdan que este destino debe vivirse con cuidado.',
    },
  },
  culture: {
    title: { 'pt-BR': 'Uma vila de pescadores com energia global', en: 'A fishing village with global energy', es: 'Un pueblo de pescadores con energía global' },
    body: {
      'pt-BR':
        'As raízes de Pipa são locais: pesca, pequenos negócios, comida regional, artesãos e tradições costeiras. Seu presente é internacional: viajantes, surfistas, chefs, artistas e empreendedores do Brasil e do mundo tornaram a vila um dos lugares mais cosmopolitas do litoral nordestino.',
      en: 'Pipa’s roots are local: fishing, small businesses, regional food, artisans and coastal traditions. Its present is international: travellers, surfers, chefs, artists and entrepreneurs from Brazil and abroad have made the village one of the most cosmopolitan places on the Northeast coast.',
      es: 'Las raíces de Pipa son locales: pesca, pequeños negocios, comida regional, artesanos y tradiciones costeras. Su presente es internacional: viajeros, surfistas, chefs, artistas y emprendedores de Brasil y del extranjero han hecho del pueblo uno de los lugares más cosmopolitas de la costa del Nordeste.',
    },
  },
  activities: {
    title: { 'pt-BR': 'O que fazer em Pipa', en: 'What to do in Pipa', es: 'Qué hacer en Pipa' },
    body: {
      'pt-BR':
        'Aulas de surfe, observação de golfinhos, passeios de buggy, mirantes nas falésias, beach clubs, mercados locais, drinks ao pôr do sol, música ao vivo, restaurantes e vida noturna — Pipa pode ser calma, ativa, romântica ou social, dependendo de como você escolher vivê-la.',
      en: 'Surf lessons, dolphin watching, buggy tours, cliff viewpoints, beach clubs, local markets, sunset drinks, live music, restaurants and nightlife — Pipa can be calm, active, romantic or social depending on how you choose to live it.',
      es: 'Clases de surf, observación de delfines, paseos en buggy, miradores en los acantilados, beach clubs, mercados locales, drinks al atardecer, música en vivo, restaurantes y vida nocturna — Pipa puede ser tranquila, activa, romántica o social según cómo elijas vivirla.',
    },
  },
  food: {
    title: { 'pt-BR': 'Sabores da costa', en: 'Flavours of the coast', es: 'Sabores de la costa' },
    body: {
      'pt-BR':
        'Peixe fresco, camarão, tapioca, frutas tropicais, clássicos brasileiros, restaurantes internacionais e drinks à beira-mar fazem de Pipa um forte destino para quem ama comer. As melhores refeições aqui costumam vir com brisa do mar, música ou luz do pôr do sol.',
      en: 'Fresh fish, shrimp, tapioca, tropical fruits, Brazilian classics, international restaurants and beachside drinks make Pipa a strong destination for food lovers. The best meals here often come with sea breeze, music or sunset light.',
      es: 'Pescado fresco, camarones, tapioca, frutas tropicales, clásicos brasileños, restaurantes internacionales y drinks junto al mar hacen de Pipa un gran destino para los amantes de la comida. Las mejores comidas aquí suelen venir con brisa marina, música o luz del atardecer.',
    },
  },
  responsible: {
    title: { 'pt-BR': 'Aproveite Pipa com respeito', en: 'Enjoy Pipa respectfully', es: 'Disfruta Pipa con respeto' },
    body: {
      'pt-BR':
        'Confira as marés, proteja as praias, mantenha distância da fauna, evite as bordas das falésias, apoie os negócios locais e deixe a natureza como a encontrou. A magia de Pipa depende do equilíbrio entre visitantes, comunidade e meio ambiente.',
      en: 'Check the tides, protect the beaches, keep distance from wildlife, avoid cliff edges, support local businesses and leave nature as you found it. Pipa’s magic depends on the balance between visitors, community and environment.',
      es: 'Consulta las mareas, protege las playas, mantén distancia de la fauna, evita los bordes de los acantilados, apoya a los negocios locales y deja la naturaleza como la encontraste. La magia de Pipa depende del equilibrio entre visitantes, comunidad y medio ambiente.',
    },
  },
};

export const discoverFinalCta = {
  title: {
    'pt-BR': 'Viva Pipa como um local, com o conforto de um convidado',
    en: 'Experience Pipa like a local, with the comfort of a guest',
    es: 'Vive Pipa como un local, con la comodidad de un huésped',
  } as LocalizedText,
  body: {
    'pt-BR':
      'De estadias e restaurantes a beach clubs, eventos e recomendações locais, o grupo Pipa ajuda você a descobrir o melhor da Praia da Pipa com orientação local de confiança.',
    en: 'From stays and restaurants to beach clubs, events and curated local recommendations, Pipa Group helps you discover the best of Praia da Pipa with trusted local guidance.',
    es: 'Desde estancias y restaurantes hasta beach clubs, eventos y recomendaciones locales, Pipa Group te ayuda a descubrir lo mejor de Praia da Pipa con orientación local de confianza.',
  } as LocalizedText,
  cta: {
    'pt-BR': 'Começar a planejar sua experiência',
    en: 'Start planning your experience',
    es: 'Empieza a planear tu experiencia',
  } as LocalizedText,
};

/** Editorial gallery of Praia da Pipa (Cloudinary). */
export const discoverGallery: { url: string; alt: LocalizedText }[] = [
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010127/Praia_do_amor_laj2ae.jpg', alt: { 'pt-BR': 'Praia do Amor, Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010127/Praia_do_Amor_-_Pipa_RN_Brasil_vt46om.jpg', alt: { 'pt-BR': 'Praia do Amor, Pipa - RN' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010126/Praia_do_Amor_-_Pipa_-_RN_svlq5f.jpg', alt: { 'pt-BR': 'Praia do Amor vista das falésias' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010126/Praia_da_Pipa_iu4j9o.jpg', alt: { 'pt-BR': 'Praia da Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010125/Praia_da_Pipa_-_Sunset_e2f5r2.jpg', alt: { 'pt-BR': 'Pôr do sol na Praia da Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010125/Pipa_RN_czafly.jpg', alt: { 'pt-BR': 'Pipa, Rio Grande do Norte' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010125/PIPA_RN_1_p1jdau.jpg', alt: { 'pt-BR': 'Pipa, RN' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010124/Pipa_RN_kwygd2.jpg', alt: { 'pt-BR': 'Litoral de Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010124/Pipa_RN_2_f6nauo.jpg', alt: { 'pt-BR': 'Falésias de Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010123/__-_2026-06-09T145752.874_m3t8in.jpg', alt: { 'pt-BR': 'Paisagem de Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010123/Pipa_RN_1_rayagp.jpg', alt: { 'pt-BR': 'Praia da Pipa' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010123/Nordeste_e_Seus_Encantos_on_Instagram__%EF%B8%8F_QUER_SUA_FOTO_AQUI__MARQUE_UMA_PESSOA_ESPECIAL_AQUI_Foto__praiadapipa_-_Praia_de_Pipa_-_RN_Use_nossa_hashtag_neeseusencantos_nema2e.jpg', alt: { 'pt-BR': 'Praia de Pipa - RN' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010122/Bajada_a_Praia_do_Amor_Pipa_qi2651.jpg', alt: { 'pt-BR': 'Descida para a Praia do Amor' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010122/pipa_-_rio_grande_do_norte_e4irdm.jpg', alt: { 'pt-BR': 'Pipa, Rio Grande do Norte' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010122/Pipa_-_RN_jjlapt.jpg', alt: { 'pt-BR': 'Pipa - RN' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010122/pipa_-_rn_k1nyvl.jpg', alt: { 'pt-BR': 'Pipa - RN' } },
  { url: 'https://res.cloudinary.com/dxhef6dju/image/upload/v1781010121/Passeios_em_Pipa___Praia_da_Pipa___Rio_Grande_do_Norte_lp9jnp.jpg', alt: { 'pt-BR': 'Passeios em Pipa' } },
];
