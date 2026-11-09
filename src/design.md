## Overview

The personal brand of Davide Imola, a builder of AI agents for security who writes mostly Go and shares what he learns. Two inks on a warm paper ground, one red, and three graphic elements: the marker, the tape and the rule. Human, not enterprise. Precise, never cold. Light is the default everywhere; the site also has a full dark theme. Slides and print are always light.

The full guidelines live in `docs/brand.md` of the `@davideimola/brand` package. This file is generated from `tokens/tokens.json`: in code, never copy a value from here. Import the package and use its roles (`bg-surface`, `text-fg`, `var(--di-accent)`).

## Colors

The colour tokens are roles, named as in code. `bg` is the ground, `fg` the ink, `fg-body` running text, `fg-muted` secondary text, `fg-subtle` meta, `border` the hairline between rows, `rule` the line that opens a section, `surface` code blocks and cards. The `dark-` tokens are the same roles in the dark theme.

- **Accent (akane, #C91F37):** the only red. It belongs to the knot of the mark and to the marker, nothing else. On the dark theme it becomes akane-night (#E0475C).
- **Ink (#1C2233) on paper (#F7F5F0):** everything else. Hierarchy comes from weight and size, not from more colours.
- **Tape (`tape-bg`, `tape-fg`):** ink tape with paper letters, never red.

## Typography

Schibsted Grotesk for titles and all running text, IBM Plex Mono for code, metadata, dates and small labels, Barlow Condensed bold uppercase for tape labels only. Titles are tight (negative tracking); body text is loose (line height 1.7) in a reading column of about 700px.

## Layout

A 1px hairline and plenty of white space are the only dividers. No boxes around sections, no shadows. Cards, photos and blocks are always straight; only the tape tilts.

## Shapes

Small radii: 3px for the tape and small controls, 6px for cards and code blocks. Drawings are monoline line art in ink, with round caps and joins and exactly one red detail.

## Components

- **Marker:** one rough red stroke per page, under the word that matters most, with the letters cutting through it (skip-ink). It is the only large red gesture on a page.
- **Tape:** a label-maker tape for sections and content types ("WRITING", "TALK"). Ink, flat, radius 3px, slightly tilted, and the tilt alternates. One tape per block.
- **Rule:** the hairline. `rule` opens a section, the lighter `border` separates rows inside it.
- **Code block:** on `surface`, with a 1px `border`. In code, keywords may be red: code is the one place where colour carries meaning instead of identity.

## Do's and Don'ts

- Do take every colour from a role token. Don't write a hex, `rgb()`, a Tailwind palette class (`text-green-600`) or an arbitrary value (`bg-[#…]`).
- Do keep red for the knot and the marker. Don't make red buttons, red tape, red backgrounds or red links at rest (a link may turn red on hover).
- Do use one marker per page. Don't stack tapes or tilt them all the same way.
- Do write copy in English, in the first person, plainly. Don't use em dashes.
- Don't add kanji, kana or any decorative script. The brand once had them; nobody here can read them.
- Don't add colours, gradients, shadows or glow. If something needs emphasis, it gets the marker or nothing.
