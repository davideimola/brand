# Brand guidelines

The identity of Davide Imola: builder of AI agents for security who writes mostly Go, sharing everything learned along the way. This file is the reference for anyone (person or agent) applying the brand to the site, slides, social cards or anything else. Values live in `tokens/tokens.json`; this file explains how to use them.

## Positioning

- **Line:** "I build AI agents for security, and the tools I need along the way. Everything I learn, I share."
- **Short line:** "Builder. AI agents for security. Mostly Go. Learning in public."
- **Motto:** "What you learn, you must share." Sharing is the tone of everything, not a section.
- Human, not enterprise. Precise, never cold. Never "security expert", never "AI hype", never "manager who stopped coding".
- Builder framing: "here is what I built and what happened", never "here is what you should do".

## Voice

How the brand sounds, everywhere: blog, LinkedIn, newsletter, talks, the site's own copy. The visual system is two inks and three elements; the voice is the same restraint in words. It is the same in English and in Italian, and it does not change by channel: only the length does.

### Four traits

**A colleague over coffee.** First person, talking to one person who does the same work. Not a speaker addressing a crowd, not a brand addressing customers.

- Yes: "I'm a talker. I do my best thinking out loud."
- No: "Many developers find that thinking out loud improves clarity."

**Opinions without hedging.** Say what you think, then why. State the limits once, plainly, instead of softening every sentence.

- Yes: "I don't like ORMs in Go."
- No: "Some developers may prefer to avoid ORMs in certain contexts."

**Specific, or cut it.** Names, tools, numbers, dates, the actual mistake. A sentence that could be about anyone is not about you.

- Yes: "I had the core of Worky working in one weekend. Then a few evenings: three, maybe four days of actual work in total."
- No: "With AI, building tools has become dramatically faster."

**Honest about what broke.** Under the motto, what went wrong is the most useful thing to share. Tell it plainly, without drama and without spin. Humour is welcome when it is dry and does not try.

- Yes: "Worky is built. It works. I haven't touched it in months, and I don't use it."
- Yes: "I don't speak Japanese. I removed the kanji."
- No: "Every failure is a learning opportunity!"

### Shape

- Open on the thing itself: a fact, a scene, a contradiction. Never on what the piece is about to do.
- Short paragraphs. A key point may stand alone on one line.
- Connected prose over lists: each sentence leads into the next. Bullets are for genuine enumerations (commands, a handful of features), never for chopping an argument.
- One call to action per piece.
- Close clean: the last point, or one question you genuinely want answered. No summary, no formula question ("How do you handle X?").

### Words

- **Never em dashes.** Use a comma, a colon, parentheses or a full stop. An en dash in a range (2022–2026) is typography, not punctuation, and stays.
- **Never these:** delve, leverage, seamlessly, game-changer, unlock, "it's worth noting", "let's dive in", "in this article we'll explore", "in conclusion", "passionate about", "thought leader", "security expert".
- **No subjectless passives:** "It is important to understand that…", "Security improves when…". Someone does something.
- **No signpost triads** ("it has to be fast, local and simple") as a reflex. Three things only when there are exactly three.
- **Emoji:** at most one, as a wink. Never as bullets or decoration.
- Plain verbs (build, ship, break, learn, share) and the real name of the tool.

### The test

Read a paragraph back. If any AI could have written it, about any topic, rewrite it.

## The mark

A `d` and an `i` drawn as a git graph. The bowl of the `d` is a commit, its stem is a branch that merges into a straight `i`, and the merge is tied with a red knot, the knot of a martial arts belt. Two readings, one sign: a merge for whoever writes code, a knot for whoever knows the mat.

### Three cuts

The same drawing at three weights. Never shrink the large cut below its range: switch cut instead.

| Cut | Rendered height | What it has | File |
|-----|-----------------|-------------|------|
| L | 96 px and up | thin strokes, one tail leaving the knot | `assets/svg/mark-l.svg` |
| M | 40 to 95 px | heavier strokes, the tail stays | `assets/svg/mark-m.svg` |
| S | 39 px and below | heavy strokes, big knot, no tail | `assets/svg/mark-s.svg` |

Every file comes in three colourways: default (ink on paper), `-dark` (chalk on night) and `-mono` (all `currentColor`, for single-colour contexts).

### Rules

- The knot is always red: `akane` on paper, `akane-night` on night. Only the `-mono` files drop it, and only where colour is impossible.
- Never put the mark behind a photo or behind text. It is a sign, not a texture.
- Never add a commit ring or any decoration to the `i`.
- Minimum size: 16 px (the S cut).
- Clear space: one knot width on every side.

## The wordmark

"davide imola" in lowercase, drawn with the mark's own rules: monoline strokes with round ends, bowls as circles, and the dots of both `i`s are red knots, so the mark repeats inside the name.

- `assets/svg/wordmark.svg`: regular stroke, for large sizes (wordmark at 300 px wide and up).
- `assets/svg/wordmark-bold.svg`: heavy stroke, for nav bars, slide footers, anything small.
- Lockups: `lockup.svg` (L mark + regular wordmark) and `lockup-small.svg` (S mark + bold wordmark).
- The wordmark is never typeset in a font. Use the SVG.

## Colour

Two inks on a light ground, plus a night theme. Exact values in `tokens/tokens.json`.

| Role | Light | Dark |
|------|-------|------|
| Ground (`bg`) | paper `#F7F5F0` | night `#13151C` |
| Ink (`fg`) | ink `#1C2233` | chalk `#ECE9E2` |
| Body text (`fg-body`) | `#2A3042` | `#D6D3CC` |
| Secondary (`fg-muted`) | `#3B4152` | `#B4B2AC` |
| Meta (`fg-subtle`) | `#5B6070` | `#8E8C86` |
| Hairlines (`border`) | `#DEDCD5` | `#2C3040` |
| The rule (`rule`) | pencil `#94969B` | `#757475` |
| Code surface (`surface`) | `#FFFFFF` | `#1B1E27` |
| Accent (`accent`) | akane `#C91F37` | `#E0475C` |

**The red rule.** Red belongs to the knot and the marker, nothing else. No red buttons, no red tape, no red backgrounds, no red links at rest. A link may turn red on hover. In code, keywords may be red: code is the one place where colour carries meaning instead of identity.

Light is the default everywhere. Dark is a full theme for the site (system preference or toggle). Slides and print are always light.

## Typography

| Role | Family | Use |
|------|--------|-----|
| `sans` | Schibsted Grotesk | titles and all running text |
| `mono` | IBM Plex Mono | code, metadata, dates, small labels |
| `label` | Barlow Condensed, bold, uppercase | tape labels only |

All three are on Google Fonts under the OFL. Scale (size / line-height / tracking): display 80/0.98/-0.045em, h1 64/1.02/-0.045em, h2 32/1.15/-0.03em, h3 24/1.2/-0.025em, lead 22/1.5, body 19/1.7, small 15/1.5, mono 14/1.6, label 15 caps with 0.12em tracking.

## The three elements

The system has three graphic elements and nothing else.

### 1. The marker

One rough red stroke per page, under the word that matters most. It is the only large red gesture on a page.

- Drawn as an SVG path with a slight turbulence (`feTurbulence` baseFrequency 0.7, `feDisplacementMap` scale 4), round caps, thickness about 0.19em of the marked text, sitting just under the baseline.
- **Skip-ink:** the marked word sits above the stroke with a paper-coloured halo (about 0.06em), so the letters cut through the red and stay fully legible. Never print the stroke over the letters.
- One per page. In a long article, at most one, on the sentence that carries the piece.
- In motion: it may draw itself from left to right once (about 500 ms) on first load, and appear under a card title on hover. Always respect `prefers-reduced-motion`.

### 2. The tape

Label-maker tape for sections ("WRITING", "BUILT BY ME", "TALKS") and content types ("ESSAY", "TALK").

- Ink tape with paper letters (chalk tape with night letters on dark). Never red.
- Flat: no emboss, no inner shadows. Radius 3px, padding about 0.27em by 0.67em, Barlow Condensed bold uppercase, 0.12em tracking.
- Slightly tilted, and the tilt alternates (-1deg, 1deg, -0.5deg). Never tilt every tape the same way.
- Tapes sit on things that are straight. Cards, photos and blocks are never rotated.
- One tape per block. Never stack them.

### 3. The rule

A 1px hairline and plenty of white space. That is the only divider. It comes in two weights: the rule (`rule`, pencil: ink at 45% over the ground) opens a section, heads a table or closes a header; the lighter hairline (`border`) separates the rows inside it. Full ink is too loud for a line that repeats down a page, and the rule must stay darker than the hairline so a section still reads apart from a row. Slides keep the rule in full ink: a projector washes out pencil, and projection needs the contrast. The git graph lives in the mark; it is not a decoration. The one exception is the slide progress bar (see Slides), where the graph has a job.

## Drawings

Illustrations (blog covers, slide diagrams, page drawings) are monoline line art in ink on the paper ground, drawn with the mark's stroke rules: round caps and joins, one stroke weight per drawing, and exactly one red detail. Light ground only: no dark scenes, no glow, no photographs.

- **In motion:** a drawing may draw itself once (about 1.2s): the ink lines trace in together, the ink fills fade in as they finish, and the red detail lands last, like a signature. Never looping.
- **In steps:** a diagram on a slide may draw one part per click, the red detail on the part that carries the point.
- Reduced motion shows each part at once when it is due; print and no-JavaScript show it drawn.
- `prepareDrawSvg` and `draw.css` (`@davideimola/brand/draw`) implement this; each consumer wraps them in its own component.

## Photography

Portraits are black and white (`grayscale(1)`), cropped tight, never with the mark over them. A tape label may sit on the photo's edge. On hover, the site may reveal colour.

## Site

- Navigation: S mark plus bold wordmark, links in `sans`, the current page in ink with a 2px underline.
- Home: display headline with the marker on "security", lead line, one filled ink button plus one text link, location in mono; portrait on the right aligned to the headline block; three cards with tape: WRITING (latest post, always present), BUILDING (active project, always present), and a rotating slot that shows the next talk if one is scheduled, otherwise the last talk with its recording, otherwise what is being read. A slot never renders empty.
- Article: h1 in `sans`, lead, mono meta line, hairline, 700px reading column, one marker in the whole piece, quotes set large with a small ink square instead of a side bar, code blocks on `surface` with a 1px `border`.
- Footer: S mark with name and place, the personal pages and the profiles in mono. No newsletter form: the newsletter is asked for on the pages, where the reader already is.

## Slides

- Always light. Body text at least 24px, code at least 22px, at most 14 lines of code per slide.
- Title slide: tape with the event, display title with one marker stroke, L mark top right, hairline, wordmark and role at the bottom.
- Content slides: tape with the section ("03 · AGENTS"), title, content, and a footer with the S mark, the bold wordmark and the progress bar.
- **Progress bar:** a thin graph line across the footer with small commit rings for the sections and the red knot at the current position. This is the only place outside the mark where the graph appears.

## Social cards

Light ground, tape with the content type, the title large, wordmark and URL at the bottom. An optional L mark watermark is tone-on-tone only, knot included, so the title stays the loudest thing on the card.

## Files

```
tokens/tokens.json     source of truth (W3C design tokens format)
dist/css/tokens.css    CSS custom properties (--di-*), light, dark and print
dist/css/tailwind.css  Tailwind v4 @theme mapping on top of tokens.css
dist/tokens.json       resolved, flat values for scripts
dist/tokens.mjs        the same as an ES module
assets/svg/            mark (l, m, s), wordmark (regular, bold), lockups, favicon, avatar
assets/png/            raster exports for places that cannot take SVG
```

Edit `tokens/tokens.json` or `src/geometry.mjs`, then run `pnpm build`. Never edit `dist/` or `assets/` by hand.
