/**
 * Tags a drawing in the brand's line style so draw.css can draw it: strokes
 * trace in, ink fills fade in, and the red accent lands last.
 *
 * @param svg the drawing's markup
 * @param accents the red values that mark the accent (light and night)
 * @param paper the ground colour: fills of this colour are masks, not ink
 */
export declare function prepareDrawSvg(svg: string, accents: string[], paper: string): string;
