import assert from "node:assert/strict";
import { test } from "node:test";
import { prepareDrawSvg } from "../src/draw.mjs";

const INK = "#1C2233";
const RED = "#C91F37";
const PAPER = "#F7F5F0";
const prep = (svg) => prepareDrawSvg(svg, [RED], PAPER);

test("leaves the paper ground alone", () => {
  const svg = `<svg><rect width="1600" height="900" fill="${PAPER}"/></svg>`;
  assert.equal(prep(svg), svg);
});

test("makes the shapes of a stroked group drawable", () => {
  const out = prep(`<svg><g fill="none" stroke="${INK}"><path d="M0 0 L1 1"/><circle r="3"/></g></svg>`);
  assert.ok(out.includes('<path d="M0 0 L1 1" pathLength="1" data-draw=""/>'));
  assert.ok(out.includes('<circle r="3" pathLength="1" data-draw=""/>'));
  assert.ok(!out.includes("data-accent"));
});

test("sends the red detail last, filled or stroked", () => {
  const out = prep(`<svg><circle r="15" fill="${RED}"/><g fill="none" stroke="${RED}"><path d="M1 1"/></g></svg>`);
  assert.ok(out.includes(`<circle r="15" fill="${RED}" data-fill="" data-accent=""/>`));
  assert.ok(out.includes('<path d="M1 1" pathLength="1" data-draw="" data-accent=""/>'));
});

test("keeps a paper fill as a mask but still draws its outline", () => {
  const out = prep(`<svg><rect width="9" fill="${PAPER}"/><g stroke="${INK}"><rect width="4" fill="${PAPER}"/></g></svg>`);
  assert.ok(out.includes(`<rect width="4" fill="${PAPER}" pathLength="1" data-draw=""/>`));
  assert.ok(!out.includes(`fill="${PAPER}" pathLength="1" data-draw="" data-fill`));
});

test("matches colours whatever their case", () => {
  assert.ok(prep(`<svg><circle fill="#c91f37"/></svg>`).includes("data-accent"));
});

test("leaves step groups as they are, so a consumer can reveal them", () => {
  const out = prep(`<svg><g data-step="2" stroke="${INK}"><line x2="9"/></g></svg>`);
  assert.ok(out.includes('<g data-step="2" stroke="#1C2233">'));
  assert.ok(out.includes('<line x2="9" pathLength="1" data-draw=""/>'));
});
