import type { Offer } from '@/types/offer';

/**
 * Seasonal offers & events. Real Pipa events exist (Sabores da Pipa, São João
 * da Pipa, Carnaval da Pipa) but confirmed dates are TODO_CONTENT.
 */
export const offers: Offer[] = [
  {
    id: 'sabores-da-pipa',
    cadence: 'seasonal',
    title: { 'pt-BR': 'Sabores da Pipa', en: 'Sabores da Pipa', es: 'Sabores da Pipa' },
    description: {
      'pt-BR': 'Festival gastronômico de Pipa com menus especiais. TODO_CONTENT: datas a confirmar.',
      en: 'Pipa food festival with special menus. TODO_CONTENT: dates to be confirmed.',
      es: 'Festival gastronómico de Pipa con menús especiales. TODO_CONTENT: fechas por confirmar.',
    },
    status: 'needs_review',
  },
  {
    id: 'sao-joao-da-pipa',
    cadence: 'seasonal',
    title: { 'pt-BR': 'São João da Pipa 2026', en: 'São João da Pipa 2026', es: 'São João da Pipa 2026' },
    description: {
      'pt-BR': 'Festa junina de destino. TODO_CONTENT: programação a confirmar.',
      en: 'Destination June festival. TODO_CONTENT: programme to be confirmed.',
      es: 'Fiesta de junio del destino. TODO_CONTENT: programación por confirmar.',
    },
    status: 'placeholder',
  },
  {
    id: 'carnaval-da-pipa',
    cadence: 'seasonal',
    title: { 'pt-BR': 'Carnaval da Pipa 2026', en: 'Carnaval da Pipa 2026', es: 'Carnaval da Pipa 2026' },
    description: {
      'pt-BR': 'Programação de carnaval. TODO_CONTENT: datas e line-up a confirmar.',
      en: 'Carnival programme. TODO_CONTENT: dates and line-up to be confirmed.',
      es: 'Programación de carnaval. TODO_CONTENT: fechas y line-up por confirmar.',
    },
    status: 'placeholder',
  },
];
