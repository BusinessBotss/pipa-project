import { createHmac } from 'crypto';

const url = process.env.N8N_WEBHOOK_URL;
const secret = process.env.N8N_WEBHOOK_SECRET;

if (!url) {
  console.log('N8N_WEBHOOK_URL not set');
  process.exit(1);
}

const payload = {
  event: "inquiry.created",
  inquiryId: "test-uuid-1234",
  type: "dine",
  brandSlug: "umi-fun-kitchen",
  locale: "pt-BR",
  preferredLanguage: "pt-BR",
  source: "local_test",
  createdAt: new Date().toISOString(),
  safeContact: { hasWhatsapp: true, whatsappLast4: "9999", hasEmail: false },
  summary: { nameInitials: "TT", guests: 2, messagePreview: "Test message" },
  dashboardUrl: "http://localhost:3000/pt-BR/staff/test-uuid-1234"
};

const body = JSON.stringify(payload);
const headers: Record<string, string> = { 'Content-Type': 'application/json' };

if (secret) {
  headers['x-pipa-signature'] = createHmac('sha256', secret).update(body).digest('hex');
}

console.log('Sending to', url);
fetch(url, { method: 'POST', headers, body })
  .then(res => console.log('Response:', res.status))
  .catch(err => console.error('Error:', err.message));
