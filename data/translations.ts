import type { Locale } from '@/types/locale';

type Entry = Record<Locale, string>;

/**
 * UI strings. pt-BR is primary. Missing keys fall back to pt-BR (see lib/i18n).
 * Brand content lives in data/brands.ts, not here.
 */
export const translations = {
  // ── Common ──────────────────────────────────────────────
  'common.toBeConfirmed': { 'pt-BR': 'A confirmar', en: 'To be confirmed', es: 'A confirmar' },
  'common.priceOnRequest': { 'pt-BR': 'Preço sob consulta', en: 'Price on request', es: 'Precio bajo consulta' },
  'common.requestDetails': { 'pt-BR': 'Solicitar detalhes', en: 'Request details', es: 'Solicitar detalles' },
  'common.verified': { 'pt-BR': 'Verificado', en: 'Verified', es: 'Verificado' },
  'common.viewDetails': { 'pt-BR': 'Ver detalhes', en: 'View details', es: 'Ver detalles' },
  'common.save': { 'pt-BR': 'Salvar', en: 'Save', es: 'Guardar' },
  'common.close': { 'pt-BR': 'Fechar', en: 'Close', es: 'Cerrar' },
  'common.back': { 'pt-BR': 'Voltar', en: 'Back', es: 'Volver' },
  'common.send': { 'pt-BR': 'Enviar', en: 'Send', es: 'Enviar' },
  'common.openMenu': { 'pt-BR': 'Abrir menu', en: 'Open menu', es: 'Abrir menú' },

  // ── Navigation ──────────────────────────────────────────
  'nav.experiences': { 'pt-BR': 'Experiências', en: 'Experiences', es: 'Experiencias' },
  'nav.stay': { 'pt-BR': 'Hospedagem', en: 'Stay', es: 'Alojamiento' },
  'nav.dine': { 'pt-BR': 'Gastronomia', en: 'Dine', es: 'Gastronomía' },
  'nav.pool': { 'pt-BR': 'Pool Club', en: 'Pool Club', es: 'Pool Club' },
  'nav.events': { 'pt-BR': 'Eventos', en: 'Events', es: 'Eventos' },
  'nav.partners': { 'pt-BR': 'Parceiros', en: 'Partners', es: 'Socios' },
  'nav.contact': { 'pt-BR': 'Contato', en: 'Contact', es: 'Contacto' },
  'nav.saved': { 'pt-BR': 'Salvos', en: 'Saved', es: 'Guardados' },
  'nav.home': { 'pt-BR': 'Início', en: 'Home', es: 'Inicio' },

  // ── Paths / CTAs ────────────────────────────────────────
  'path.stay': { 'pt-BR': 'Hospedagem', en: 'Stay', es: 'Alojamiento' },
  'path.dine': { 'pt-BR': 'Gastronomia', en: 'Dine', es: 'Gastronomía' },
  'path.pool': { 'pt-BR': 'Pool Club', en: 'Pool Club', es: 'Pool Club' },
  'path.events': { 'pt-BR': 'Eventos', en: 'Events', es: 'Eventos' },
  'path.partners': { 'pt-BR': 'Parceiros', en: 'Partners', es: 'Socios' },
  'cta.book': { 'pt-BR': 'Reservar estadia', en: 'Book your stay', es: 'Reservar estancia' },
  'cta.reserve': { 'pt-BR': 'Reservar mesa', en: 'Reserve a table', es: 'Reservar mesa' },
  'cta.explore': { 'pt-BR': 'Explorar Makai', en: 'Explore Makai', es: 'Explorar Makai' },
  'cta.enquire': { 'pt-BR': 'Planejar evento', en: 'Plan an event', es: 'Planear evento' },
  'cta.quote': { 'pt-BR': 'Solicitar orçamento', en: 'Request a quote', es: 'Solicitar presupuesto' },
  'cta.menu': { 'pt-BR': 'Ver cardápio', en: 'View menu', es: 'Ver menú' },
  'cta.startBooking': { 'pt-BR': 'Iniciar reserva', en: 'Start a booking', es: 'Iniciar reserva' },

  // ── Hero ────────────────────────────────────────────────
  'hero.headline': {
    'pt-BR': 'Descubra a Pipa, organizada com intenção.',
    en: 'Discover Pipa, arranged with intention.',
    es: 'Descubre Pipa, organizada con intención.',
  },
  'hero.subline': {
    'pt-BR': 'Estadias boutique, destinos gastronômicos, pool club, eventos e contato direto com o grupo Pipa.',
    en: 'Boutique stays, dining destinations, pool club, event enquiries and direct contact across the Pipa group.',
    es: 'Estancias boutique, destinos gastronómicos, pool club, eventos y contacto directo con el grupo Pipa.',
  },
  'hero.primary': { 'pt-BR': 'Explorar o grupo', en: 'Explore the group', es: 'Explorar el grupo' },
  'hero.secondary': { 'pt-BR': 'Iniciar reserva', en: 'Start a booking', es: 'Iniciar reserva' },

  // ── Sections ────────────────────────────────────────────
  'section.choosePath': { 'pt-BR': 'Por onde você quer começar?', en: 'Where would you like to start?', es: '¿Por dónde quieres empezar?' },
  'section.featured': { 'pt-BR': 'A coleção Pipa', en: 'The Pipa collection', es: 'La colección Pipa' },
  'section.stay': { 'pt-BR': 'Ficar bem em Pipa', en: 'Staying well in Pipa', es: 'Quedarse bien en Pipa' },
  'section.dine': { 'pt-BR': 'Gastronomia e momentos à beira-mar', en: 'Dining & beach moments', es: 'Gastronomía y momentos junto al mar' },
  'section.pool': { 'pt-BR': 'Pool & day-use', en: 'Pool & day-use', es: 'Pool & day-use' },
  'section.events': { 'pt-BR': 'Eventos privados', en: 'Private events', es: 'Eventos privados' },
  'section.offers': { 'pt-BR': 'Cardápios e ofertas de temporada', en: 'Menus & seasonal offers', es: 'Menús y ofertas de temporada' },
  'section.confidence': { 'pt-BR': 'Por que confiar no grupo Pipa', en: 'Why guests trust Pipa', es: 'Por qué confían en Pipa' },
  'section.contact': { 'pt-BR': 'Fale com a Pipa', en: 'Talk to Pipa', es: 'Habla con Pipa' },
  'section.similar': { 'pt-BR': 'Experiências parecidas', en: 'Similar experiences', es: 'Experiencias similares' },
  'section.beach': { 'pt-BR': 'Beach & day use', en: 'Beach & day use', es: 'Beach & day use' },
  'section.nightlife': { 'pt-BR': 'Vida noturna', en: 'Nightlife', es: 'Vida nocturna' },
  'section.comingSoon': { 'pt-BR': 'Em breve', en: 'Coming soon', es: 'Próximamente' },

  // ── States ──────────────────────────────────────────────
  'common.consult': { 'pt-BR': 'Consultar', en: 'Request details', es: 'Consultar' },
  'common.mapsSoon': { 'pt-BR': 'Maps em breve', en: 'Maps coming soon', es: 'Maps próximamente' },
  'common.comingSoon': { 'pt-BR': 'Em breve', en: 'Coming soon', es: 'Próximamente' },
  'common.capacity': { 'pt-BR': 'Capacidade', en: 'Capacity', es: 'Capacidad' },
  'common.openMaps': { 'pt-BR': 'Ver no mapa', en: 'Open in maps', es: 'Ver en el mapa' },

  // ── Footer ──────────────────────────────────────────────
  'footer.note': {
    'pt-BR': 'Lugares e serviços selecionados em Pipa e arredores. A disponibilidade pode mudar.',
    en: 'Curated places and services in and around Pipa. Availability may change.',
    es: 'Lugares y servicios seleccionados en Pipa y alrededores. La disponibilidad puede cambiar.',
  },
  'footer.privacy': { 'pt-BR': 'Privacidade', en: 'Privacy', es: 'Privacidad' },
  'footer.terms': { 'pt-BR': 'Termos', en: 'Terms', es: 'Términos' },
  'footer.faq': { 'pt-BR': 'Perguntas frequentes', en: 'FAQ', es: 'Preguntas frecuentes' },

  // ── Forms ───────────────────────────────────────────────
  'form.name': { 'pt-BR': 'Nome', en: 'Name', es: 'Nombre' },
  'form.whatsapp': { 'pt-BR': 'WhatsApp', en: 'WhatsApp', es: 'WhatsApp' },
  'form.email': { 'pt-BR': 'E-mail (opcional)', en: 'Email (optional)', es: 'Correo (opcional)' },
  'form.dates': { 'pt-BR': 'Datas', en: 'Dates', es: 'Fechas' },
  'form.guests': { 'pt-BR': 'Nº de pessoas', en: 'Number of guests', es: 'Nº de personas' },
  'form.time': { 'pt-BR': 'Horário preferido', en: 'Preferred time', es: 'Horario preferido' },
  'form.eventType': { 'pt-BR': 'Tipo de evento', en: 'Event type', es: 'Tipo de evento' },
  'form.message': { 'pt-BR': 'Observações (opcional)', en: 'Notes (optional)', es: 'Notas (opcional)' },
  'form.businessName': { 'pt-BR': 'Nome da empresa', en: 'Business name', es: 'Nombre de la empresa' },
  'form.serviceArea': { 'pt-BR': 'Área de entrega', en: 'Service area', es: 'Área de entrega' },
  'form.orderSize': { 'pt-BR': 'Tamanho do pedido', en: 'Order size', es: 'Tamaño del pedido' },
  'form.consent': {
    'pt-BR': 'Concordo em ser contatado sobre esta solicitação.',
    en: 'I agree to be contacted about this enquiry.',
    es: 'Acepto ser contactado sobre esta solicitud.',
  },
  'form.submit': { 'pt-BR': 'Enviar solicitação', en: 'Send enquiry', es: 'Enviar solicitud' },
  'form.required': { 'pt-BR': 'Campo obrigatório', en: 'Required field', es: 'Campo obligatorio' },
  'form.invalidPhone': { 'pt-BR': 'WhatsApp inválido', en: 'Invalid WhatsApp number', es: 'WhatsApp no válido' },
  'form.invalidEmail': { 'pt-BR': 'E-mail inválido', en: 'Invalid email', es: 'Correo no válido' },
  'form.consentRequired': { 'pt-BR': 'É necessário o consentimento', en: 'Consent is required', es: 'Se requiere el consentimiento' },
  'form.error': { 'pt-BR': 'Algo deu errado. Tente novamente.', en: 'Something went wrong. Please try again.', es: 'Algo salió mal. Inténtalo de nuevo.' },

  // ── Success ─────────────────────────────────────────────
  'success.title': { 'pt-BR': 'Sua solicitação está pronta.', en: 'Your enquiry is ready.', es: 'Tu solicitud está lista.' },
  'success.whatsapp': { 'pt-BR': 'Enviar pelo WhatsApp', en: 'Send via WhatsApp', es: 'Enviar por WhatsApp' },
  'success.explore': { 'pt-BR': 'Explorar enquanto preparamos', en: 'Explore while we prepare', es: 'Explora mientras preparamos' },
  'success.disclaimer': {
    'pt-BR': 'Os detalhes podem mudar. Confirmamos a disponibilidade antes de fechar.',
    en: 'Details may change. We confirm availability before finalising.',
    es: 'Los detalles pueden cambiar. Confirmamos disponibilidad antes de cerrar.',
  },

  // ── Disclaimers / safety ────────────────────────────────
  'disclaimer.details': {
    'pt-BR': 'Os detalhes podem mudar. Confirmamos a disponibilidade antes de fechar.',
    en: 'Details may change. We confirm availability before finalising.',
    es: 'Los detalles pueden cambiar. Confirmamos disponibilidad antes de cerrar.',
  },
} satisfies Record<string, Entry>;

export type TranslationKey = keyof typeof translations;
