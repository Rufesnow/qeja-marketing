# Qeja marketing site (www.qe-ja.com)

## Stack
Next.js 14 (pages router), TypeScript, Tailwind 3, shadcn/ui components (Radix), Geist font, lucide-react icons.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (also type-checks); must pass before any commit
- `npm start -- -p 3123` — serve the production build locally
- No automated test suite yet. Verify visually at 1440 / 768 / 402 px, light and dark (follows device setting).

## Map
- `pages/index.tsx` — the homepage (meta tags, section order)
- `src/components/` — page sections: SiteNav, Hero, WhyQeja (+ PortfolioDashboard), Features, Pricing, FaqSignUp (+ SignUpForm), SiteFooter
- `src/components/ui/` — shadcn/ui primitives (button, card, tabs, accordion, item, badge, input, label, separator, typography)
- `src/lib/pricing-data.ts` — plans and prices (monthly + annual-per-month)
- `src/styles/globals.css` — theme colour tokens (light + dark)
- `pages/api/leads.ts` — sign-up endpoint → Google Sheets
- `pages/api/docs/[filename].ts` + `public/docs/` — legal PDFs

## Design system
- Source of truth is Figma: "Qeja Website" (`kkXPTrGY2jtj3dHwCCciol`), built on the "Qeja UI Kit" library (shadcn kit copy). Desktop 1440 is the main component; tablet/mobile/dark frames are instances.
- Implement as drawn: copy, components and tokens come from Figma. Do not invent colours, components or copy.
- Colours live only in `globals.css` as kit tokens (primary = burnt teal #1E7A81 light / cyan #02C5DE dark). No hard-coded hex in components.
- Breakpoints: below `lg` (1024) = tablet/mobile layout (carousels, plan switcher); below `md` (768) the dashboard and nav links hide.

## Protected — ask the owner first
- Pushing or merging to `main`: it deploys straight to production (GitHub Action → Cloud Run). Work on a branch.
- `pages/api/leads.ts`, `src/lib/google-sheets.ts`: sign-up data (personal data) and where it goes.
- Legal PDFs in `public/docs/`.
- Claims about data handling must match `public/docs/Qeja-Data-Protection-Policy.pdf` (data is NOT stored only in Kenya). No free trial is offered (30-day refund instead).
