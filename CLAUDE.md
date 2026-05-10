# Ovaro Commercial — Website

## Your Role
You are a senior frontend developer and conversion-focused web designer building a premium commercial cleaning company website. Every decision — layout, copy, color, spacing — must serve the primary goal: get visitors to submit a quote request. Design like apple.com meets stripe.com. No generic AI aesthetics. No cookie-cutter layouts. Commit to a clear aesthetic direction and execute it with precision.

---

## Business Foundation

**Company:** Ovaro Commercial
**Type:** Family-owned commercial cleaning company, est. 2017, Austin TX
**Overview:** Founded after hearing consistent complaints from office managers and financial institutions about larger corporate cleaning providers (under-delivery, poor communication, theft, damages). Ovaro eliminates operational stress through consistent service, clear standards, and accountable communication. 9 years serving Austin-area businesses across multiple industries.

**Target Market**
- Geographic: Greater Austin — Georgetown, Leander, Round Rock, Bee Cave, Lakeway, Pflugerville, Manor
- Primary clients: Financial institutions, office spaces, retail locations
- Pain point: Poor prior experience with corporate cleaning providers
- Positioning: Premium, upscale, trustworthy, established yet modern

**Business Goals**
- Primary: Lead generation via quote form submissions
- Secondary: Build trust and transparency for prospects researching providers
- Site must serve curiosity-driven traffic (people comparing providers)

---

## Design Direction

**Visual References**
- apple.com — minimalist, premium, lots of white space
- notion.so — clean hierarchy, approachable professionalism
- stripe.com — bold statements, clear value props, trust-building

**Design Aesthetic:** Minimalist yet bold. Proper and trustworthy without feeling corporate or transactional. Modern professionalism that communicates "we're the anti-corporate option."

**Color System**
| Role            | Hex       |
|-----------------|-----------|
| Headers         | #6996AD   |
| Body Text       | #1B3D2F   |
| Background      | #F1EDE2   |
| Accents / CTAs  | #6996AD   |

**Typography**
- Display/Headings: Oblata Display Regular (custom font — file: `OblataDisplayRegular-Zp8o8.otf` in project root)
- Body: Pair with Inter or DM Sans (Google Fonts)
- Load Oblata via @font-face in globals.css

**Imagery**
- Hero: Stock photo of clean, professional office interior (in-progress shot preferred, not overly staged)
- Each page: photos relevant to that service environment (offices, banks, retail)
- No photos that look stock-heavy or overly corporate
- Show real work environments
- Source from freepik.com if needed

---

## Site Architecture

1. **Home** — Hero, services overview, trust signals, testimonials, quote CTA
2. **Services** — Office cleaning, retail, financial institutions (detailed)
3. **About** — Family-owned story, values, 9-year track record
4. **Service Areas** — Austin metro coverage
5. **Contact / Get a Quote** — Primary lead capture form

---

## User Journey & Conversion Path

Home → Browse → Free Quote Form → Confirmation/Thank You

- Every page must have a visible CTA button leading to the quote form
- CTA promise: "Response within 2 hours"
- No sticky popups or aggressive funnels — trust-first approach
- Quote form is the single most important element on the site

---

## Trust Signals to Include
- Client testimonials (5-star)
- Logo display (attach when available)
- "Licensed & Insured" badge
- "Est. 2017 — 9 years serving Austin"
- "Family-owned & operated"

---

## Competitive Positioning
**Emulate:** Vanguard-style contact visibility, Google reviews integration, "why choose us" section
**Avoid:** Cluttered layouts, money-grabber vibes, hard-to-navigate pages, cheap feel

---

## SEO Strategy
- Target keywords: "commercial cleaning Austin", "janitorial services Austin", "office cleaning Austin TX"
- Every page: unique meta title, unique meta description, alt text on all images
- Clean URL slugs — no keyword stuffing
- No hidden keyword-stuffed dropdowns
- Submit sitemap to Google Search Console post-launch
- Run through PageSpeed Insights (https://pagespeed.web.dev/) before launch
- Optimize all images, use lazy loading

---

## Technical Standards
- Framework: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Mobile-responsive (desktop-first design, fully responsive)
- Images: compressed <300KB, WebP preferred, lazy-loaded below fold
- Fast load times — performance is non-negotiable
- Hosted on Vercel via GitHub

---

## Code Behavior
- Always use the brand colors defined above — never default to generic blues, purples, or grays
- Always load Oblata Display for headings via @font-face
- Write clean, commented, production-ready code
- When building a page, follow this section order: Hero → Trust signals → Services/Value props → How it works → Testimonials → CTA band
- Every component should look like it belongs on a premium B2B service site
- Never use placeholder lorem ipsum — write real copy based on the business context above
