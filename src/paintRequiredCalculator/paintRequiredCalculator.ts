export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  if (area < 0 || coveragePerLiter < 0) {
    throw new Error('Area and coverage per liter must be non-negative');
  }

  if (coveragePerLiter === 0) {
    return area === 0 ? 0 : Infinity;
  }

  return area / coveragePerLiter;
}
