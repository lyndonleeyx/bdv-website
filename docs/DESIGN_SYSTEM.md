# BDV Website — Design System

## Color Palette

### Theme Variables (`src/index.css`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#FFFFFF` | Background |
| `--color-text` | `#1a1a1a` | Primary text |
| `--color-muted` | `#9a948b` | Secondary text |
| `--color-coral` | `#B84332` | Accent (Stages stage 1, icon buttons) |
| `--color-blue` | `#3D5A80` | Accent (Stages stage 2) |
| `--color-teal` | `#2A7F62` | Accent (Stages stage 3) |
| `--color-yellow` | `#C4841D` | Accent (Stages stage 4) |
| `--color-lavender` | `#b8b0cc` | Decorative gradient |
| `--color-sage` | `#c4d8a0` | Decorative gradient |

### Hardcoded Colors

**Text grays:**
- `#666` — Descriptions (ValueAdd, Stages)
- `#888` — Subtitles (ValueAdd)
- `#AAA` — Icons (ValueAdd)
- `rgba(0,0,0,0.35)` — Step numbers (Stages)

**Dividers:**
- `#DDDAD5` — Primary divider (ValueAdd rows, Team modal)
- `#d4cfc8` — Footer divider

**Backgrounds:**
- `#e8e3dc` — Team card placeholder
- `#1e1e1e` at 85% opacity — Floating nav
- `rgba(255,255,255,0.4)` — Frosted glass (Stages cards)
- `rgba(255,255,255,0.7)` — Body texture overlay

---

## Typography

### Font Family

Single font: **DM Sans** (Google Fonts), variable weight 300–700.

### Weight Scale

| Weight | Usage |
|--------|-------|
| 300 | Body text (default), descriptions, subtitles |
| 400 | Paragraphs, ValueAdd descriptions |
| 500 | Section labels, nav items |
| 600 | Team member names, smaller headings (h3–h6) |
| 700 | h1, h2, ValueAdd keywords |
| 900 | Stages card titles only |

### Type Scale (responsive `clamp()` values)

| Element | `fontSize` | `lineHeight` |
|---------|-----------|-------------|
| Hero headline | `18vw` | `0.85` |
| Section h2 | `clamp(2.5rem, 1.8rem + 2.9vw, 5rem)` | `1.1` |
| FooterCTA h2 | `clamp(3rem, 2.2rem + 3.4vw, 6rem)` | `1.05` |
| Stages card title | `clamp(2.5rem, 5vw, 4rem)` | `1.05` |
| ValueAdd keyword (h3) | `clamp(1.5rem, 1.2rem + 0.8vw, 2rem)` | `1.2` |
| Body (large) | `clamp(1.125rem, 0.9rem + 0.8vw, 1.5rem)` | `1.5` |
| Body (standard) | `clamp(1rem, 0.85rem + 0.6vw, 1.25rem)` | `1.6` |
| ValueAdd description | `clamp(1rem, 0.85rem + 0.4vw, 1.125rem)` | `1.65` |
| Hero subtitle | `clamp(1rem, 0.8rem + 0.5vw, 1.35rem)` | `1.5` |
| Section label | `0.875rem` (fixed) | — |
| Team member name | `1.05rem` (fixed) | — |

### Section Label Pattern

Every section uses this consistent label above the heading:
```tsx
<p
  className="text-text/40 uppercase tracking-widest mb-4"
  style={{ fontSize: '0.875rem', fontWeight: 500 }}
>
  Label Text
</p>
```

Labels used: "Past Life", "Principle", "Value Add", "Process", "Team", "Get In Touch"

---

## Spacing System

### Section Padding (vertical)

| Section | Top | Bottom |
|---------|-----|--------|
| PastLife | `clamp(5rem, 4rem + 4vw, 11rem)` | `clamp(3.5rem, 3rem + 1.5vw, 5rem)` |
| Focus | `clamp(3.5rem, 3rem + 1.5vw, 5rem)` | same (paddingBlock) |
| ValueAdd | `clamp(3.5rem, 3rem + 1.5vw, 5rem)` | same (paddingBlock) |
| Stages header | `clamp(3.5rem, 3rem + 1.5vw, 5rem)` | `clamp(2rem, 1.5rem + 1vw, 3rem)` |
| Stages section | — | `marginBottom: clamp(3.5rem, 3rem + 1.5vw, 5rem)` |
| Team | `clamp(3.5rem, 3rem + 1.5vw, 5rem)` | same (paddingBlock) |
| FooterCTA | `clamp(3.5rem, 3rem + 1.5vw, 5rem)` | `clamp(4rem, 3rem + 3vw, 6rem)` |

**Standard value:** `clamp(3.5rem, 3rem + 1.5vw, 5rem)` = ~56px at 375px, ~78px at 1440px, ~80px at 1920px

### Section Padding (horizontal)

All sections: `paddingInline: clamp(1.5rem, 1rem + 3vw, 4rem)` = ~24px mobile, ~64px desktop

### Content Container

All sections use: `max-w-[1400px] mx-auto`

### Grid Gaps

| Context | Gap |
|---------|-----|
| Focus 2-col | `gap-8 md:gap-16` |
| Stages 2-col | `gap-6 md:gap-12` |
| Team cards | `gap-5 md:gap-6` |
| Focus mosaic | `gap-2` |
| PastLife marquee | `gap-4` |
| ValueAdd rows | `md:gap-8 gap-3` |

---

## Layout Patterns

### Responsive Breakpoints

- `md:` (768px) — Primary breakpoint: single → multi-column
- `lg:` (1024px) — Used only for Team grid (5 columns)

### Grid Configurations

**Two-column (Focus, Stages):**
```tsx
grid md:grid-cols-2
```

**Three-column (ValueAdd rows):**
```tsx
grid md:grid-cols-[28px_300px_1fr] md:gap-8 gap-3
```

**Five-column (Team cards):**
```tsx
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
```

**3x3 mosaic (Focus photos):**
```tsx
grid grid-cols-3 grid-rows-3 gap-2
// Row 1: col-span-2 + 1
// Row 2: 1 + col-span-2
// Row 3: col-span-2 + 1
```

### Full-Bleed Pattern (Stages cards)

To break out of the max-w container:
```tsx
style={{
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
}}
```
Then re-constrain inner content with `max-w-[1400px] mx-auto`.

---

## Component Patterns

### AnimateIn Wrapper

Scroll-triggered fade-up animation using Framer Motion:
```tsx
<AnimateIn delay={0.1} className="">
  {children}
</AnimateIn>
```

**Config:** `initial={{ opacity: 0, y: 30 }}` → `whileInView={{ opacity: 1, y: 0 }}`
**Viewport:** `once: true, margin: '-80px'`
**Transition:** `duration: 0.6, ease: 'easeOut'`

**Delay conventions:**
- `0` — Section header
- `0.1` — First content block
- `0.15` — Body text
- `0.2` — Images/visual elements
- `0.25` — CTA buttons
- `index * 0.1` — Staggered lists (Team cards)

### Button Styles

**Pill CTA (primary):**
```
border border-text rounded-full px-6 py-3
text-[14px] font-medium tracking-wide uppercase
hover:bg-text hover:text-cream transition-colors
```

**Icon circle (coral):**
```
w-[44px] h-[44px] rounded-full bg-coral
flex items-center justify-center text-white
hover:opacity-80 transition-opacity
```

### Dividers

**Standard:** `height: 1px, backgroundColor: #DDDAD5`
**Short accent (modal):** `width: 40px, height: 1px, backgroundColor: #DDDAD5`

---

## Special Effects

### Background Texture (body)

Two fixed pseudo-elements:
1. `body::before` — `video-frame-bg.jpg` at `opacity: 0.5`, `z-index: -2`
2. `body::after` — `rgba(255,255,255,0.7)` overlay, `z-index: -1`

Both use `pointer-events: none` and `position: fixed`.

### Frosted Glass (Stages cards)

```css
background-color: rgba(255,255,255,0.4);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border-top: 1px solid rgba(0,0,0,0.06);
border-radius: 1.5rem 1.5rem 0 0;
```

### 3D Flip Cards (Team)

CSS classes in `index.css`:
```css
.perspective-1000 { perspective: 1000px; }
.backface-hidden { backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }
.flip-card-inner { transform-style: preserve-3d; transition: transform 0.6s ease; }
.group:hover .flip-card-inner { transform: rotateY(180deg); }
```

Card aspect ratio: `aspect-[3/4]`, border radius: `rounded-[24px]`

### Marquee Carousel (PastLife)

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
- Speed: `55s linear infinite`
- Pause on hover: `hover:[animation-play-state:paused]`
- Array duplicated (`[...companies, ...companies]`) for seamless loop

### Sticky Stacking Cards (Stages)

```tsx
top: `${index * 120}px`  // CARD_OFFSET = 120
zIndex: index + 1
```
Cards stack progressively as user scrolls. Each card covers 120px of the previous.

### Modal Overlay (Team)

- Backdrop: `bg-black/40` + `blur(8px)`
- Content: Framer Motion scale-up (`scale: 0.95 → 1, y: 20 → 0`)
- Body scroll locked when open
- Escape key and backdrop click to close
