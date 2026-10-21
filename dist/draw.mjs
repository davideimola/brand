// Prepares a drawing (an SVG in the brand's line style) to draw itself: monoline
// ink strokes trace in, ink fills fade in as they finish, and the one red detail
// lands last. Pure and import-free, so any framework can use it on a string.
//
// Each drawable element is tagged for draw.css (`.draw`):
//   data-draw    a stroked shape: gets pathLength="1" so its dash can run 0 to 1
//   data-fill    a shape filled with ink or red: fades in instead
//   data-accent  red, by its own colour or its group's: comes after the rest
// The background rect and the paper-coloured fills (they mask what is behind
// them) are left alone, so they are there from the first frame.
//
// A drawing can also be revealed in steps (a slide, one click at a time): wrap
// each step in <g data-step="1">, <g data-step="2">... and set data-drawn on the
// steps that are due. Setting data-drawn on the .draw element draws it all.

const SHAPES = new Set(["path", "circle", "ellipse", "rect", "line", "polyline", "polygon"]);

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]?.toLowerCase();

/**
 * @param {string} svg the drawing's markup
 * @param {string[]} accents the red values that mark the accent (light and night)
 * @param {string} paper the ground colour: fills of this colour are masks, not ink
 * @returns {string} the same markup, tagged for draw.css
 */
export function prepareDrawSvg(svg, accents, paper) {
  const accent = new Set(accents.map((c) => c.toLowerCase()));
  const ground = paper.toLowerCase();
  // The stroke and fill a shape inherits from the <g> elements around it.
  const stack = [];
  let backgroundSeen = false;

  return svg.replace(/<(\/?)([a-z]+)\b([^>]*?)(\/?)>/g, (tag, close, name, rest, selfClose) => {
    if (name === "g") {
      if (close) stack.pop();
      else if (!selfClose) stack.push({ stroke: attr(tag, "stroke"), fill: attr(tag, "fill") });
      return tag;
    }
    if (close || !SHAPES.has(name)) return tag;

    const inherited = (key) => [...stack].reverse().find((g) => g[key] !== undefined)?.[key];
    const stroke = attr(tag, "stroke") ?? inherited("stroke");
    const fill = attr(tag, "fill") ?? inherited("fill");

    // The first full-bleed rect is the paper ground.
    if (name === "rect" && !backgroundSeen && !stroke) {
      backgroundSeen = true;
      return tag;
    }

    const marks = [];
    if (stroke && stroke !== "none") marks.push('pathLength="1" data-draw=""');
    if (fill && fill !== "none" && fill !== ground) marks.push('data-fill=""');
    if ((stroke && accent.has(stroke)) || (fill && accent.has(fill))) marks.push('data-accent=""');
    if (marks.length === 0) return tag;

    return `<${name}${rest} ${marks.join(" ")}${selfClose}>`;
  });
}
