# AGENTS.md — Workspace Guidelines & Learned Practices

This document outlines key project conventions and behavioral guidelines learned from past workflow requirements.

## 1. README Maintenance
- **Append, Do Not Overwrite**: When documenting updates or new features, always **append** a new section (e.g., `## Recent Enhancements & UI Updates`) at the bottom of `README.md`.
- Preserve all existing setup instructions, environment variable notes, and original documentation.

## 2. Git & Vercel Deployment Protocol
- **Pre-flight Build Verification**: Always run `npm run build` prior to committing to ensure zero TypeScript or Next.js build errors.
- **Git Commit & Push**: Commit changes with clear, structured messages (e.g., `fix(ui): ...`, `feat(nav): ...`).
- **Automatic Deployment**: Pushing to `origin main` automatically triggers Vercel deployment. Ensure builds pass before pushing.

## 3. UI, Contrast & Form Guidelines
- **Form Card Backgrounds**: Form containers like `LeadForm` must use solid, dark ink container backgrounds (`bg-[var(--ink)]`) rather than pure semi-transparent white overlays so text (e.g. "Start with the context.") is crisp and legible on light page sections.
- **High-Contrast Text Tokens**: Use explicit text color classes (`text-white`, `text-white/80`, `placeholder:text-white/40`) for all labels, inputs, and step headings.

## 4. Dropdown Navigation Responsiveness
- **Fluid Ratio Widths & Container Anchoring**: Position sub-navbars relative to the main header container (`left-1/2 -translate-x-1/2`) using fluid percentage ratios (`w-[min(94%,760px)]`) rather than fixed pixel widths or narrow sub-nav wrappers.
- **Laptop & Monitor Viewport Safety**: This ensures proportional 3% margins on both sides across all laptops, desktop monitors, and display scaling modes without horizontal overflow or clipping.

