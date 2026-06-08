# Pipa Group Landing Architecture and Booking Study

## Table of contents

- What the brief actually describes
- How the group should be positioned
- Recommended landing page structure
- Booking and enquiry journeys
- Technical and operational architecture
- SEO, trust, and discoverability
- Developer handoff and build priorities

## What the brief actually describes

The current working brief points to something much broader than a standard landing page. Based on the handwritten planning sketch you uploaded, the in-chat project rules, and the business material shared afterwards, Pipa is shaping into a **multi-brand hospitality presentation and conversion system** rather than a simple brochure site. It has three layers at once: a public-facing premium landing, a booking and enquiry layer, and an operations layer for staff.

The sketch can be translated into a cleaner product structure like this:

| Layer | What it includes | What it means in practice |
|---|---|---|
| Public experience | Landing, booking system, WhatsApp, call, direct booking | A visitor should understand the group quickly and be able to start a booking or enquiry without friction |
| Commercial content | Menus, options, flipbooks, weekly, monthly, yearly offers, pre-book flow, QR system, private events | The site needs living commercial content, not only static brand copy |
| Growth layer | Social media support, pinned posts, bio optimisation, chat automation | The site should act as the destination behind Instagram campaigns and messaging traffic |
| Data layer | Supabase, n8n, push notifications, alerts | Every enquiry, booking and content update should flow into one operational system |
| Staff layer | Dashboard, analytics, bookings, client management, assistant with human handoff, templates | The platform should support the team behind the brands, not just the guest in front of the screen |

That interpretation also matches the materials you shared about the businesses themselves. The portfolio is not homogeneous. Some brands are accommodation-led, some are dining-led, some are event-led, and one appears to be an operational B2B service. That means the landing cannot behave like a single-venue website. It has to behave like a **curated collection with different entry points**.

![Representative visual references from the materials you shared](sandbox:/mnt/data/pipa_group_moodboard.jpg)

*Representative references from the shared materials: intimate stays, tropical accommodation, food-led editorial imagery, and pool-club leisure.*

## How the group should be positioned

Tibau do Sul is a small municipality, with an estimated population of 18,080 in 2025, yet the municipal site is actively promoting destination-scale programmes such as São João da Pipa 2026 and Carnaval da Pipa 2026. That combination of local scale and event-driven visitor demand is important: the site should feel calm and premium, but it also has to convert during seasonal spikes, event weekends and social-led traffic bursts. citeturn33view0turn36view0

From the business materials you shared, the cleanest way to organise the portfolio is this:

| Audience path | Brands from your materials | Primary user intent | Best CTA |
|---|---|---|---|
| Stay | Casa Palmeira, Recanto de Ibiza | Check dates, compare stay styles, enquire fast | **Book Your Stay** |
| Eat and Drink | Umi Fun Kitchen, Nami Madeiro, TAO Pipa | View concept, menu, opening context, reserve | **Reserve a Table** |
| Pool and Leisure | Makai Pool Club | Plan a day experience, reserve, enquire about events | **Explore Makai** |
| Celebrate | Makai, Umi, possibly selected stay venues | Private events, special occasions, group bookings | **Plan a Private Event** |
| Partners | PIPA Ice Supply | Request quote, delivery, business information | **Request Supply Information** |

The strongest positioning move is to present Pipa as a **curated group of places and services in and around Pipa**, not as a generic directory. The site should feel edited. It should communicate that every place belongs because it contributes to a certain lifestyle in the destination: where to stay, where to eat, where to gather, where to celebrate, and who supports the operation behind the scenes.

That also means the home page should not flatten every brand into identical cards with equal weight. The accommodation brands are private and restorative. The dining brands are sensory and social. Makai is more experiential and event-led. PIPA Ice Supply is operational and should not compete with guest-facing leisure brands in the hero area. It belongs in a quieter **For Partners** section or footer pathway, not in the opening emotional narrative.

A clean positioning line for the overall landing would be:

> **A refined way to discover, book, and enquire across the Pipa group.**

And the internal portfolio structure should read as four clear themes:

- **Stay well**
- **Eat beautifully**
- **Celebrate with intention**
- **Work with the group**

## Recommended landing page structure

Google’s page experience guidance is clear that strong pages are mobile-friendly, secure, easy to scan, free from intrusive overlays, and visually clear about what the main content is. That maps perfectly to your own project rule of clarity before complexity. The homepage should therefore be structured as a calm sequence of clear decisions, not as a long wall of mixed content. citeturn30view0turn30view1

### Section order for the home page

| Section | Purpose | What it should contain | Primary action |
|---|---|---|---|
| Hero | Explain the group in one view | One strong editorial image, short headline, one-line explanation, two CTAs | **Explore the Group** and **Book Now** |
| Quick booking switcher | Reduce friction immediately | Segment tabs such as Stay, Dining, Pool Club, Events, Partners | Contextual CTA changes by selection |
| Featured places | Introduce the collection | Large premium cards for Casa Palmeira, Recanto de Ibiza, Umi, Makai, Nami, TAO | Brand-specific CTA |
| Staying in Pipa | Help accommodation users compare quickly | Two stay cards, short differentiators, date entry or enquiry entry | **Book Casa Palmeira** / **Book Recanto de Ibiza** |
| Dining and beach moments | Present restaurants without overcrowding | Three or four venue cards, cuisine or atmosphere labels, menu link, reserve link | **View Menu** / **Reserve a Table** |
| Private events | Capture high-value enquiries | One calm section for celebrations, groups, private dining, special occasions | **Plan an Event** |
| Menus and seasonal offers | Translate the sketch into a real feature | Weekly highlights, monthly agenda, annual event deck, downloadable flipbooks plus HTML summaries | **View Offers** |
| Guest confidence | Build trust | Review excerpts, location cues, direct contact options, response-time promise | **Request Information** |
| Final CTA | Close decisively | One strong contact block with WhatsApp, call, and enquiry form access | **Contact Pipa** |
| Footer | Navigation and trust | Brand links, legal links, partner path, social links, contact details | Secondary navigation |

### The most important homepage decision

The single biggest UX decision is this: **the home page should help users choose a path before it asks them to consume detail**.

The opening area should therefore offer a small decision layer immediately below the hero. A segmented switcher works well:

- **Stay**
- **Dine**
- **Pool Club**
- **Events**
- **Partners**

When the user taps one of these, the page can either scroll to that section or swap the content of a featured booking strip without taking them away from the page. This preserves elegance while removing friction.

### Suggested hero copy

**Headline**  
**Discover Pipa, arranged with intention**

**Supporting line**  
Boutique stays, dining destinations, event enquiries, and direct contact across the Pipa group.

**Primary CTA**  
**Explore the Group**

**Secondary CTA**  
**Start a Booking**

### Suggested microcopy for brand cards

These are not final brand claims; they are landing-ready direction based on the materials you shared:

| Brand | Card line |
|---|---|
| Casa Palmeira | Central, intimate, and quietly designed for short stays in Pipa |
| Recanto de Ibiza | A tropical retreat with a calmer, more secluded rhythm |
| Umi Fun Kitchen | Food, atmosphere, and a more editorial dining moment |
| Makai Pool Club | Poolside leisure and event-led energy near the coast |
| Nami Madeiro | Beach-facing dining with a relaxed Madeiro mood |
| TAO Pipa | A lighter café rhythm for breakfast, brunch, and pauses |
| PIPA Ice Supply | Reliable production and delivery support for operators |

### Visual direction for the landing

The shared images already point to the right tone. The common visual language is not glossy luxury. It is **warm, tactile, tropical, wood-led, lightly rustic, and intentionally styled**. The interface should amplify that with restraint.

The best image strategy is:

- Hero image: one calm, wide editorial scene that suggests destination and atmosphere rather than showing six logos.
- Brand cards: one strong image each, not carousels inside cards.
- Stays: architecture, pool, terrace, bathroom detail, natural materials.
- Dining: close, warm, appetite-led editorial shots with visible setting.
- Events: tables, night lighting, private group ambience, not nightclub poster energy.
- Partners: restrained utilitarian imagery, kept secondary.

Avoid visual clutter, over-layered gradients, icon overload, or trying to force every venue into identical branding. The premium feel should come from **composition, spacing, typography, and image discipline**.

## Booking and enquiry journeys

The booking experience should be designed around a very simple rule:

**A user should be able to start the right action in three interactions or fewer.**

That does not mean every booking needs a full real-time engine on day one. It means the path must be clear.

### Stay journey

For accommodation, the fastest path is:

**Home hero or stay section → choose property → enter dates and guests or open direct enquiry**

If direct booking integration exists, expose it. If it does not, do not pretend it does. Use a high-trust enquiry flow instead, with fields for dates, guests and notes, then route into WhatsApp, email, or admin dashboard.

The accommodation pathway should ask for only the information needed to move the booking forward:

- name
- dates
- number of guests
- child or rooms if relevant
- one optional notes field

### Dining journey

For restaurants and cafés, the visitor usually wants one of four things:

- menu
- atmosphere
- hours and location
- reservation or contact

So the dining card CTA structure should be simple:

- **View Menu**
- **Reserve a Table**

No long reservation form is needed at first unless the venue already operates formal seating management. A fast reserve flow can use a short enquiry modal or a pre-filled WhatsApp message.

### Event journey

Private events are likely the highest-value lead type in the entire system. They deserve their own section and their own routing logic. The form should ask:

- event type
- preferred date
- number of guests
- preferred venue or open to recommendation
- contact details

This is also where the handwritten sketch’s **pre-book interface** becomes useful. Instead of forcing the user into a full quote process, present three curated types first:

- private dining
- celebration or group day
- custom event enquiry

### Partner journey

PIPA Ice Supply should use a completely different conversion pattern. That user is not browsing for mood; they are validating reliability. The partner journey should therefore lead to:

- service area
- order size or enquiry type
- delivery timing
- business name and contact

It can live as a quieter section near the end of the landing or in a secondary top-nav item such as **For Partners**.

### WhatsApp and the assistant layer

The planning sketch clearly expects a WhatsApp-first conversion path. That makes sense for hospitality, but the bot strategy needs to stay realistic. Academic research on workflow-based scheduling systems has shown that the strongest model is not full automation for everything; it is structured automation for common cases with human handoff for exceptions. In the Calendar.help study, routine scenarios were automated, while unusual cases fell back to trained humans. citeturn26view0

That is even more relevant now because recent reporting indicates Meta is expanding its own WhatsApp Business Agent offer while policy changes have already pushed general-purpose third-party AI chatbots off WhatsApp Business in early 2026. For Pipa, the lower-risk path is a **narrow assistant** that answers FAQs, routes people to the right venue, and hands conversations to staff quickly, rather than a broad free-form chatbot trying to impersonate a reservations team. citeturn17news0turn17news1turn17news2

A good default WhatsApp message template for the site is:

```text
Hi Pipa,

I would like more information about [brand / service].

Name:
Dates:
Number of guests:
Preferred time:
Notes:

Source: [Page Name]
```

## Technical and operational architecture

The technical approach in your project rules is sound, and the handwritten sketch supports it. The most coherent implementation is a **Next.js front end with a Supabase data layer and n8n automation layer**.

### Why this stack fits

Supabase is a strong match because each project has a full PostgreSQL database rather than a thin abstraction, and Supabase’s own documentation explicitly puts Row Level Security at the centre of making client-side querying safe. Its database layer also supports webhooks, roles and permissions, daily backups, and can power Auth, Storage, Realtime and Edge Functions from the same foundation. citeturn25view2turn25view1turn25view3

n8n is a good fit for the workflow part of the sketch: routing enquiries, triggering staff alerts, sending follow-ups, recording booking state changes, and building daily summaries. But its own hosting documentation is clear that self-hosting is best suited to expert users because mistakes can lead to downtime, security problems or data loss. If the team is not comfortable managing Docker, SSL, scaling and environment configuration, managed hosting is the safer launch path. n8n also documents role-based access control, projects, custom roles, SSO and 2FA, which becomes useful once the staff dashboard expands. citeturn24view4turn24view5

Next.js remains the right front-end choice because the built-in `Image` component helps prevent layout shift, supports remote images, and requires explicit remote URL patterns so image access can be tightly controlled. That matters for a premium site with heavy visual content. citeturn24view3

### Recommended system layout

| Layer | Recommended implementation | Notes |
|---|---|---|
| Front end | Next.js App Router, TypeScript, Tailwind CSS | Use server components by default and keep client logic light |
| Data | Supabase Postgres | Brands, offers, menus, enquiries, bookings, events, media metadata |
| Automation | n8n | Lead routing, notifications, reminders, admin digests, QR events |
| Media | Cloudinary or owned remote store | Keep temporary third-party references out of final production where possible |
| Messaging | WhatsApp deep links at launch | Add assistant only for routing, FAQs and handoff |
| Admin | Protected dashboard | Analytics, client management, booking pipeline, content status |
| Search layer | JSON-LD per brand page | Local business, restaurant, event, organisation where relevant |

### Core data entities

A clean first-pass data model should include:

- `brands`
- `brand_locations`
- `brand_categories`
- `bookable_items`
- `offers`
- `menus`
- `events`
- `reviews_excerpt`
- `lead_sources`
- `enquiries`
- `bookings`
- `qr_destinations`
- `staff_users`
- `notification_rules`

This model supports both the public site and the operations layer in the sketch.

### Forms, accessibility and mobile behaviour

W3C’s guidance is straightforward: all form controls should be labelled, explicit `<label>` association is preferred, and visible labels remain important on mobile. W3C also notes that labels above fields often work better for mobile users by reducing horizontal scrolling and preserving clarity. For Pipa, that means no placeholder-only forms and no “minimalist” unlabeled fields. citeturn23view0

That gives you a very practical rule for the build:

- use visible labels
- keep forms short
- place labels above fields on mobile
- do not hide the meaning of a control in placeholder text alone

### What the staff dashboard should include first

The staff side should begin with what the sketch already prioritises:

| Admin area | First version should do |
|---|---|
| Dashboard | Total enquiries, bookings, response times, source breakdown, brand performance |
| Bookings | Unified pipeline across all consumer-facing brands |
| Client management | Assign venues, edit CTAs, update links, update contact details |
| Assistant console | Saved replies, template routing, handoff logs, FAQ links |
| Notifications | New lead alerts, missed-response alerts, daily summary alerts |

The right launch mindset is not “build the whole operating system at once”. It is “build a calm public conversion layer first, but make sure the data shape already supports the operations layer you know you want next”.

## SEO, trust, and discoverability

The SEO layer should support discoverability without distorting the design.

### Local business structure

Google’s Local Business documentation recommends defining each location with the most specific `LocalBusiness` subtype possible. That means the dining venues should not all be marked up generically if more specific types apply. Each relevant page should include, at minimum, the business name and address, and food venues should publish a fully qualified menu URL and opening hours where available. Google also notes that local business markup should be placed on pages that actually contain information about the business. citeturn24view0turn24view1turn31view0turn31view3

That leads to a practical implementation model:

- group landing page: `Organization` or high-level group schema
- individual venue pages: most specific local subtype
- food venues: include `menu`, `openingHoursSpecification`, location data
- stay venues: use the most suitable lodging-oriented business type
- events: add `Event` schema only when there is a real dated event page

### What not to over-engineer for SEO

Google’s documentation says restaurant host carousels are currently limited to a small set of providers. In other words, do not spend product energy designing the restaurant section around a hoped-for Google carousel effect. Build the restaurant listings for users first. citeturn31view0

Google also states that `aggregateRating` in local business structured data is only recommended for sites that capture reviews about other local businesses. That makes it unwise to auto-inject third-party platform ratings into self-owned venue pages without a careful compliance review. The safer trust pattern is: use short review excerpts in the visible page design, cite their source clearly if you have permission, and avoid risky structured-data shortcuts. citeturn31view0

### Menus, flipbooks and QR pages

The sketch’s flipbook idea is useful, but it should not become the only source of truth. The right hierarchy is:

- HTML summary first
- flipbook second
- downloadable PDF only if needed

That is the premium answer as well as the functional one. Guests can scan quickly, search engines can understand the page, and QR destinations remain fast and mobile-friendly. It also aligns with Google’s expectation that menu content can be represented by a real menu URL. citeturn31view3

### FAQ pages

Keep the FAQ page because users need it, not because you expect rich-result visibility. Google’s documentation says FAQ rich results had already been limited to authoritative government and health sites, and as of May 2026 they are being removed from Google Search entirely, with further support being dropped through mid-2026. So for Pipa, the FAQ page should exist strictly as a trust and objection-handling asset. citeturn30view2turn30view3

### Performance and trust signals

Google’s page experience documentation says good pages show strong Core Web Vitals, secure delivery, mobile usability, non-intrusive overlays, and clear distinction between main content and everything else. For a booking-led hospitality site, that translates directly into product decisions:

- no giant pop-up before the visitor sees the offer
- no confusing duplicated CTAs
- clear separation between editorial imagery and booking actions
- strong mobile readability
- HTTPS everywhere
- fast image rendering and stable layouts citeturn30view0turn30view1

## Developer handoff and build priorities

### Recommended route structure

This route structure stays faithful to your Pipa documentation while adapting it for a grouped hospitality portfolio:

| Route | Purpose |
|---|---|
| `/` | Main landing page for the whole Pipa group |
| `/about` | Group story, philosophy, curation logic |
| `/experiences` | High-level grouped offers: stay, dine, events, partners |
| `/brands/[slug]` | Individual venue page |
| `/gallery` | Visual editorial page |
| `/contact` | Main enquiry page |
| `/faq` | User-facing practical questions |
| `/privacy` | Privacy page |
| `/terms` | Terms and legal page |

If you want even tighter conversion, introduce one additional route:

| Route | Purpose |
|---|---|
| `/book/[slug]` | Dedicated booking or enquiry page per brand |

### Recommended component map

| File or component | Responsibility |
|---|---|
| `app/page.tsx` | Landing assembly |
| `components/navbar.tsx` | Minimal navigation with sticky behaviour |
| `components/hero.tsx` | Hero copy and dual CTA |
| `components/quick-path-switcher.tsx` | Stay, Dine, Pool Club, Events, Partners |
| `components/brand-card.tsx` | Reusable card across all brand grids |
| `components/featured-collection.tsx` | Curated homepage grid |
| `components/booking-strip.tsx` | Fast booking entry layer |
| `components/menu-flipbook-teaser.tsx` | Menus and curated offer decks |
| `components/social-proof.tsx` | Review excerpts and confidence points |
| `components/contact-cta.tsx` | Final conversion block |
| `components/inquiry-modal.tsx` | Short adaptive enquiry flow |
| `components/whatsapp-button.tsx` | Floating or sticky contact shortcut |
| `lib/whatsapp.ts` | Prefilled message helpers |
| `lib/schema.ts` | JSON-LD builders |
| `lib/supabase/server.ts` | Server-side Supabase client |
| `app/api/inquiries/route.ts` | Lead intake endpoint |

### Build order

The cleanest implementation order is:

**Phase one**  
Build the landing page, brand cards, core navigation, and individual brand pages.

**Phase two**  
Add enquiry handling, WhatsApp deep links, call CTAs, short forms, and Supabase lead storage.

**Phase three**  
Add n8n routing, alerts, staff dashboard views, and client management.

**Phase four**  
Add QR destinations, seasonal offer decks, event pathways, and social campaign landing variants.

### Acceptance criteria

The first release is ready when all of the following are true:

- A visitor can understand the overall offer above the fold.
- A visitor can choose the right audience path from the home page immediately.
- A visitor can reach a booking or enquiry action in no more than three interactions.
- Each brand card presents one line of positioning, one clear CTA, and one supporting secondary action at most.
- All forms use visible labels and remain short enough to complete comfortably on mobile. citeturn23view0
- Remote imagery is configured safely and rendered without avoidable layout shift. citeturn24view3
- Business pages emit the correct structured data for their type without overclaiming reviews or rich results. citeturn24view1turn31view0turn31view3
- The admin side is protected by role-aware access controls and only exposes the data each user should manage. citeturn24view5turn25view1

The core strategic conclusion is simple: **Pipa should be built as a premium multi-brand conversion layer, not a generic directory and not a bloated all-in-one portal**. The landing must feel editorial and calm on the surface, while quietly connecting to a serious booking, routing and operations system underneath. That is the clearest way to honour the brand rules you set and the product logic already visible in the sketch.