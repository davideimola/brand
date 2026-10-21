<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/svg/lockup-dark.svg">
    <img src="assets/svg/lockup.svg" alt="Davide Imola" width="520">
  </picture>
</p>

<p align="center"><b>I build AI agents for security, and the tools I need along the way.<br>Everything I learn, I share.</b></p>

<p align="center">
  <a href="docs/brand.md">Guidelines</a> ·
  <a href="tokens/tokens.json">Tokens</a> ·
  <a href="assets/svg">Assets</a> ·
  <a href="https://davideimola.dev">davideimola.dev</a>
</p>

---

This is the brand behind [davideimola.dev](https://davideimola.dev) and my talks: one source of truth for colours, type, the mark and the rules that hold them together. The site and the slides both install it, so a change here reaches everything.

## The mark

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/images/cuts-dark.svg">
  <img src="docs/images/cuts.svg" alt="The mark in its three cuts" width="420">
</picture>

A `d` and an `i` drawn as a git graph. The bowl of the `d` is a commit, its stem is a branch merging into a straight `i`, and the merge is tied with a red knot, the knot of a martial arts belt. A merge for whoever writes code, a knot for whoever knows the mat.

It comes in three cuts of the same drawing, so it never gets lost: **L** from 96 px, **M** from 40 px, **S** down to 16 px.

### Why this mark

The `d` and the `i` are my initials, and that is the point. This is not a company or an abstract idea, it is a person, so before anything else the mark had to be my name.

They are drawn as a git graph because branches are where I have lived for more than ten years: writing them, merging them, building the pipelines that ship them. I am moving towards leadership now, and the graph is how I say the developer is still in there.

The knot comes from the mat. Last year I started Hontai Yoshin Ryu, a classical school of jujutsu founded around 1660. I am a yellow belt, so this is not a claim to know anything. It is a reminder of what the first year taught me. Knowing a technique is not the point; understanding why it exists is. The one who wins is not the strongest but the one who adapts, who reads the other person without ever losing their own centre. I thought it was a solo sport, and it turned out to be a team one: you learn from the people who have been there longer than you, and they are the humblest in the room.

A belt gets tied again at every training. That is the knot on the merge: growth that never ends, one session at a time.

## The name

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/svg/wordmark-dark.svg">
  <img src="assets/svg/wordmark.svg" alt="davide imola" width="420">
</picture>

Drawn with the mark's own rules: monoline strokes, round bowls, and both `i`s dotted with the red knot.

## Colour and type

<img src="docs/images/palette.svg" alt="Palette" width="420">

| | Light | Dark |
|---|---|---|
| Ground | `#F7F5F0` paper | `#13151C` night |
| Ink | `#1C2233` | `#ECE9E2` chalk |
| Accent | `#C91F37` akane | `#E0475C` |

**Red belongs to the knot and the marker, nothing else.**

Type is [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) for everything you read, [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) for code and metadata, and [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) for one thing only: the label-maker tape on sections.

The full system (the marker, the tape, the rule, the site and slide layouts) is in [`docs/brand.md`](docs/brand.md).

## Use it

```sh
pnpm add github:davideimola/brand
```

Plain CSS, light and dark themes included:

```css
@import "@davideimola/brand/tokens.css";

body {
  background: var(--di-bg);
  color: var(--di-fg-body);
  font-family: var(--di-font-family-sans);
}
```

Tailwind v4 (`bg-bg`, `text-fg`, `text-accent`, `bg-tape-bg`, `font-label`, and so on):

```css
@import "tailwindcss";
@import "@davideimola/brand/tailwind.css";
```

Scripts can read `@davideimola/brand/tokens.json` or import `@davideimola/brand/tokens`.

Drawings in the brand's line style can draw themselves. `prepareDrawSvg` tags the shapes of an SVG string and `draw.css` animates them, in any framework:

```js
import { prepareDrawSvg } from "@davideimola/brand/draw";
import "@davideimola/brand/draw.css";

const html = prepareDrawSvg(svg, ["#C91F37", "#E0475C"], "#F7F5F0");
// Render html inside an element with class="draw", then set data-drawn on it
// to draw it all, or on its <g data-step> groups to draw one step at a time.
```

## Change it

Edit `tokens/tokens.json`, `src/geometry.mjs` or `src/draw.*`, then:

```sh
pnpm install
pnpm build
```

`dist/`, `assets/` and `docs/images/` are generated and committed, so consumers never build anything. Never edit them by hand.

## License

The mark, the name and the lockups in `assets/` are [CC BY-ND 4.0](LICENSE-ASSETS.md): use them as they are to refer to me, in event pages, programs, articles. Don't redraw or recolour them. Tokens, scripts and docs are [MIT](LICENSE).
