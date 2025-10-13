# BDV Website Design Reference

## Overview
This document contains important context and design specifications for the Built Different Ventures (BDV) website.

## Website Type
- **Single-page scrolling website**
- Users scroll down through sequential sections
- Smooth scroll navigation between sections

## Reference Screenshots
Reference design screenshots are stored in `/docs/reference/` directory:
- `screen 1.png` - Hero section
- `screen 2.png` - Team intro (Builders)
- `screen 3.png` - Team profiles with bios
- `screen 4.png` - Portfolio/Companies logos
- `screen 5.png` - Services (Cofounder accordion)
- `screen 6.png` - CTA section

These screenshots show the sequential flow as users scroll down the page.

## Page Structure (Top to Bottom)

### 1. Hero Section (Screen 1)
- Header text: "We're here to build—with you"
- Large title: "built:different" (with "different" having a black brush stroke/underline)
- Description: "Built Different Ventures (BDV) co-builds category-defining companies with founders. We focus on complex, global service problems where AI can deliver outsized value."

### 2. Team Section (Screens 2-3)
- Title: "We are Builders" (with "Builders" in yellow/gold color)
- **Integrated photo + bio layout (NOT separated grid):**
  - **Huey Lin's content block (LEFT):**
    - Photo positioned on left side
    - Name, title, and bio text flow below/beside her photo on the LEFT
  - **Serge Longin's content block (RIGHT, overlapping):**
    - Photo overlaps from center-right (higher z-index)
    - Name, title, and bio text flow below/beside his photo on the RIGHT
  - **Layout creates staggered/asymmetric appearance**
  - Text and photos are intermixed, not separated into "photos then bios"
  - Each person's content (photo + text) forms an integrated unit

  **Huey Lin** - Cofounder & GP
  - Bio: Huey brings big ideas to life and scale. Part of the original PayPal mafia, Huey was one of the first product managers at PayPal, then became the founding COO at Affirm (NASDAQ: AFRM). She later served as President of Asia at Flexport and a Venture Partner at Notable Capital (fka GGV Capital). She now serves on the boards of Hang Seng Bank, Singapore Exchange, and Nium.

  **Serge Longin** - Cofounder & GP
  - Bio: A repeat founder who bootstrapped two US startups—RevenueWell and Club Automation—to a combined exit of over $100M. Both were acquired by private equity after becoming category leaders in dental SaaS and fitness ops. Serge runs our rigorous idea validation process and brings product, GTM, finance, and operations experience to ensure our startups find their footing.

### 3. Portfolio Section (Screen 4)
- Title: "Teams we've built & advised"
- **8 company logos in grid (2 rows × 4 columns):**
  - Row 1: Affirm, PayPal, RevenueWell, ClubAutomation
  - Row 2: Flexport, Grab, Chainlink, Terraformation

### 4. Services Section (Screen 5)
- Title: "We're your first **cofounder**" (cofounder in yellow)
- Subtitle: "We act like cofounders—because we are."
- Subtitle 2: "We roll up our sleeves across every phase of venture creation."

**6 Accordion Items (with + icons, allow multiple items open at once):**

1. **Dream: Problem & Solution Validation**
   - We run deep customer discovery and pressure-test ideas against real-world pain. If we can't build a defensible model, we don't move forward.

2. **Build: Product & UX Support**
   - Our product and design experts turn insights into MVPs customers actually want to use.

3. **Grow: First Customers & GTM**
   - We unlock our global network in fintech, healthcare, logistics and more to secure your earliest design partners.

4. **Recruit: Founder & Team Formation**
   - We help bring on world-class cofounders and early operators—people we'd back ourselves.

5. **Learn: World-Class Advisor Network**
   - You get access to a bench of proven operators—from Stripe, Reddit, Coinbase, Google, PayPal, and more—ready to unblock and guide you.

6. **Fund: First Check & Follow On**
   - For ideas and founders we believe in, we invest up to $1M in initial capital to get you to product-market fit. We're backed by top-tier venture firms across the US, Europe, and Asia—partners who can also support your next round when you're ready to scale.

### 5. CTA Section (Screen 6)
- **Large rolling/scrolling text:** "Let's Build!" text that continuously moves/scrolls horizontally across the screen
  - Animated marquee effect
  - Repeating pattern that loops infinitely
  - Text moves continuously from right to left
- Copy: "Whether you've spotted a massive pain point, are looking for the right cofounder, or just want to jam on an idea—we'd love to hear from you."
- Black "Learn more" button

## Design Assets

### Background
- **Single background layer used throughout entire website:** `/src/assets/images/decorative/website background.webp`
- Background scrolls normally with the page
- No section-specific backgrounds - the background is always the same throughout

### Logo
- **BDV Logo:** `/src/assets/images/logo/bdv logo.png`

### Team Photos
- **Huey Lin:** `/src/assets/images/team/huey_headshot.webp`
- **Serge Longin:** `/src/assets/images/team/serge_headshot.webp`

### Portfolio Logos
- `/src/assets/images/logo/affirm_logo.png`
- `/src/assets/images/logo/paypal_logo.png`
- `/src/assets/images/logo/revenuewell_logo.png`
- `/src/assets/images/logo/club_automation_logo.png`
- `/src/assets/images/logo/flexport_logo.png`
- `/src/assets/images/logo/grab_logo.png`
- `/src/assets/images/logo/chainlink_logo.png`
- `/src/assets/images/logo/terraformation_logo.png`

### Decorative Elements
- **Not critical to match exactly** - focus on content, layout, and core design
- Includes: circles, sketches, background shapes

## Design Specifications

### Typography

**Primary Font:** Helvetica (loaded via Adobe Typekit in original Squarespace site)

**Font Sizes (extracted from Squarespace CSS):**

*Headings:*
- **H1**: `6.2rem` (99.2px)
  - Used for: "built:", "different", "We are Builders", "Teams we've built & advised", "We're your first cofounder"
- **H2**: `4.1rem` (65.6px)
  - Used for: Major section headings (if needed)
- **H3**: `1.8rem` (28.8px)
  - Used for: Team member names ("Huey Lin", "Serge Longin")

*Paragraph Text:*
- **Large Text (`.sqsrte-large`)**: `1.8rem` (28.8px)
  - Used for: Intro text ("We're here to build—with you"), hero description, service subtitles, accordion titles, CTA description
- **Small Text (`.sqsrte-small`)**: `1.5rem` (24px)
  - Used for: Subtitles, accordion content, secondary descriptions
- **Body Text**: `1rem` (16px)
  - Used for: Standard paragraphs, team bios

*Special Elements:*
- **Marquee "Let's Build!"**: `8rem` (128px)
- **Marquee line-height**: `1.4`
- **Marquee item spacing**: `1.4em` margin-right

**Line Heights (from Squarespace CSS):**
- **Headings (H1, H2, H3)**: `1.1em` (tight, compact spacing)
- **Body text (paragraphs, all sizes)**: `1.3em` (relatively tight)
- **Marquee**: `1.4` (slightly more relaxed)

**Typography Hierarchy:**
H1 (6.2rem) > H2 (4.1rem) > H3 / Large Text (1.8rem) > Small Text (1.5rem) > Body (1rem)

### Color Palette
- **Blue (for names/accents):** `#0285B6`
- **Yellow/Gold (for highlights):** `#FFD247`
- **Black text:** `#000000` (headings and body)
- **Background:** Beige/tan tones from background image

### Layout Dimensions

**Site Structure:**
- **Site max-width:** `1500px` (container constraint)
- **Horizontal page padding:** `2vw` (responsive, fluid)
- **Section vertical padding:** Varies by section (tighter than default, typically less than 96px)
- **Responsive breakpoints:** 300px, 640px, 767px, 799px, 1076px

**Spacing Philosophy:**
- **Tight vertical rhythm:** Minimal spacing between heading lines and elements
- **Compact typography:** 1.1em line-height for headings creates dense, impactful look
- **Responsive horizontal padding:** Uses `2vw` instead of fixed pixel values
- **Element spacing:** Much tighter than typical web spacing (Squarespace uses compact design)

**Header:**
- **Logo dimensions:** 755px × 197px (original asset size)
- **Logo display height:** 50px (desktop), 30px (mobile)
- **Header vertical padding:** 1vw (desktop), 6vw (mobile)

### Image Dimensions

**Background:**
- **Background image:** 3770×4583px (vertical format, aspect ratio ~0.82:1)
- Background scrolls normally with page content

**Team Photos & Layout:**
- **Both photos:** Portrait rectangles (height > width) - BOTH are taller than they are wide
- **Huey Lin headshot:** 853×1280px (natural dimensions - PORTRAIT orientation)
- **Serge Longin headshot:** 852×1000px (natural dimensions - PORTRAIT orientation)
- **Photo containers:** Fluid width (~40% of parent), 100% within their container
- **Layout approach:** Percentage-based responsive widths, NOT fixed pixels
- **CRITICAL - Integrated Layout:**
  - Photos and text are NOT separated
  - Each person = photo + name/title/bio as integrated unit
  - Huey's block on LEFT, Serge's block on RIGHT (overlapping)
  - Creates asymmetric, staggered visual flow
  - Reference: See `screen 3.png` for exact positioning

**Decorative Elements:**
- **Yellow decorative stroke:** 1479×1080px
- **Blue decorative stroke:** 1640×994px

### Header/Navigation
- **Sticky header** - fixed at top while scrolling
- Navigation links to all main sections

### Key Layout Notes

**Team Section Layout (CRITICAL):**
- **NOT a grid layout** with photos separated from bios
- **Integrated layout** where each person's photo + text forms a visual unit
- Huey's content (photo + bio) positioned LEFT
- Serge's content (photo + bio) positioned RIGHT with overlap
- Creates staggered, asymmetric appearance
- Text flows around/beside photos, not below in separate grid

**General:**
- Clean, minimal accordion design with + icons for services
- Proper color usage for highlights (yellow for key terms, blue for names)
- Mobile responsive design required
- Tight vertical spacing throughout (1.1em heading line-height)
- Responsive horizontal padding (2vw, not fixed pixels)

### Accordion Behavior
- Allow multiple items to be open at once
- Clean design with + icons
- Smooth expand/collapse animations

## Technical Stack
- React + TypeScript
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Smooth scroll navigation

## Contact/CTA
- Email: serge@builtdifferent.vc
- CTA button text: "Learn more"
