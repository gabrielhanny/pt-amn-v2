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
- Animated AMN loader intro (cinematic letter reveal, glow shimmer)
- Hero V2: particle network canvas + mesh gradients + liquid blobs + grid + noise + electric pulse SVG lines + 3 capability cards (Digital Strategy / Automation & AI / Creative Execution) replacing fake metrics
- About: 3-card grid with animated gradient border on hover
- Services: 6 premium animated cards (added Data & Analytics)
- Workflow V2: floating glassmorphism cards with equal height alignment, animated glow connector line, traveling pulse, icon aura/ring. Last step renamed to "Data & Analytics"
- Solutions / What We Build (renamed from Featured Work): 4 capability-focused cards (Digital Brand Presence, Website Experience, Automation Workflow, Social Media Direction) — NO fake metrics, focus statements only
- Automation & AI: 2-col layout with 4 feature cards
- Testimonials: 3-card grid with quote icon + stars + avatar (toned-down claims, no exaggerated numbers)
- CTA: Glass card with email + WhatsApp links
- Footer: Brand + 3-column links + social icons
- Premium polish: gradient badge dots with pulse, custom scrollbar, premium typography hierarchy, conic-gradient rotating borders on cards

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
