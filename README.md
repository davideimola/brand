# brand

Design tokens, mark, wordmark and guidelines for Davide Imola's personal brand. One source of truth shared by [davideimola.dev](https://github.com/davideimola/davideimola.dev) and the Slidev theme in [presentations](https://github.com/davideimola/presentations).

- **Guidelines:** [`docs/brand.md`](docs/brand.md)
- **Tokens:** [`tokens/tokens.json`](tokens/tokens.json) (W3C design tokens format)
- **Assets:** [`assets/svg`](assets/svg) and [`assets/png`](assets/png)

## Use it

CSS custom properties, light and dark:

```css
@import "@davideimola/brand/tokens.css";

body {
  background: var(--di-bg);
  color: var(--di-fg-body);
  font-family: var(--di-font-family-sans);
}
```

Tailwind v4 (adds `bg-bg`, `text-fg`, `text-accent`, `bg-tape-bg`, `font-label`, and so on):

```css
@import "tailwindcss";
@import "@davideimola/brand/tailwind.css";
```

Install it from the repository until it is worth publishing:

```sh
pnpm add github:davideimola/brand
```

## Change it

Edit `tokens/tokens.json` or `src/geometry.mjs`, then:

```sh
pnpm install
pnpm build
```

`dist/` and `assets/` are generated and committed, so consumers never need to build. Never edit them by hand.

## License

The mark, wordmark and lockups in `assets/` are licensed under [CC BY-ND 4.0](LICENSE-ASSETS.md). The tokens, scripts and documentation are [MIT](LICENSE).
