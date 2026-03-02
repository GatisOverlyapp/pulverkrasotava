# Pulverkrasotava.lv

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS 4 with custom CSS variables
- **CMS:** Keystatic
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel

## Project Structure
```
app/                    # Next.js App Router pages
  pakalpojumi/          # Service pages (6 services)
  informacija/          # Info articles (static data)
  jaunumi/              # Blog/news (static data, will use Keystatic)
  kontakti/             # Contact page with form
  par-mums/             # About page
  cenas/                # Pricing page
  privatums/            # Privacy policy
  lietosanas-noteikumi/ # Terms of use
  atruna/               # Disclaimer
  cookie-policy/        # Cookie policy
components/
  home/                 # Homepage sections (Hero, ServicesGrid, WhyChooseUs, Partners, ReviewsSlider)
  content/              # Content components (PageHero, TextBlock, TextWithImage, FaqAccordion, BlogGrid, BlogPost)
  layout/               # Layout components (Header, Footer, MobileMenu, SocialSidebar)
  forms/                # ContactForm, QuickQuestionForm
  GoogleAnalytics.tsx   # GA4 tracking
  FacebookPixel.tsx     # FB Pixel tracking
  StructuredData.tsx    # LocalBusiness + WebSite JSON-LD
  BreadcrumbSchema.tsx  # BreadcrumbList JSON-LD
  FaqSchema.tsx         # FAQPage JSON-LD
  ServiceSchema.tsx     # Service JSON-LD
content/
  settings.json         # Site settings (phone, email, address, social URLs)
public/
  images/               # Static images
  fonts/                # Sora font files (woff)
```

## Design System
- **Dark theme:** `--pulver-dark: #242734`, `--pulver-grey: #323544`
- **Accent:** `--pulver-gold: #ffaf22`
- **Text:** `--pulver-text: #7a7c87`, `--pulver-light: #e8e8ed`, `--pulver-white: #faf9f9`
- **Font:** Sora (Regular, Medium, Bold, ExtraBold)
- **Components:** `.btn`, `.btn-primary`, `.btn-secondary`, `.container`, `.section-padding`

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Business Info
- **Company:** SIA "AFREK" (Reg. Nr.: LV44103123210)
- **Brand:** Pulverkrāsotava
- **Address:** "Vecvagari", Druvienas pag., Gulbenes nov., LV-4426, Latvija
- **Phone:** +371 26 102 841
- **Email:** info@pulverkrasotava.lv
- **Region:** Vidzeme / Gulbene (only powder coating service in the region)
- **Hours:** Mon-Fri 8:00-17:00

## SEO Patterns
- Root layout has `title.template: "%s | Pulverkrāsotava"` — page titles should NOT include `| Pulverkrāsotava`
- Every page exports `metadata` with `alternates.canonical` pointing to its own path
- Service pages include BreadcrumbSchema, ServiceSchema, and FaqSchema components
- All non-homepage pages include BreadcrumbSchema
- Image alt texts should be descriptive, never empty
- Structured data: LocalBusiness + WebSite in root layout, per-page Service/FAQ/Breadcrumb schemas

## Conventions
- All content is in Latvian (lv)
- Server components by default; `'use client'` only when needed (forms, accordions, tracking)
- Import path alias: `@/` maps to project root
- Component exports use barrel files (`index.ts`) in each component directory
