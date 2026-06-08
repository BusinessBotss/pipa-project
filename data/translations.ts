import type { Locale } from '@/types/locale';

type Entry = Record<Locale, string>;

/**
 * UI strings. pt-BR is primary. Missing keys fall back to pt-BR (see lib/i18n).
 * Brand content lives in data/brands.ts, not here.
 */
export const translations = {
  // ── Common ──────────────────────────────────────────────
  'common.toBeConfirmed': { 'pt-BR': 'A confirmar', en: 'To be confirmed', es: 'A confirmar' , de: 'Noch zu bestätigen', fr: 'À confirmer' },
  'common.priceOnRequest': { 'pt-BR': 'Preço sob consulta', en: 'Price on request', es: 'Precio bajo consulta' , de: 'Preis auf Anfrage', fr: 'Prix sur demande' },
  'common.requestDetails': { 'pt-BR': 'Solicitar detalhes', en: 'Request details', es: 'Solicitar detalles' , de: 'Anfragen', fr: 'Demander des détails' },
  'common.verified': { 'pt-BR': 'Verificado', en: 'Verified', es: 'Verificado' , de: 'Verifiziert', fr: 'Vérifié' },
  'common.viewDetails': { 'pt-BR': 'Ver detalhes', en: 'View details', es: 'Ver detalles' , de: 'Details ansehen', fr: 'Voir les détails' },
  'common.save': { 'pt-BR': 'Salvar', en: 'Save', es: 'Guardar' , de: 'Speichern', fr: 'Enregistrer' },
  'common.close': { 'pt-BR': 'Fechar', en: 'Close', es: 'Cerrar' , de: 'Schließen', fr: 'Fermer' },
  'common.back': { 'pt-BR': 'Voltar', en: 'Back', es: 'Volver' , de: 'Zurück', fr: 'Retour' },
  'common.send': { 'pt-BR': 'Enviar', en: 'Send', es: 'Enviar' , de: 'Senden', fr: 'Envoyer' },
  'common.openMenu': { 'pt-BR': 'Abrir menu', en: 'Open menu', es: 'Abrir menú' , de: 'Menü öffnen', fr: 'Ouvrir le menu' },

  // ── Navigation ──────────────────────────────────────────
  'nav.experiences': { 'pt-BR': 'Experiências', en: 'Experiences', es: 'Experiencias' , de: 'Erlebnisse', fr: 'Expériences' },
  'nav.stay': { 'pt-BR': 'Hospedagem', en: 'Stay', es: 'Alojamiento' , de: 'Aufenthalt', fr: 'Séjour' },
  'nav.dine': { 'pt-BR': 'Gastronomia', en: 'Dine', es: 'Gastronomía' , de: 'Essen', fr: 'Restauration' },
  'nav.pool': { 'pt-BR': 'Pool Club', en: 'Pool Club', es: 'Pool Club' , de: 'Pool Club', fr: 'Pool Club' },
  'nav.events': { 'pt-BR': 'Eventos', en: 'Events', es: 'Eventos' , de: 'Veranstaltungen', fr: 'Événements' },
  'nav.partners': { 'pt-BR': 'Parceiros', en: 'Partners', es: 'Socios' , de: 'Partner', fr: 'Partenaires' },
  'nav.contact': { 'pt-BR': 'Contato', en: 'Contact', es: 'Contacto' , de: 'Kontakt', fr: 'Contact' },
  'nav.saved': { 'pt-BR': 'Salvos', en: 'Saved', es: 'Guardados' , de: 'Gespeichert', fr: 'Enregistrés' },
  'nav.home': { 'pt-BR': 'Início', en: 'Home', es: 'Inicio' , de: 'Startseite', fr: 'Accueil' },

  // ── Paths / CTAs ────────────────────────────────────────
  'path.stay': { 'pt-BR': 'Hospedagem', en: 'Stay', es: 'Alojamiento' , de: 'Aufenthalt', fr: 'Séjour' },
  'path.dine': { 'pt-BR': 'Gastronomia', en: 'Dine', es: 'Gastronomía' , de: 'Essen', fr: 'Restauration' },
  'path.pool': { 'pt-BR': 'Pool Club', en: 'Pool Club', es: 'Pool Club' , de: 'Pool Club', fr: 'Pool Club' },
  'path.events': { 'pt-BR': 'Eventos', en: 'Events', es: 'Eventos' , de: 'Veranstaltungen', fr: 'Événements' },
  'path.partners': { 'pt-BR': 'Parceiros', en: 'Partners', es: 'Socios' , de: 'Partner', fr: 'Partenaires' },
  'cta.book': { 'pt-BR': 'Reservar estadia', en: 'Book your stay', es: 'Reservar estancia' , de: 'Aufenthalt buchen', fr: 'Réserver votre séjour' },
  'cta.reserve': { 'pt-BR': 'Reservar mesa', en: 'Reserve a table', es: 'Reservar mesa' , de: 'Tisch reservieren', fr: 'Réserver une table' },
  'cta.explore': { 'pt-BR': 'Explorar Makai', en: 'Explore Makai', es: 'Explorar Makai' , de: 'Makai entdecken', fr: 'Explorer Makai' },
  'cta.enquire': { 'pt-BR': 'Planejar evento', en: 'Plan an event', es: 'Planear evento' , de: 'Event planen', fr: 'Planifier un événement' },
  'cta.quote': { 'pt-BR': 'Solicitar orçamento', en: 'Request a quote', es: 'Solicitar presupuesto' , de: 'Angebot anfordern', fr: 'Demander un devis' },
  'cta.menu': { 'pt-BR': 'Ver cardápio', en: 'View menu', es: 'Ver menú' , de: 'Menü ansehen', fr: 'Voir le menu' },
  'cta.startBooking': { 'pt-BR': 'Iniciar reserva', en: 'Start a booking', es: 'Iniciar reserva' , de: 'Buchung starten', fr: 'Démarrer une réservation' },

  // ── Hero ────────────────────────────────────────────────
  'hero.headline': {
    'pt-BR': 'Descubra a Pipa, organizada com intenção.',
    en: 'Discover Pipa, arranged with intention.',
    es: 'Descubre Pipa, organizada con intención.',
    de: 'Entdecken Sie Pipa, mit Intention organisiert.',
    fr: 'Découvrez Pipa, organisé avec intention.',
  },
  'hero.subline': {
    'pt-BR': 'Estadias boutique, destinos gastronômicos, pool club, eventos e contato direto com o grupo Pipa.',
    en: 'Boutique stays, dining destinations, pool club, event enquiries and direct contact across the Pipa group.',
    es: 'Estancias boutique, destinos gastronómicos, pool club, eventos y contacto directo con el grupo Pipa.',
    de: 'Boutique-Aufenthalte, gastronomische Ziele, Pool Club, Events und direkter Kontakt zur Pipa-Gruppe.',
    fr: 'Séjours boutique, destinations gastronomiques, pool club, événements et contact direct avec le groupe Pipa.',
  },
  'hero.primary': { 'pt-BR': 'Explorar o grupo', en: 'Explore the group', es: 'Explorar el grupo' , de: 'Die Gruppe erkunden', fr: 'Explorer le groupe' },
  'hero.secondary': { 'pt-BR': 'Iniciar reserva', en: 'Start a booking', es: 'Iniciar reserva' , de: 'Buchung starten', fr: 'Démarrer une réservation' },

  // ── Sections ────────────────────────────────────────────
  'section.choosePath': { 'pt-BR': 'Por onde você quer começar?', en: 'Where would you like to start?', es: '¿Por dónde quieres empezar?' , de: 'Wo möchten Sie anfangen?', fr: 'Par où voulez-vous commencer?' },
  'section.featured': { 'pt-BR': 'A coleção Pipa', en: 'The Pipa collection', es: 'La colección Pipa' , de: 'Die Pipa Kollektion', fr: 'La collection Pipa' },
  'section.stay': { 'pt-BR': 'Ficar bem em Pipa', en: 'Staying well in Pipa', es: 'Quedarse bien en Pipa' , de: 'Gut übernachten in Pipa', fr: 'Bien séjourner à Pipa' },
  'section.dine': { 'pt-BR': 'Gastronomia e momentos à beira-mar', en: 'Dining & beach moments', es: 'Gastronomía y momentos junto al mar' , de: 'Gastronomie & Strandmomente', fr: 'Gastronomie & moments à la plage' },
  'section.pool': { 'pt-BR': 'Pool & day-use', en: 'Pool & day-use', es: 'Pool & day-use' , de: 'Pool & Day-Use', fr: 'Piscine & Day-Use' },
  'section.events': { 'pt-BR': 'Eventos privados', en: 'Private events', es: 'Eventos privados' , de: 'Private Events', fr: 'Événements privés' },
  'section.offers': { 'pt-BR': 'Cardápios e ofertas de temporada', en: 'Menus & seasonal offers', es: 'Menús y ofertas de temporada' , de: 'Menüs & saisonale Angebote', fr: 'Menus & offres de saison' },
  'section.confidence': { 'pt-BR': 'Por que confiar no grupo Pipa', en: 'Why guests trust Pipa', es: 'Por qué confían en Pipa' , de: 'Warum Gäste Pipa vertrauen', fr: 'Pourquoi les clients font confiance à Pipa' },
  'section.contact': { 'pt-BR': 'Fale com a Pipa', en: 'Talk to Pipa', es: 'Habla con Pipa' , de: 'Sprechen Sie mit Pipa', fr: 'Parlez à Pipa' },
  'section.similar': { 'pt-BR': 'Experiências parecidas', en: 'Similar experiences', es: 'Experiencias similares' , de: 'Ähnliche Erlebnisse', fr: 'Expériences similaires' },
  'section.beach': { 'pt-BR': 'Beach & day use', en: 'Beach & day use', es: 'Beach & day use' , de: 'Strand & Day-Use', fr: 'Plage & Day-Use' },
  'section.nightlife': { 'pt-BR': 'Vida noturna', en: 'Nightlife', es: 'Vida nocturna' , de: 'Nachtleben', fr: 'Vie nocturne' },
  'section.comingSoon': { 'pt-BR': 'Em breve', en: 'Coming soon', es: 'Próximamente' , de: 'Demnächst', fr: 'Bientôt' },

  // ── States ──────────────────────────────────────────────
  'common.consult': { 'pt-BR': 'Consultar', en: 'Request details', es: 'Consultar' , de: 'Anfragen', fr: 'Demander des détails' },
  'common.mapsSoon': { 'pt-BR': 'Maps em breve', en: 'Maps coming soon', es: 'Maps próximamente' , de: 'Karten folgen bald', fr: 'Cartes bientôt disponibles' },
  'common.comingSoon': { 'pt-BR': 'Em breve', en: 'Coming soon', es: 'Próximamente' , de: 'Demnächst', fr: 'Bientôt' },
  'common.capacity': { 'pt-BR': 'Capacidade', en: 'Capacity', es: 'Capacidad' , de: 'Kapazität', fr: 'Capacité' },
  'common.openMaps': { 'pt-BR': 'Ver no mapa', en: 'Open in maps', es: 'Ver en el mapa' , de: 'Auf Karte ansehen', fr: 'Voir sur la carte' },

  // ── Footer ──────────────────────────────────────────────
  'footer.note': {
    'pt-BR': 'Lugares e serviços selecionados em Pipa e arredores. A disponibilidade pode mudar.',
    en: 'Curated places and services in and around Pipa. Availability may change.',
    es: 'Lugares y servicios seleccionados en Pipa y alrededores. La disponibilidad puede cambiar.',
    de: 'Ausgewählte Orte und Dienstleistungen in und um Pipa. Verfügbarkeit kann sich ändern.',
    fr: 'Lieux et services sélectionnés à Pipa et ses environs. La disponibilité peut changer.',
  },
  'footer.privacy': { 'pt-BR': 'Privacidade', en: 'Privacy', es: 'Privacidad' , de: 'Datenschutz', fr: 'Confidentialité' },
  'footer.terms': { 'pt-BR': 'Termos', en: 'Terms', es: 'Términos' , de: 'Bedingungen', fr: 'Conditions' },
  'footer.faq': { 'pt-BR': 'Perguntas frequentes', en: 'FAQ', es: 'Preguntas frecuentes' , de: 'FAQ', fr: 'FAQ' },

  // ── Forms ───────────────────────────────────────────────
  'form.name': { 'pt-BR': 'Nome', en: 'Name', es: 'Nombre' , de: 'Name', fr: 'Name' },
  'form.whatsapp': { 'pt-BR': 'WhatsApp', en: 'WhatsApp', es: 'WhatsApp' , de: 'WhatsApp', fr: 'WhatsApp' },
  'form.email': { 'pt-BR': 'E-mail (opcional)', en: 'Email (optional)', es: 'Correo (opcional)' , de: 'E-Mail (optional)', fr: 'E-mail (facultatif)' },
  'form.dates': { 'pt-BR': 'Datas', en: 'Dates', es: 'Fechas' , de: 'Daten', fr: 'Dates' },
  'form.guests': { 'pt-BR': 'Nº de pessoas', en: 'Number of guests', es: 'Nº de personas' , de: 'Gästeanzahl', fr: 'Nombre de personnes' },
  'form.time': { 'pt-BR': 'Horário preferido', en: 'Preferred time', es: 'Horario preferido' , de: 'Bevorzugte Zeit', fr: 'Heure préférée' },
  'form.eventType': { 'pt-BR': 'Tipo de evento', en: 'Event type', es: 'Tipo de evento' , de: 'Eventtyp', fr: 'Type d\'événement' },
  'form.message': { 'pt-BR': 'Observações (opcional)', en: 'Notes (optional)', es: 'Notas (opcional)' , de: 'Anmerkungen (optional)', fr: 'Notes (facultatif)' },
  'form.businessName': { 'pt-BR': 'Nome da empresa', en: 'Business name', es: 'Nombre de la empresa' , de: 'Firmenname', fr: 'Nom de l\'entreprise' },
  'form.serviceArea': { 'pt-BR': 'Área de entrega', en: 'Service area', es: 'Área de entrega' , de: 'Liefergebiet', fr: 'Zone de livraison' },
  'form.orderSize': { 'pt-BR': 'Tamanho do pedido', en: 'Order size', es: 'Tamaño del pedido' , de: 'Bestellgröße', fr: 'Taille de la commande' },
  'form.consent': {
    'pt-BR': 'Concordo em ser contatado sobre esta solicitação.',
    en: 'I agree to be contacted about this enquiry.',
    es: 'Acepto ser contactado sobre esta solicitud.',
    de: 'Ich stimme zu, bezüglich dieser Anfrage kontaktiert zu werden.',
    fr: 'J\'accepte d\'être contacté au sujet de cette demande.',
  },
  'form.submit': { 'pt-BR': 'Enviar solicitação', en: 'Send enquiry', es: 'Enviar solicitud' , de: 'Anfrage senden', fr: 'Envoyer la demande' },
  'form.required': { 'pt-BR': 'Campo obrigatório', en: 'Required field', es: 'Campo obligatorio' , de: 'Pflichtfeld', fr: 'Champ obligatoire' },
  'form.invalidPhone': { 'pt-BR': 'WhatsApp inválido', en: 'Invalid WhatsApp number', es: 'WhatsApp no válido' , de: 'Ungültige WhatsApp-Nummer', fr: 'Numéro WhatsApp invalide' },
  'form.invalidEmail': { 'pt-BR': 'E-mail inválido', en: 'Invalid email', es: 'Correo no válido' , de: 'Ungültige E-Mail', fr: 'E-mail invalide' },
  'form.consentRequired': { 'pt-BR': 'É necessário o consentimento', en: 'Consent is required', es: 'Se requiere el consentimiento' , de: 'Zustimmung ist erforderlich', fr: 'Le consentement est requis' },
  'form.error': { 'pt-BR': 'Algo deu errado. Tente novamente.', en: 'Something went wrong. Please try again.', es: 'Algo salió mal. Inténtalo de nuevo.' , de: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.', fr: 'Un problème est survenu. Veuillez réessayer.' },

  // ── Success ─────────────────────────────────────────────
  'success.title': { 'pt-BR': 'Sua solicitação está pronta.', en: 'Your enquiry is ready.', es: 'Tu solicitud está lista.' , de: 'Ihre Anfrage ist bereit.', fr: 'Votre demande est prête.' },
  'success.whatsapp': { 'pt-BR': 'Enviar pelo WhatsApp', en: 'Send via WhatsApp', es: 'Enviar por WhatsApp' , de: 'Über WhatsApp senden', fr: 'Envoyer via WhatsApp' },
  'success.explore': { 'pt-BR': 'Explorar enquanto preparamos', en: 'Explore while we prepare', es: 'Explora mientras preparamos' , de: 'Entdecken, während wir vorbereiten', fr: 'Explorez pendant que nous préparons' },
  'success.disclaimer': {
    'pt-BR': 'Os detalhes podem mudar. Confirmamos a disponibilidade antes de fechar.',
    en: 'Details may change. We confirm availability before finalising.',
    es: 'Los detalles pueden cambiar. Confirmamos disponibilidad antes de cerrar.',
    de: 'Details können sich ändern. Wir bestätigen die Verfügbarkeit vor Abschluss.',
    fr: 'Les détails peuvent changer. Nous confirmons la disponibilité avant de finaliser.',
  },

  // ── Disclaimers / safety ────────────────────────────────
  'disclaimer.details': {
    'pt-BR': 'Os detalhes podem mudar. Confirmamos a disponibilidade antes de fechar.',
    en: 'Details may change. We confirm availability before finalising.',
    es: 'Los detalles pueden cambiar. Confirmamos disponibilidad antes de cerrar.',
    de: 'Details können sich ändern. Wir bestätigen die Verfügbarkeit vor Abschluss.',
    fr: 'Les détails peuvent changer. Nous confirmons la disponibilité avant de finaliser.',
  },
} satisfies Record<string, Entry>;

export type TranslationKey = keyof typeof translations;
