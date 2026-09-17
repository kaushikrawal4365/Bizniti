# BizNiti 2026 V2

Ground-up Next.js rebuild concept for BizNiti.

## Stack
- Next.js 16+
- React 19+
- TypeScript
- Tailwind CSS 4
- Motion for React
- Zod
- Supabase Postgres
- Resend
- Lucide

## Run locally

```bash
npm install
npm run dev
```

## Environment
Copy `.env.example` to `.env.local` and set the keys for Supabase/Resend when backend functionality is enabled.

## Notes
- The visual system intentionally uses warm paper, ink, BizNiti blue, lime, peach and powder-blue accents.
- The homepage includes a pinned horizontal narrative, service index, marquees, glass panels and a multi-step brief.
- Existing BizNiti content has been used as the factual content reference; the old WordPress/Astra/Elementor implementation is not reused.
- Some integrations are intentionally represented as production-ready interfaces/placeholders until live credentials are supplied.

## Recent Enhancements & UI Updates

- **Form Readability & High Contrast**: Fixed form text visibility issues (such as "Start with the context.", input labels, field placeholders, step indicators, option cards, and textareas across `/contact`, `/services/[slug]`, and the homepage) by enforcing a dark luxury ink card background (`bg-[var(--ink)]`) with crisp white typography and high-contrast inputs.
- **Desktop Navigation & Services Mega Dropdown**: Refactored the Services sub-navbar dropdown positioning (`w-[min(760px,calc(100vw-32px))]`) relative to the desktop navigation bar to keep the panel aligned within viewport boundaries without horizontal overflow on PC screens.
- **Responsive & Visual System Polish**: Optimized layout responsiveness, interactive glass components, hover states, and accessibility contrast ratios across all viewports.
- **Header Clearance for System Progress Bar**: Offset the sticky progress indicator bar (`top-[84px] sm:top-[92px]`) in `HorizontalStory` so "The BizNiti System 01/05" indicator sits cleanly below the fixed top navbar header without any overlap.
- **Mobile & Tablet 3D Card Deck Stacking**: Transformed `HorizontalStory` on phone and tablet devices into a sticky 3D card deck stack where cards layer vertically with peek-a-boo step headers as the user scrolls.
- **Mobile Touch-Optimized Inline Service Accordions**: Refactored `ServicesExperience` ("Seven ways to move") on touch screens so tapping any service expands its rich dark-glass preview card inline directly under the user's finger.


