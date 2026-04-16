# BDV Website — Architecture & Structure

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v4 + inline styles (for precise clamp/responsive values)
- **Animation:** Framer Motion (`motion`, `AnimatePresence`)
- **Icons:** Phosphor Icons (`@phosphor-icons/react`, `weight="thin"`)
- **Font:** DM Sans (Google Fonts, weights 300–700)

---

## Section Order & Content Map

```
App.tsx
├── Header          — Fixed top bar + floating scroll nav
├── <main>
│   ├── Hero        — Full-bleed video bg, "DIFFERENT" headline
│   ├── PastLife    — "Teams We've Built & Advised" — marquee carousel
│   ├── Focus       — "We're Your First Cofounder" — 2-col text + photo mosaic
│   ├── ValueAdd    — "How We Support Founders" — icon + text grid (6 rows)
│   ├── Stages      — "Four Stages to Launch" — sticky stacking cards (4)
│   ├── Team        — "Your Founding Team" — flip cards + bio modal (5 members)
│   └── FooterCTA   — "Let's Go Build!" — CTA + footer info
```

### Section IDs (used for scroll navigation)

`hero`, `past-life`, `focus`, `value-add`, `stages`, `team`, `footer-cta`

---

## File Structure

```
src/
├── App.tsx                          — Main layout, section ordering
├── index.css                        — Theme vars, global styles, animations
├── utils/
│   └── smoothScroll.ts              — Scroll-to-section utility
├── components/
│   ├── layout/
│   │   └── Header.tsx               — Top bar + floating nav
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── PastLife.tsx
│   │   ├── Focus.tsx
│   │   ├── ValueAdd.tsx
│   │   ├── Stages.tsx
│   │   ├── Team.tsx
│   │   └── FooterCTA.tsx
│   └── ui/
│       └── AnimateIn.tsx            — Scroll-triggered animation wrapper

public/
├── assets/
│   ├── images/
│   │   ├── cards/                   — PastLife carousel background photos
│   │   │   ├── affirm-carousel.png
│   │   │   ├── paypal-carousel.webp
│   │   │   ├── flexport-carousel.avif
│   │   │   └── ...
│   │   ├── collage/                 — Focus section mosaic photos
│   │   │   ├── collage-pic-1.png
│   │   │   ├── collage-pic-2.png
│   │   │   └── ...
│   │   ├── decorative/              — Background textures, sketches
│   │   │   ├── video-frame-bg.jpg   — Body background texture
│   │   │   ├── architect-sketch.png
│   │   │   ├── bridge-sketch.png
│   │   │   ├── rocketship-sketch.png
│   │   │   └── yellow-zig.png
│   │   ├── logo/                    — Company logos (PastLife) + BDV logo
│   │   │   ├── bdv logo.png
│   │   │   ├── affirm_logo.png
│   │   │   ├── paypal_logo.png
│   │   │   └── ...
│   │   ├── team/                    — Team headshots
│   │   │   ├── huey_headshot.webp
│   │   │   ├── serge_headshot.webp
│   │   │   ├── peter_headshot.png
│   │   │   └── lyndon_headshot.jpeg
│   │   └── figma/                   — Figma design exports (reference)
│   └── fonts/                       — Local font files (if any)

docs/
├── DESIGN_SYSTEM.md                 — Colors, typography, spacing, patterns
├── ITERATION_NOTES.md               — Lessons learned, gotchas
├── ARCHITECTURE.md                  — This file
└── yourcreative-design-reference.pdf — Original design reference
```

**Important:** Always put images in `public/assets/images/`, never in `src/` or `dist/`. The `dist/` folder is the build output and gets wiped on each build.

---

## Key Architectural Decisions

### Inline Styles vs Tailwind Classes

We use **both** — intentionally:
- **Tailwind classes** for: layout (`grid`, `flex`), display, overflow, responsive breakpoints, colors via theme tokens (`text-text`, `bg-cream`)
- **Inline `style={{}}`** for: precise responsive values (`clamp()`), one-off sizing, dynamic values, complex `background` or `backdropFilter`

This hybrid approach gives us Tailwind's responsive utilities while allowing precise fluid typography and spacing that Tailwind's utility classes can't express.

### AnimateIn as Single Animation Primitive

All scroll-triggered animations use a single `<AnimateIn>` wrapper. This ensures:
- Consistent animation feel (same duration, easing, viewport trigger)
- Simple stagger via `delay` prop
- Easy to disable globally if needed (modify one component)

### Data-Driven Sections

Several sections define their content as arrays at the top of the file:
- `PastLife.tsx` — `companies[]` with logo paths, card images, sizing
- `ValueAdd.tsx` — `services[]` with icons, keywords, descriptions
- `Stages.tsx` — `stages[]` with titles, descriptions, sketches
- `Team.tsx` — `team[]` with names, titles, images, bios

This pattern makes content changes easy without touching JSX structure.

### Sticky Stacking Pattern (Stages)

Cards use `position: sticky` with increasing `top` offsets (0, 120, 240, 360px). Key constraints:
- Cards must be direct children of their scroll container (the section)
- Full-bleed width uses `100vw` + `calc(-50vw + 50%)` margin hack
- Section spacing must use `marginBottom` on the section, not internal spacers (spacers scroll behind stuck cards — see ITERATION_NOTES.md)

### Full-Bleed Pattern

To make an element span the full viewport width while keeping its parent constrained:
```tsx
style={{
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
}}
```
Then re-constrain inner content: `<div className="max-w-[1400px] mx-auto">`

Used in: Stages cards, PastLife marquee (via overflow-hidden parent)

---

## Responsive Strategy

**Approach:** Mobile-first, with `md:` (768px) as the primary breakpoint.

**What changes at `md:`:**
- Single column → two-column grids (Focus, Stages)
- Stacked → horizontal layouts (ValueAdd rows, Header)
- Reduced gaps increase (`gap-8 → gap-16`)
- Heading margins increase (`mb-10 → mb-14`)

**What changes at `lg:` (1024px):**
- Team cards: 3-col → 5-col grid

**Fluid scaling:** Most typography and spacing uses `clamp()` for smooth scaling between breakpoints, rather than abrupt jumps.

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `react`, `react-dom` | UI framework |
| `framer-motion` | Scroll animations, modal transitions, AnimatePresence |
| `@phosphor-icons/react` | Thin-weight icons for ValueAdd section |
| `tailwindcss` (v4) | Utility-first CSS |
| `vite` | Build tool + dev server |
| `typescript` | Type safety |
