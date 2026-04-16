# BDV Website — Iteration Notes & Lessons Learned

Hard-won learnings from the design/build iteration process. Read these before making changes to avoid repeating past mistakes.

---

## Sticky Card Spacing Bug (Stages section)

**Problem:** Adding a spacer `<div>` with `paddingBottom` inside the `<section id="stages">` had zero visual effect — the gap between Stages and Team was always 0px.

**Root cause:** Sticky elements (`position: sticky`) stay fixed in the viewport while their siblings scroll underneath them. The spacer div scrolled behind the stuck cards and was completely invisible.

**Fix:** Use `marginBottom` on the `<section>` element itself. Margin is outside the element's border box, so sticky children can't overlap it.

```tsx
// WRONG — spacer inside section, invisible behind sticky cards
<section id="stages">
  {/* sticky cards */}
  <div style={{ paddingBottom: '5rem' }} />  {/* ← gets hidden */}
</section>

// RIGHT — margin outside section, always visible
<section id="stages" style={{ marginBottom: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)' }}>
  {/* sticky cards */}
</section>
```

**Rule:** Never use internal padding/spacers to create gaps after sticky sections. Always use `marginBottom` on the section or `marginTop` on the next section.

---

## Figma Bounding Boxes Include Transparent Space

**Problem:** When extracting dimensions from Figma MCP (`get_design_context`), width/height values represent the bounding box which often includes significant transparent areas around the actual visual content.

**Impact:** Using Figma dimensions directly as CSS sizing made images far too large.

**Fix:** Don't use Figma bounding box values as direct CSS sizing. Instead, use visual comparison (Playwright screenshots vs Figma) to estimate the actual content size. Scale down from Figma values as needed.

---

## Logo Sizing — Per-Logo Approach

**Problem:** Company logos have wildly different visual weights. A "logotype" (text-only like Flexport) at 100px looks much smaller than an "icon + text" logo (like Chainlink) at the same width.

**Solution:** Each logo gets individual `logoW` (width in px) and `logoTop` (top offset in px) values, tuned by visual weight:

| Logo Type | Width Range | Top Offset |
|-----------|------------|------------|
| Compact text (Grab, Flexport) | 72–95px | 26–29px |
| Icon + text (Affirm, Chainlink) | 105–145px | 15–17px |
| Wide/padded (RevenueWell, Club Automation, Terraformation) | 205–210px | 2–4px |

All logos are rendered white using `filter: brightness(0) invert(1)`.

See `docs/logo-sizing.md` (if exists) or the PastLife component for the full data.

---

## Image Overflow Between Sections

**Problem:** Decorative images (rocketship sketch) bleeding into adjacent sections.

**Rules:**
- Use `overflow-hidden` for sections where images should stay fully contained (Hero, Focus)
- Use `overflow-x-clip` only for sections that need vertical cross-section bleed (e.g., decorative elements spanning sections)
- `overflow-x-clip` only clips horizontally — images will still bleed vertically into adjacent sections
- The `<main>` wrapper uses `overflow-x-clip` to prevent horizontal scroll while allowing vertical decorative bleed

---

## Container-Relative Positioning

**Problem:** Decorative images positioned with `vw` units shifted relative to content at different viewport widths.

**Fix:** Position decorative images inside the `max-w-[1400px]` container using percentages of that container, NOT `vw` units. This keeps images locked to content regardless of viewport width.

```tsx
// WRONG — shifts at different screen sizes
style={{ left: '5vw' }}

// RIGHT — stays locked to content
style={{ left: '5%' }}  // percentage of the max-w container
```

---

## Carousel Card Images — Gradient Overlay

**Problem:** White company logos became invisible when placed over light areas of background photos.

**Fix:** Always add a dark gradient overlay at the top of carousel cards:
```tsx
background: linear-gradient(
  to bottom,
  rgba(0,0,0,0.55) 0%,    // dark at top where logo sits
  rgba(0,0,0,0.1) 35%,
  transparent 50%           // fades to show photo
);
```

Some cards also need custom `objectPosition` to show the right part of the photo (e.g., PayPal: `'75% center'` to show the phone screen).

---

## ValueAdd Grid — Don't Constrain Description Width

**Problem:** `maxWidth: 480px` on ValueAdd descriptions created excessive whitespace on the right side of the `1fr` column.

**Fix:** Let descriptions fill the full `1fr` column width. The grid template (`28px_300px_1fr`) already constrains the layout — the description doesn't need its own max-width.

---

## Section Spacing Consistency

**The standard gap between sections is ~155px** at 1440px viewport:
- Bottom padding of section N (~78px) + top padding of section N+1 (~78px)
- Both use `clamp(3.5rem, 3rem + 1.5vw, 5rem)`

**Exception — PastLife has extra top padding** (`clamp(5rem, 4rem + 4vw, 11rem)`) because it's the first content section below the Hero.

**Exception — Stages uses marginBottom** instead of internal padding (see sticky card bug above).

---

## Always Verify with Playwright

Don't rely on CSS math alone. Use Playwright MCP to take screenshots and compare against the Figma design. Visual verification catches issues that calculations miss:
- Transparent bounding boxes making things look too large
- Sticky cards consuming spacer divs
- Text overflow at certain viewport sizes
- Image crop points not showing the right content
