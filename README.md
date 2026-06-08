# Pipa Group

Multi-brand hospitality conversion platform for **Praia da Pipa** (Tibau do Sul, RN, Brazil).
Stay · Dine · Pool · Events · Partners — pt-BR / en / es, BRL, WhatsApp-first.

## Quick start

```bash
cp .env.example .env.local   # fill values (optional for local dev)
npm install
npm run dev                  # http://localhost:3000 → redirects to /pt-BR
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build (SSG brand pages, 3 locales) |
| `npm run start` | Serve the build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |

## Where things live

- Brand data + veracity model: `data/brands.ts`, `types/common.ts`
- i18n: `data/translations.ts`, `lib/i18n.ts`, `middleware.ts`
- UI (Component Canvas): `components/ui/*`
- Conversion: `components/layout/QuickPathSwitcher.tsx`, `components/forms/InquiryForm.tsx`, `app/api/inquiries/route.ts`
- Full notes: [`docs/IMPLEMENTATION_NOTES.md`](docs/IMPLEMENTATION_NOTES.md)
- Build prompts: [`PROMPTS_PIPA.md`](PROMPTS_PIPA.md)

Unverified data renders as **“A confirmar / To be confirmed”** — never invented. See the notes for `verified / needs_review / placeholder` per brand.
