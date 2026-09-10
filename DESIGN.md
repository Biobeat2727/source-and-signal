---
name: Source & Signal
description: A dark, still ground where one lavender line carries the message.
colors:
  surface: "#101319"
  surface-low: "#161923"
  surface-raised: "#1c1e2c"
  surface-field: "#262938"
  frame: "#363b4c"
  ink: "#eeedf5"
  ink-soft: "#c5c4d1"
  ink-muted: "#b9b8ca"
  ink-faint: "#aaa7bd"
  signal-lavender: "#b9b0e5"
  lavender-light: "#d9d2f3"
  lavender-pale: "#e5def8"
  lavender-deep: "#beb3dc"
  on-lavender: "#242133"
  line: "#c9c5e32b"
  line-faint: "#c9c5e31c"
  press-tint: "#ffffff0d"
typography:
  display:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(2.375rem, 1.5rem + 3.4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(1.875rem, 1.35rem + 2vw, 2.625rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  title-sm:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(1.625rem, 1.25rem + 1.4vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.15
  heading:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.25
  lede:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
  meta:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.14em"
rounded:
  hairline: "3px"
  control: "6px"
  frame: "7px"
  tile: "8px"
  hero: "12px"
spacing:
  gutter: "5%"
  gutter-wide: "8%"
  section: "80px"
  section-mobile: "50px"
  block: "30px"
  row: "18px"
components:
  button-hero:
    backgroundColor: "{colors.lavender-pale}"
    textColor: "{colors.on-lavender}"
    typography: "{typography.label}"
    rounded: "{rounded.hero}"
    padding: "9px 10px 9px 24px"
    height: "58px"
  button-outline:
    textColor: "{colors.lavender-light}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-submit:
    backgroundColor: "{colors.lavender-light}"
    textColor: "{colors.on-lavender}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface-field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px"
  project-frame:
    backgroundColor: "{colors.frame}"
    rounded: "{rounded.frame}"
    padding: "26px 26px 0"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "44px"
  nav-link-current:
    textColor: "{colors.signal-lavender}"
    typography: "{typography.label}"
    height: "44px"
---

# Design System: Source & Signal

## Overview

**Creative North Star: "The Quiet Signal"**

A dark, still room where one clear line carries the message. The ground is a deep blue-black that never goes fully black, so the page reads as night rather than void. Almost everything on it is off-white type at a generous size, and the only color is a single lavender that appears where the signal is: the second line of the headline, the waveform, links, and the current page in the nav. The wordmark is calligraphic and hand-drawn in feel; every other letter on the site is a humanist sans that shares its warmth without competing with it.

Density is low and deliberate. Sections are separated by hairlines, not boxes, and depth comes from stepping the ground up one tone rather than from shadows. The one exception is the hero button, which has a soft lavender gradient and a whisper of lift, because it is the one object on the page meant to be pressed. Imagery is real client work only, shown as screenshots inside muted frames. Motion belongs to the waveform and nothing else.

The rejected direction is the agency template: cards with icons, gradient text, stat counters, uppercase eyebrows over every section, and stock photography. Those are not banned by taste; they are wrong for a one-person studio whose whole pitch is that you deal with a real person.

**Key Characteristics:**
- One accent, used where the signal is and nowhere else
- Tonal depth, hairline structure, no shadows at rest
- One typeface family plus the wordmark; hierarchy from size and weight
- Real screenshots as the only imagery
- Motion reserved for the waveform sculpture

## Colors

A blue-black ground, off-white ink in four steps, and one lavender in four steps.

### Primary
- **Signal Lavender** (#b9b0e5): the second line of the hero headline, the current nav item, the eyebrow above the process steps, the waveform's mid-tones. It marks where the message is.
- **Lavender Light** (#d9d2f3): text links, outlined button labels, the submit button fill, and hover color on nav links. The reading step of the accent.
- **Lavender Pale** (#e5def8) and **Lavender Deep** (#beb3dc): the two ends of the hero button gradient, and nothing else.
- **On Lavender** (#242133): text sitting on any lavender fill.

### Neutral
- **Surface** (#101319): the page ground and the hero. Never pure black.
- **Surface Low** (#161923): the studio section and footer. One tonal step up.
- **Surface Raised** (#1c1e2c): the contact strip, the form card, and the mid-point of the work section's gradient.
- **Surface Field** (#262938): input and textarea backgrounds.
- **Frame** (#363b4c): the muted mount behind every project screenshot.
- **Ink** (#eeedf5): headings, primary copy, nav labels, and the wordmark.
- **Ink Soft** (#c5c4d1): body paragraphs and ledes.
- **Ink Muted** (#b9b8ca): captions, project descriptors, and helper text.
- **Ink Faint** (#aaa7bd): footer and metadata lines.
- **Line** (#c9c5e32b) and **Line Faint** (#c9c5e31c): hairline dividers, outlined buttons, and section borders. Always lavender-tinted, never gray.
- **Press Tint** (#ffffff0d): the only feedback fill, applied to outlined controls on press.

### Named Rules
**The One Voice Rule.** Signal Lavender and its light step are the only chromatic color in the interface. Success and error messages in the form are the sole exception, and they stay inside the form.

**The Night Not Void Rule.** No surface is #000. Every dark step carries the blue of the ground so screenshots and off-white type sit in a room, not on a hole.

## Typography

**Display Font:** Alegreya Sans (self-hosted through next/font with a metric-adjusted fallback)
**Body Font:** Alegreya Sans
**Wordmark:** the SVG at `public/source-signal-wordmark.svg`, never set in live type

**Character:** Alegreya Sans has calligraphic terminals and a slightly narrow humanist body, so it sits under the hand-drawn wordmark as a relative rather than a stranger. It reads warm and literate at text sizes and gains presence at display sizes without needing heavy weights. Three weights ship: 400, 500, 700.

### Hierarchy
- **Display** (500, clamp 38 to 56px, 1.06): the hero headline and inner-page H1s. Tracking -0.01em only here.
- **Title** (500, clamp 30 to 42px, 1.12): section H2s on the homepage and the studio introduction.
- **Title Small** (500, clamp 26 to 34px, 1.15): H2s inside a section or a strip: the contact strip, service items, about subsections.
- **Heading** (500, 22px, 1.25): project card titles, step names, list subsections.
- **Lede** (400, 19px, 1.55): the first paragraph of a page or section. Measure 44 to 58ch.
- **Body** (400, 17px desktop and 16px mobile, 1.6): paragraphs. Measure 62ch.
- **Label** (500, 15px): nav links, buttons, captions, text links.
- **Meta** (500, 14px desktop and 13px mobile, 0.14em, uppercase when used as an eyebrow): footer, location lines, the one eyebrow per page.

### Named Rules
**The 13px Floor Rule.** Nothing rendered is smaller than 13px. The audience is often older and often on a phone in daylight.

**The One Eyebrow Rule.** A tracked uppercase kicker appears at most once per section, and only when it carries information the heading does not: the studio's "The person behind the studio", the process list's "How a project runs". Never as a habit above every H2.

## Layout

The page is a single centered shell up to 1700px wide with a 5% side gutter, widening to 8% for the two conversational sections (the direct-work block and the studio). Sections stack with an 80px vertical rhythm on desktop and 50px on mobile, separated by a faint hairline on the top edge rather than by background changes alone.

The homepage sequence is fixed: hero, work grid, direct-work promise and process, studio introduction, contact strip, footer. Two-column layouts split unevenly on purpose: the work grid is 1:1, the promise-and-process block is 5:7, and the contact page is 1.3:1 with the form leading. Everything collapses to one column under 700px, promise before process, form before aside.

The hero is a flex column with the footnote line pushed to the bottom by auto margin, so it moves down when text grows instead of overlapping the buttons. The header wraps to two rows under 700px rather than hiding links behind a menu.

## Elevation & Depth

Depth is tonal. Each surface step is one tone lighter than the ground, and hairlines do the structural work. Nothing casts a shadow at rest except the project screenshots, which sit inside a frame with a soft downward shadow to read as a mounted print rather than a flat image.

### Shadow Vocabulary
- **Mounted print** (`box-shadow: 0 15px 35px #080a1225` on the frame, `0 14px 30px #0003` on the image): project screenshot frames only.
- **Hero lift** (`inset 0 1px 0 #ffffff80, 0 5px 22px #b7a4e014`, deepening on hover): the hero's filled button, and no other control.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Only the hero button and the screenshot mounts carry a shadow, and neither gains one on a new screen without a reason.

## Shapes

Corners are quiet. Controls and outlined buttons use a 6px radius, screenshot frames 7px, the arrow tile inside the hero button 8px, and the two hero buttons 12px because they are the largest objects on the page. Focus rings use 3px. Hairlines are one pixel and lavender-tinted at low opacity. Nothing is fully rounded except the case-study badge, which is a legacy pill and not a pattern to repeat. The waveform is the only organic shape and is never boxed.

## Components

### Buttons
- **Shape:** softly rounded (12px hero, 6px elsewhere), 44px minimum height everywhere, 58px in the hero.
- **Hero filled:** lavender gradient (pale to deep) with on-lavender text, a small squared arrow tile on the right, and a soft lift on hover. One per page.
- **Outlined:** hairline border in Line, Lavender Light text at label size and 500 weight, transparent fill. Used for "Let's talk" in the nav and hero, the contact strip, and the 404 and error pages. Border brightens to Lavender Light on hover; fill tints to white at 5% on press.
- **Submit:** Lavender Light fill, on-lavender text, full width of the form, 6px radius.
- **Hover** only fires on devices that hover; touch gets the press tint instead.

### Cards / Containers
- **Project frame:** Frame background, 7px radius, faint hairline border, 26px top and side padding with the screenshot bleeding off the bottom edge; 8:5 aspect on mobile so client headlines survive. The image nudges up 4px on hover.
- **Form card:** Surface Raised, hairline border, 32px padding (24px mobile).
- Nothing else is a card. Lists use hairline rows.

### Inputs / Fields
- **Style:** Surface Field background, hairline border tinted lavender at 25%, 6px radius, 16px padding, body-size text so phones do not zoom.
- **Focus:** 2px Signal Lavender ring, border goes transparent.
- **Labels:** 14px, 500 weight, above the field. Optional fields say "(optional)"; required fields carry no marker.
- **Status:** a live region under the submit button, focused on completion, with the email address inside every error.

### Navigation
- **Style:** wordmark left, four label-size links right, the last one outlined. Current page turns Signal Lavender via `aria-current`. All links 44px tall.
- **Mobile:** wraps to a second row under the wordmark with links spread edge to edge. No menu, no hiding.

### Lists
- **Hairline rows:** process steps, design-work entries, and case-study features are rows with a Line border beneath, a 22px heading and body copy, never boxed.

### Signal Wave (signature)
Sixty stroked paths in a horizontal lavender gradient forming a slow standing wave, server-rendered and revealed left to right by a CSS clip-path over 2.1 seconds. After the reveal, JavaScript drifts the strands every 48ms while the sculpture is on screen and the tab is visible. Reduced motion shows the full static drawing. It appears once, in the hero, and is never reused as decoration.

## Do's and Don'ts

### Do:
- **Do** use Signal Lavender only where the message is: one headline line, links, the current page, the waveform.
- **Do** build structure from hairlines and tonal steps. Reach for a shadow only for the hero button or a screenshot mount.
- **Do** keep every text size at or above 13px and every tap target at or above 44px.
- **Do** show real client screenshots inside the Frame mount. Label anything that is not delivered client work.
- **Do** write in Davey's first person: plain, direct, contractions, no jargon.
- **Do** keep the wordmark as an SVG asset and Alegreya Sans for everything else.

### Don't:
- **Don't** add icon-plus-heading cards, stat counters, gradient text, or an eyebrow over every section.
- **Don't** introduce a second accent color, pure black, or a neutral gray that lacks the ground's blue.
- **Don't** animate anything other than the waveform, hover lifts, and press tints.
- **Don't** publish prices, phone numbers, testimonials without permission, or a placeholder where a photo should be.
- **Don't** use the ↗ glyph on internal links; it is reserved for links that leave the site.
