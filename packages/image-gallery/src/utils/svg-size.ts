/* istanbul ignore file */

const SVG_HEADER_RE = /<svg\s[^>]+>/;
const SVG_WIDTH_RE = /[^-]\bwidth="([^%]+?)"|[^-]\bwidth='([^%]+?)'/;
const SVG_HEIGHT_RE = /\bheight="([^%]+?)"|\bheight='([^%]+?)'/;
const SVG_VIEWBOX_RE = /\bview[bB]ox="(.+?)"|\bview[bB]ox='(.+?)'/;
const SVG_UNITS_RE = /in$|mm$|cm$|pt$|pc$|px$|em$|ex$/;

// Filter NaN, Infinity, < 0
function isFinitePositive(val) {
  return typeof val === 'number' && isFinite(val) && val > 0;
}

function svgAttrs(str) {
  const width = str.match(SVG_WIDTH_RE);
  const height = str.match(SVG_HEIGHT_RE);
  const viewbox = str.match(SVG_VIEWBOX_RE);

  return {
    width: width && (width[1] || width[2]),
    height: height && (height[1] || height[2]),
    viewbox: viewbox && (viewbox[1] || viewbox[2]),
  };
}

function units(str) {
  if (!SVG_UNITS_RE.test(str)) return 'px';

  return str.match(SVG_UNITS_RE)[0];
}

interface Size {
  width: number;
  height: number;
}

export const svgSize = (svgStr: string): Size => {
  const attrs = svgAttrs(svgStr.match(SVG_HEADER_RE)[0]);
  const width = parseFloat(attrs.width);
  const height = parseFloat(attrs.height);

  // Extract from direct values

  if (attrs.width && attrs.height) {
    if (!isFinitePositive(width) || !isFinitePositive(height)) return;

    return {
      width,
      height,
    };
  }

  // Extract from viewbox

  const parts = (attrs.viewbox || '').split(' ');
  const viewbox = {
    width: parts[2],
    height: parts[3],
  };
  const vbWidth = parseFloat(viewbox.width);
  const vbHeight = parseFloat(viewbox.height);

  if (!isFinitePositive(vbWidth) || !isFinitePositive(vbHeight)) return;
  if (units(viewbox.width) !== units(viewbox.height)) return;

  const ratio = vbWidth / vbHeight;

  if (attrs.width) {
    if (!isFinitePositive(width)) return;

    return {
      width,
      height: width / ratio,
    };
  }

  if (attrs.height) {
    if (!isFinitePositive(height)) return;

    return {
      width: height * ratio,
      height,
    };
  }

  return {
    width: vbWidth,
    height: vbHeight,
  };
};
