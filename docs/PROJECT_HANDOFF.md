# Pipa Group — Project Handoff

Este documento consolida el estado del proyecto antes de su primer despliegue a producción (Vercel). Sirve como fuente de verdad sobre arquitectura, contenido y reglas de negocio vigentes.

## Resumen Ejecutivo
El proyecto NO es un directorio genérico ("Mallorca"), sino una **plataforma de conversión multi-brand** unificada para las marcas de Pipa Group (hospitality, alojamiento, beach clubs, nightlife, food & drinks, events, y B2B) en Praia da Pipa, Brasil.
El objetivo central es lograr la conversión del usuario en un máximo de 3 interacciones, utilizando WhatsApp y Supabase/n8n para el enrutamiento de leads. El idioma primario es `pt-BR`, con soporte secundario para `en` y `es`.

## Stack Técnico
- **Framework**: Next.js 14 App Router
- **Estilos**: Tailwind CSS + Framer Motion
- **Validación**: Zod
- **Backend/DB**: Supabase SDK (Server-side usage for sensitive data)
- **i18n**: Sistema interno en rutas (`pt-BR`, `en`, `es`)
- **Arquitectura**: `server-only` enfocado, Data model con estricta veracidad por campo
- **APIs**: `/api/inquiries`
- **Webhooks**: n8n integrado opcionalmente

## Rutas Actuales
El enrutamiento multilingüe soporta las siguientes rutas base (precedidas por `/[locale]`):
- `/` (Home, redirecciona a la locale por defecto mediante middleware)
- `/experiences`, `/stay`, `/dine`, `/pool`, `/events`, `/partners` (Audience Paths)
- `/brands/[slug]` (Brand detail pages)
- `/book/[slug]` (Páginas de reserva)
- `/offers`, `/gallery`, `/contact`, `/faq`, `/privacy`, `/terms`
- `/staff`, `/staff/[id]` (Staff Dashboard protegido)
- `/api/inquiries` (Endpoint de leads)
- `/sitemap.xml`, `/robots.txt`

## Marcas Actuales (9)
1. **Casa Palmeira Pipa** (Stay)
2. **Recanto de Ibiza** (Stay)
3. **Umi Fun Kitchen** (Dine)
4. **Makai Pool Club** (Pool)
5. **Makai The Club** (Nightlife)
6. **Nami Madeiro** (Dine/Pool)
7. **TĀO Pipa** (Dine)
8. **PIPA Ice Supply** (B2B)
9. **Novo Restaurante Bar 2026** (Coming soon)

## Política de Veracidad (CRÍTICA)
Nunca se deben inventar datos. Los campos siguen el siguiente modelo de estados:
- `verified`: Dato seguro y validado para producción.
- `needs_review`: Dato recibido o público (urls proveídas), a confirmar por el propietario antes de pasarlo a verified.
- `placeholder`: Falta contenido / TODO_CONTENT.
**Reglas:** NO inventar ratings, horarios, precios, capacidades, claims, contactos, fotos, logos ni usar *aggregateRating*. Si falta, usar textos de UI de tipo "A confirmar", "Fotos em breve", etc.

## Supabase y Lead Routing
Supabase está en vivo. Las tablas principales (`brands`, `inquiries`, `brand_assets`, etc.) ya cuentan con schema, RLS y un script de `seed.sql`.
El endpoint `/api/inquiries` persiste la data exitosamente (`{ "ok": true, "persisted": true, "id": "<uuid>" }`) utilizando exclusivamente `SUPABASE_SERVICE_ROLE_KEY` del lado del servidor para evadir el RLS en tablas privadas (`inquiries`). No se exponen service roles al cliente bajo ninguna circunstancia.

### Payload real de /api/inquiries
```json
{
  "type": "dine",
  "brandSlug": "umi-fun-kitchen",
  "locale": "pt-BR",
  "preferredLanguage": "pt-BR",
  "source": "website",
  "name": "Teste Cliente",
  "whatsapp": "+5584999999999",
  "guests": 2,
  "consent": true,
  "company_website": "" // Honeypot
}
```

## n8n (Webhook Opcional)
Preparado para emitir eventos de conversión (`inquiry.created`) sin bloquear al cliente.
Utiliza firma HMAC-SHA256 y un payload reducido sin PII sensible completa, incluyendo iniciales y un preview del mensaje junto a la URL del lead en el dashboard.

## Staff Dashboard
Ubicado en `/staff`. Cuenta con protección temporal mediante `Basic Auth` vía `middleware.ts`.
Variables: `STAFF_DASHBOARD_ENABLED` y `STAFF_DASHBOARD_PASSWORD`.
Reglas: No indexado en sitemap, bloqueado en robots.txt, sin navegación pública. TODO futuro: migrar a Supabase Auth.

## Assets y Media
La gestión de assets se consolida en `data/brand-assets.ts` alimentando `seed.sql`. 
Ya se integraron URLs reales bajo el status `needs_review` para Casa Palmeira, Recanto, Umi, Makai Pool Club y Makai The Club. 
Las Brand detail pages y el componente `BrandCard` ya extraen de forma dinámica los assets reales si son seguros, caso contrario utilizan imágenes de fallback de Unsplash.

## Vercel Deployment & Configuración
Toda la documentación para subir el proyecto a Vercel reside en `docs/VERCEL_DEPLOYMENT.md`. Las variables críticas están preparadas (`.env.example`), Next.js image config (`next.config.mjs`) acepta los dominios reales, `robots.ts` oculta el dashboard, y el `middleware.ts` rutea internacionalización y protege áreas restringidas.

## Seguridad
- No se guarda la IP cruda (solo hashes).
- Honeypot antispam activo (`company_website`).
- Consentimiento de privacidad obligatorio.
- Prevención XSS (`dangerouslySetInnerHTML` prohibido en lo posible).
- Validaciones seguras de URLs (`isSafePublicUrl`).
- PII y Service Roles blindados contra el cliente.

## Estado de Validación Actual
- `npm run typecheck`: Limpio
- `npm run lint`: Limpio
- `npm run build`: Limpio (102/102 páginas estáticas / SSG y dinámicas compiladas)

## Próximas Fases Recomendadas
1. **Despliegue inicial en Vercel** (Estado actual). Revisión exhaustiva con usuarios reales / stakeholders en preview/producción.
2. Migración del almacenamiento de assets locales/externos a **Supabase Storage buckets**.
3. Reemplazo del Basic Auth en `/staff` por **Supabase Auth**.
4. Autorización y obtención final de **Menús en PDF**, Tarifarios y confirmación de estados `needs_review` a `verified`.
