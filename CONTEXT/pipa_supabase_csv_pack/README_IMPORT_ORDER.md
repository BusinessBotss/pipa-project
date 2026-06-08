# Pipa Group — Supabase CSV Pack

Created: 2026-06-08

## Import order

1. `quick_paths.csv`
2. `brands.csv`
3. `brand_contacts.csv`
4. `brand_events.csv`
5. `journey_fields.csv`
6. `ui_components.csv`
7. `leads_template.csv` only as a template. Delete the example row before production.

## Status policy

Use these statuses consistently:

- `verified`: safe to publish.
- `needs_review`: sourced in research, but should be confirmed before treating as operational truth.
- `placeholder`: structural placeholder only; do not publish as real data.

## Important notes

- Do not use `aggregateRating` automatically.
- Do not invent hours, prices, ratings, capacities, or contacts.
- Store personal data only in leads/enquiries tables, never in localStorage.
- WhatsApp links should be generated safely with `encodeURIComponent`.
- Casa Palmeira, Recanto de Ibiza and PIPA Ice Supply are included as structural placeholders.
- For Umi, Makai, Nami and TĀO, the CSV uses the research report but marks operational details as `needs_review` where public listings vary.

## Suggested Supabase table names

- `quick_paths`
- `brands`
- `brand_contacts`
- `brand_events`
- `journey_fields`
- `ui_components`
- `leads`

## Field design

The CSVs use flat columns for Supabase import. For production, you may normalize further or convert fields like facilities/best_for into join tables.

