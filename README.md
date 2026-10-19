# Sarvam Sankalp Foundation — Homepage

Next.js (App Router) + TypeScript + Tailwind CSS v4 homepage for **Sarvam Sankalp Foundation (SSF)**. Its layout and visual design follow the reference NGO homepage.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Configuration

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_DONATION_URL` | Destination for every "Donate" button | `#donate` (on-page CTA) |
| `NEXT_PUBLIC_PARTNER_URL` | Destination for "Partner With Us" | `#contact` |

## Where to edit content

- `src/config/site.ts` — name, contact details, socials, statutory details (**placeholders**).
- `src/data/content.ts` — navigation, hero slides, values, impact targets, programs, map regions, stories, gallery, partner categories, leadership, certificates and footer links.
- `src/data/indiaMap.ts` — generated India SVG map from Natural Earth (public domain).
- `public/images/` + `src/data/imageCredits.json` — freely licensed Wikimedia Commons photos and their attributions.

## Placeholders to replace before launch

- Phone, email, address and social links.
- CIN / 12A / 80G / CSR-1 / NGO Darpan numbers and certificate scans. Do not claim tax benefits until approval is granted.
- Impact figures. These are currently labelled as *targets*.
- Leadership names, photos and quotes.
- Beneficiary stories. These are currently labelled *illustrative*.
- Map footprint (HQ, pilot and planned states).
- Partner logos. The page currently lists partner *categories* only.
- Newsletter subscription. The form validates input only; connect it to a provider.

## Structure

```
src/
  app/            layout.tsx (Roboto font, metadata), page.tsx (section composition), globals.css (design tokens)
  components/     Header, Footer, Logo
  components/sections/  Hero, Philosophy, Impact, Programs, Reach, Stories, Gallery, Partners, Leadership, Accreditations, JoinCTA
  components/ui/  Reveal, CountUp, SectionHeading, DonateLink, SocialIcon
  config/ data/
```
