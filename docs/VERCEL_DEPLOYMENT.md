# Vercel Deployment Guide

This document outlines how to safely deploy the Pipa Group multi-brand platform to Vercel, ensuring all environment variables, security measures, and third-party integrations (Supabase, n8n) are correctly configured.

## 1. Import Project to Vercel
1. Log into your Vercel account and click **Add New... > Project**.
2. Import the Git repository containing this project.
3. Vercel should automatically detect **Next.js** as the Framework Preset.

## 2. Build Configuration
Confirm the following settings in Vercel:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: Next.js default (`.next`)
- **Node.js Version**: Node 20.x (Recommended)

## 3. Environment Variables for Vercel
You must configure these variables in Vercel under **Settings > Environment Variables**. 
*Do not commit `.env.local` to the repository.*

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (e.g., `https://xyz.supabase.co`). Required for client-side and server-side Supabase client. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase public anon key. Required for client-side and server-side Supabase client. |
| `SUPABASE_SERVICE_ROLE_KEY` | **SECRET!** Your Supabase service_role key. Used only server-side (e.g., `/api/inquiries`) to bypass RLS. |
| `N8N_WEBHOOK_URL` | *(Optional)* The exact URL of your n8n Production Webhook to receive lead data. |
| `N8N_WEBHOOK_SECRET` | *(Optional)* **SECRET!** HMAC-SHA256 secret shared with n8n to sign webhook payloads. |
| `NEXT_PUBLIC_SITE_URL` | The public URL of the website. E.g., `https://pipa-group.com`. Used for absolute URLs in sitemaps, robots, and email/webhook payloads. Set different values for Preview and Production environments if necessary. |
| `WHATSAPP_DEFAULT` | The fallback WhatsApp number for the platform if a brand doesn't have one configured. |
| `STAFF_DASHBOARD_ENABLED` | Set to `true` to enable the `/staff` dashboard. Highly recommended to keep `false` in production until needed. |
| `STAFF_DASHBOARD_PASSWORD` | **SECRET!** The basic auth password to protect the `/staff` route. Username is `staff`. |

## 4. Supabase Production Setup
If you are moving to a new Supabase project for production:
1. Run the `supabase/schema.sql` to initialize all tables, RLS policies, and enums.
2. Run the `supabase/seed.sql` to insert the quick paths, brand definitions, and real asset placeholders.
3. Be careful not to pollute production with test leads.
4. *To delete test leads in production, use the Supabase dashboard to remove rows from `inquiries` (which cascades to `inquiry_events` and `staff_notes`).*

## 5. Pre-Deploy Checklist
Before hitting "Deploy" or merging to main, confirm:
- [ ] `npm run typecheck` passes cleanly.
- [ ] `npm run lint` passes cleanly.
- [ ] `npm run build` passes cleanly (no page generation errors).
- [ ] Supabase environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) are correctly added to Vercel.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is completely hidden from the client-side.
- [ ] `NEXT_PUBLIC_SITE_URL` is configured to the production or preview Vercel domain.
- [ ] `STAFF_DASHBOARD_ENABLED` is set appropriately, and if true, a strong `STAFF_DASHBOARD_PASSWORD` is configured.
- [ ] `/staff` is not present in the sitemap and `robots.txt` explicitly disallows it.
- [ ] All required external image hosts are whitelisted in `next.config.mjs` (`images.unsplash.com`, `lh3.googleusercontent.com`, `cf.bstatic.com`, `casa-palmeira.hotels-in-pipa.com`, `res.cloudinary.com`).
- [ ] Mobile navigation and layouts are responsive and functioning.
- [ ] No `.env` secrets or PII are committed to the repository.

## 6. How to Test Post-Deployment
### Preview Deployments
Vercel will generate a unique URL for every Pull Request. Use this to verify UI changes. Ensure that the preview environment variables map to a staging/development Supabase project if you want to avoid injecting test data into the production database.

### Production Validations
Once deployed to your production domain:
1. **Submit a Lead**: Fill out the form in `/pt-BR/dine` and submit it.
2. **Verify /api/inquiries**: Check the Vercel Function Logs for `/api/inquiries` to ensure it successfully returned a `200 OK` and the lead was persisted.
3. **Verify Supabase**: Check the Supabase `inquiries` table to confirm the new lead exists.
4. **Verify Staff Dashboard (if enabled)**: Visit `https://your-domain.com/pt-BR/staff`. Ensure it prompts for Basic Auth and correctly loads the leads after login.
5. **Verify Webhooks (if enabled)**: Ensure the `inquiry.created` event reached your n8n webhook and the `x-pipa-signature` header validated successfully.

## 7. Rollback Procedures
If a deployment causes critical issues:
1. Go to your Vercel Project Dashboard.
2. Navigate to the **Deployments** tab.
3. Find the previous stable deployment.
4. Click the three dots (Options) and select **Instant Rollback** or **Promote to Production**.

## 8. Pending Risks & Future Actions
- **Third-Party Images**: Hero and Gallery images rely on external URLs (Google, Booking, Cloudinary). If the source deletes them or the URL expires, the images will break. *Action*: Move assets to a Supabase Storage bucket in the future.
- **Staff Authentication**: The current Basic Auth protection on `/staff` is meant as a temporary shield. *Action*: Migrate to Supabase Auth (`TODO_AUTH`) before expanding staff access.
- **n8n Webhook Retries**: Vercel Serverless Functions have strict timeouts. If n8n takes too long to respond, the function might timeout even though the payload was sent. The `api/inquiries` route has an internal `fetch` without `await` block for the webhook, but ensure your n8n instance processes webhooks quickly.
