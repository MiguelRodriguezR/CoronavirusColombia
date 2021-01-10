export const COLOR_LIMITS = {
  mins: {r: 100, g: 30, b: 126},
  maxs: {r: 255, g: 30, b: 126}
};

export function calculateColor(casesIndex, maxCases, minCases) {
  const max = maxCases - minCases;
  const percentage = (casesIndex - minCases) / max;
  const r = COLOR_LIMITS.mins.r +  ((COLOR_LIMITS.maxs.r - COLOR_LIMITS.mins.r) * percentage);
  const g = COLOR_LIMITS.mins.g +  ((COLOR_LIMITS.maxs.g - COLOR_LIMITS.mins.g) * percentage);
  const b = COLOR_LIMITS.mins.b +  ((COLOR_LIMITS.maxs.b - COLOR_LIMITS.mins.b) * percentage);
  return `rgb(${r},${g},${b})`;
}
