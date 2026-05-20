# PT. Anak Muda Nusantara (AMN) - Premium Digital Agency Website

## Problem Statement
Create a premium cinematic digital agency website for PT. Anak Muda Nusantara (AMN). Modern, elegant, futuristic, minimal — inspired by ALVA Digital, Linear, Stripe (original design, not copy). Combines luxury whitespace, cinematic scrolling, smooth motion, premium gradients, glassmorphism, floating blur lights. Target audience: growing businesses, startups, UMKM, modern Indonesian brands.

## Brand
- Personality: modern, strategic, premium, intelligent, innovative, approachable, professional
- Default language: Indonesian (no toggle)
- Contact: hello@amnindonesia.com / +62 852 3672 4068 / IG @pt.amnindonesia / LinkedIn PT. AMN Indonesia

## Tech Stack
- Frontend-only static landing page (no backend)
- React + custom CSS animations (no Framer Motion / no extra libs)
- Particle network via HTML5 Canvas
- Scroll-reveal via IntersectionObserver
- Font: Manrope + Inter
- Icons: lucide-react

## Architecture
- `App.js` — Loader → Home route gating (3.5s)
- `components/Loader.jsx` — Cinematic AMN intro with blur, glow, scale-in animation
- `components/Navbar.jsx` — Glass nav with mobile menu
- `components/sections/` — Hero, About, Services, Workflow, FeaturedWork, Automation, Testimonials, CTA, Footer
- `hooks/useScrollReveal.js` — IntersectionObserver hook
- `mockData.js` — Indonesian copy for services, workflow, case studies, testimonials

## Implemented (2026-05-20)
- Refined AMN loader: soft purple energy field + rotating conic ring (40° arc) + grain texture + 0.7s fade-out handoff. Duration ~2.9s, gradient white→lavender→purple letters with stagger
- Premium navbar: saturate(160%) blur with subtle top-edge gradient line, logo scale-down on scroll, refined link underline
- Hero V2: particle network (capped at 28 on mobile / 55 on desktop), 3-layer mesh gradients, liquid morphing blobs, SVG electric pulse lines, 3 capability cards replacing fake metrics
- About: digital pulse energy waveform (SVG) traveling behind cards, synced card icon/border reactions (9s loop, staggered 0/3/6s)
- Services: 6 premium animated cards (added Data & Analytics)
- Workflow V2: floating glassmorphism cards with equal-height alignment, animated glow connector line + traveling pulse, icon aura/ring
- Solutions / What We Build: 4 capability-focused cards with subtle radial-glow on hover, "Capability 01-04" index markers, NO fake metrics
- Automation & AI: 2-col with 4 feature cards
- Testimonials: 3-card grid with ambient lavender orb
- CTA: Glass card with email + WhatsApp links
- Footer: minimalist premium
- Global polish: section::before soft fade transitions, will-change perf hints, `:focus-visible` accessible focus rings, `prefers-reduced-motion` support, custom gradient scrollbar, ::selection styled

## Color Palette (final)
- Base: #07071a ↔ #0a0a1f (deep navy alternating per section)
- Primary gradient: #667eea → #764ba2 → #ec4899
- Accent: #a7b2ff (lavender), #8b5cf6 (purple)
- Per-section accent orbs vary subtly: indigo / violet / lavender / pink-tint

## Color Palette
- Background: #07071a / #0a0a1f (deep navy)
- Primary gradient: #667eea → #764ba2 (indigo → purple)
- Accent: #a7b2ff (soft lavender), #8b5cf6 (purple), #ec4899 (pink tint)

## Next Action Items (Backlog)
- P1: Contact form modal with email validation
- P1: Real client logos / project images
- P2: Blog/insights section
- P2: Service detail pages
- P2: WhatsApp floating button
