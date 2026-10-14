// Geometry of the mark and the wordmark, in SVG user units.
// Everything is drawn with round-capped strokes, no fonts involved,
// so the generated SVGs render identically everywhere.

// The mark lives in a 200 x 200 box. Three cuts of the same drawing:
// the d's bowl, the d's stem curving into a straight i, a red knot at
// the merge. L adds one tail leaving the knot; S drops it and thickens
// everything so it survives at 16 px.
export const MARK_VIEWBOX = "0 0 200 200";

export const markCuts = {
  l: {
    stroke: 14,
    i: "M142 166 V64",
    stem: "M104 166 V102 C104 78 118 66 136 61",
    bowl: { cx: 74, cy: 136, r: 28 },
    tail: { d: "M160 44 L180 30", width: 12 },
    knot: { x: 123, y: 34, w: 38, h: 35, rx: 7, rotate: "-6 142 51" },
  },
  m: {
    stroke: 20,
    i: "M144 168 V66",
    stem: "M104 168 V102 C104 76 120 64 138 60",
    bowl: { cx: 70, cy: 136, r: 27 },
    tail: { d: "M162 44 L182 30", width: 16 },
    knot: { x: 124, y: 32, w: 40, h: 38, rx: 7, rotate: "-6 144 51" },
  },
  s: {
    stroke: 32,
    i: "M150 174 V70",
    stem: "M100 174 V108 C100 80 120 64 144 60",
    bowl: { cx: 62, cy: 138, r: 24 },
    tail: null,
    knot: { x: 122, y: 22, w: 56, h: 52, rx: 10, rotate: "-6 150 48" },
  },
};

// The wordmark "davide imola": monoline geometric lowercase, bowls are
// circles, the dots of both i's are red knots. x-height 60, ascender 100.
export const WORDMARK_VIEWBOX = { regular: "-10 -10 666 122", bold: "-12 -12 670 126" };
export const WORDMARK_STROKE = { regular: 10, bold: 16 };

export const wordmarkStrokes = [
  { circle: { cx: 30, cy: 70, r: 30 } },
  { d: "M60 100 V0" },
  { circle: { cx: 106, cy: 70, r: 30 } },
  { d: "M136 100 V40" },
  { d: "M150 40 L174 100 L198 40" },
  { d: "M212 100 V40" },
  { circle: { cx: 258, cy: 70, r: 30 } },
  { d: "M288 100 V0" },
  { d: "M304 70 H364 A30 30 0 1 0 359.98 85" },
  { d: "M398 100 V40" },
  { d: "M418 100 V55 A15 15 0 0 1 448 55 V100 M448 55 A15 15 0 0 1 478 55 V100" },
  { circle: { cx: 524, cy: 70, r: 30 } },
  { d: "M570 100 V0" },
  { circle: { cx: 616, cy: 70, r: 30 } },
  { d: "M646 100 V40" },
];

export const wordmarkKnots = [
  { x: 203, y: 7, w: 18, h: 17, rx: 3.5, rotate: "-6 212 15" },
  { x: 389, y: 7, w: 18, h: 17, rx: 3.5, rotate: "-6 398 15" },
];
