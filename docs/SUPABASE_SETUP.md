# Supabase setup — Pipa Group (guía manual)

Sigue estos pasos para activar Supabase y que los leads pasen de
`{"ok":true,"persisted":false,"reason":"SUPABASE_NOT_CONFIGURED"}` a
`{"ok":true,"persisted":true,"id":"uuid..."}`.

> La app funciona sin nada de esto (modo mock). Esta guía solo **activa** la
> persistencia de leads. No necesitas saber Supabase: copia y pega.

---

## A. Pasos exactos (15)

1. Entra en **https://supabase.com** y haz login.
2. Abre tu proyecto **`egobpppffliaevynyicy`** (el de la URL `https://egobpppffliaevynyicy.supabase.co`).
3. En el menú lateral, clic en **SQL Editor**.
4. Clic en **+ New query**.
5. Abre el archivo **`supabase/schema.sql`** de este repo, copia **todo** su contenido, pégalo en la query y pulsa **Run**. (Crea las tablas, los enums y la seguridad RLS.)
6. Clic otra vez en **+ New query**, abre **`supabase/seed.sql`**, copia todo, pega y pulsa **Run**. (Carga los 5 paths y las 7 marcas.)
7. En el menú lateral, ve a **Project Settings** (el engranaje) → **API**.
8. Copia el **Project URL** (algo como `https://egobpppffliaevynyicy.supabase.co`).
9. Copia la **anon public key** (o la **publishable key** `sb_publishable_...`).
10. En la misma página, baja a **Project API keys** y copia la **`service_role`** key (la secreta; haz clic en "Reveal").
11. Abre el archivo **`.env.local`** en la raíz del proyecto y pega las variables (bloque en la sección B).
12. Para el servidor si está corriendo (Ctrl+C) y vuelve a arrancar: **`npm run dev`** (las env vars solo se leen al arrancar).
13. Ejecuta el **curl A** (sección D). Debe responder `"persisted":true` con un `id` uuid.
14. En Supabase, ve a **Table Editor** → tabla **`inquiries`**: verás la fila del lead.
15. Ve a **Table Editor** → tabla **`inquiry_events`**: verás el evento `created` (y `n8n_dispatched`/`n8n_failed`).

✅ Si ves la fila en `inquiries` con su `id` uuid, **funcionó**.

---

## B. Qué debe tener `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=https://egobpppffliaevynyicy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_hne6UTyi8GTpGOCLULs7Yg_NRfAljw1
SUPABASE_SERVICE_ROLE_KEY=PEGA_AQUI_LA_SERVICE_ROLE
N8N_WEBHOOK_URL=
N8N_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Aclaraciones:

- `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` **pueden ser públicas** (van al navegador, protegidas por RLS). El código acepta tanto `NEXT_PUBLIC_SUPABASE_ANON_KEY` como `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- `SUPABASE_SERVICE_ROLE_KEY` es **privada y solo server-side**. Es la que activa `persisted:true`.
- **Nunca** subas `.env.local` a GitHub (ya está en `.gitignore`).
- **Nunca** pongas el `service_role` con prefijo `NEXT_PUBLIC` (lo expondría al navegador).
- Sin `SUPABASE_SERVICE_ROLE_KEY`, los leads siguen respondiendo `persisted:false` (no se rompe nada).

---

## C. Seguridad — verificado en el código (✓ confirmado)

- ✅ `SUPABASE_SERVICE_ROLE_KEY` se lee **solo** en `lib/supabase/admin.ts`, que empieza con `import 'server-only'` (el build falla si se importa en cliente). Confirmado que **no aparece en los chunks de cliente** (`.next/static`).
- ✅ Ningún componente client importa `admin.ts` ni el service role (auditado con grep).
- ✅ El service role **no se loguea** en ningún sitio (admin/n8n/inquiries solo logean nombres de error o códigos).
- ✅ El endpoint **no devuelve errores internos sensibles**: validación → `422` con errores de campo; error interno → `500 {"error":"server_error"}` genérico.
- ✅ **No se guarda la IP cruda**: se hashea con SHA-256 + sal diaria en `app/api/inquiries/route.ts` (columna `ip_hash`).
- ✅ **Honeypot** activo (campo oculto `company_website`): si viene relleno → descartado.
- ✅ **Consent obligatorio**: zod exige `consent: true` o responde `422`.
- ✅ **n8n ausente no rompe**: `dispatchInquiryToN8n` sale temprano si no hay `N8N_WEBHOOK_URL`; fallos se registran como `n8n_failed` sin cortar la respuesta.
- ✅ **Fallback seguro** si Supabase no está configurado: `{"ok":true,"persisted":false,"reason":"SUPABASE_NOT_CONFIGURED"}`.
- ✅ **Si Supabase sí está configurado**: inserta en `inquiries` y registra `inquiry_events` (`created` + `n8n_dispatched`/`n8n_failed`).

---

## D. Los 3 curl listos para copiar

Con el servidor en `npm run dev` (puerto 3000):

### A. Lead válido (Umi / Dine / pt-BR)
Sin service role → `persisted:false`. Con service role + SQL ejecutado → `persisted:true`.

```bash
curl -s -X POST http://localhost:3000/api/inquiries \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "dine",
    "brandSlug": "umi-fun-kitchen",
    "name": "Ana Souza",
    "whatsapp": "+55 84 99616-2007",
    "email": "ana@example.com",
    "guests": 2,
    "preferredTime": "20:00",
    "message": "Mesa para o pôr do sol",
    "consent": true,
    "preferredLanguage": "pt-BR",
    "source": "test_curl_A",
    "locale": "pt-BR"
  }'
```

### B. Honeypot lleno
Espera: `{"ok":true,"persisted":false,"id":"dropped","reason":"HONEYPOT"}`

```bash
curl -s -X POST http://localhost:3000/api/inquiries \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "dine",
    "name": "Bot",
    "whatsapp": "+5584996162007",
    "consent": true,
    "preferredLanguage": "pt-BR",
    "source": "test_curl_B",
    "locale": "pt-BR",
    "company_website": "http://spam.example"
  }'
```

### C. Payload inválido
Espera: **HTTP 422**.

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST http://localhost:3000/api/inquiries \
  -H 'Content-Type: application/json' \
  -d '{}'
```

---

## E. Conectar n8n (opcional, más adelante)

1. En n8n crea un nodo **Webhook** (POST) y copia su URL → `N8N_WEBHOOK_URL`.
2. (Opcional) pon `N8N_WEBHOOK_SECRET`; se envía como header `X-Pipa-Signature`.
3. Solo se envía un **resumen seguro** (id, path, brand, locale, created_at, flags de guests/evento, `contact_channel_present`). **Nunca** nombre/teléfono/email/mensaje.
4. Los fallos de n8n nunca rompen la respuesta al usuario; se registran como `n8n_failed`.

---

## F. Tablas: públicas vs privadas

- **Públicas** (lectura con anon key, RLS `is_public = true`): `quick_paths`, `brands`, `brand_contacts`, `brand_events`, `journey_fields`, `offers`, `menus`.
- **Privadas** (solo service role): `inquiries`, `inquiry_events`, `staff_notes`.

> Nota: no usamos `@supabase/ssr` todavía porque aún no hay login de staff
> (sin sesiones/cookies de auth). El flujo de leads usa el cliente admin
> server-side. Cuando construyamos el dashboard con auth de staff, ahí sí
> entra `@supabase/ssr` + las políticas RLS marcadas `TODO_AUTH` en el schema.

---

## G. Pendiente para el dashboard de staff (fase aparte)

- **TODO_AUTH:** Supabase Auth + políticas RLS de staff (plantillas comentadas en `schema.sql`).
- Vistas: lista de enquiries, pipeline de estados, tiempos de respuesta, source breakdown. El shape de datos ya lo soporta.
- **TODO_SECURITY:** rate limiting real en `/api/inquiries`.
