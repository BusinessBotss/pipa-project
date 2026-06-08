# Integración n8n Webhook

La integración con n8n permite despachar eventos de nuevos leads (inquiries) de forma segura hacia tu instancia de n8n para generar alertas operativas (ej. WhatsApp, Telegram, Email, Slack).

## 1. Funcionamiento

* **No bloqueante**: La llamada HTTP tiene un timeout de 4 segundos. Si falla, el lead sigue su curso normal.
* **Segura**: Se firma el payload con HMAC-SHA256 usando el secret.
* **Privacidad**: Se recorta la PII (Personally Identifiable Information). No se envía nombre completo, email ni WhatsApp al webhook para evitar fugas. Se mandan iniciales y los últimos 4 dígitos.

## 2. Variables de entorno

Agrega estas variables a tu `.env.local`:

```env
N8N_WEBHOOK_URL=https://n8n.tu-dominio.com/webhook/tucodigo
N8N_WEBHOOK_SECRET=un_secreto_largo_y_seguro
```

## 3. Configuración en n8n

1. Crea un **Webhook Node**.
2. Configura el **Method** a `POST`.
3. Para validar la firma, añade un nodo **Crypto** para calcular HMAC-SHA256 del *raw body* recibido usando la variable de entorno de tu n8n que tenga el secreto.
4. Añade un nodo **If** para comparar la firma calculada con la que llega en el header `x-pipa-signature`.

## 4. Estructura del Payload

```json
{
  "event": "inquiry.created",
  "inquiryId": "uuid-del-lead",
  "type": "dine",
  "brandSlug": "umi-fun-kitchen",
  "locale": "pt-BR",
  "preferredLanguage": "pt-BR",
  "source": "website",
  "createdAt": "2026-06-08T12:00:00.000Z",
  "safeContact": {
    "hasWhatsapp": true,
    "whatsappLast4": "9999",
    "hasEmail": false
  },
  "summary": {
    "nameInitials": "TC",
    "guests": 2,
    "messagePreview": "Hola me gustaría..."
  },
  "dashboardUrl": "http://localhost:3000/pt-BR/staff/uuid-del-lead"
}
```

## 5. Datos NO enviados

* `whatsapp` completo
* `email` completo
* `name` completo
* `ip_hash`
* `user_agent`
* Payload estructurado original

## 6. Flujo n8n recomendado

1. **Webhook**: Recibe POST.
2. **Crypto / Verify**: Valida `x-pipa-signature`.
3. **Switch**: Según el `type` o `brandSlug`, decide a qué equipo rutear (ej. equipo restaurante vs equipo hotel).
4. **Format**: Arma el mensaje: "Nuevo lead en Umi Fun Kitchen (TC) - Ver en dashboard: [URL]".
5. **Send**: Envía a Telegram, Slack, WhatsApp interno, etc.

## 7. Troubleshooting y pruebas locales

Puedes probar mandando un curl falso o ejecutando el script (si existe):

```bash
npx tsx scripts/test-n8n-webhook.ts
```

Si en n8n falla o está vacío el URL, el proyecto local registrará silenciosamente un `n8n_failed` o `N8N_NOT_CONFIGURED` y continuará operando normalmente.
