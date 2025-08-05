import calculateArtworkArea from '../calculateArtworkArea/calculateArtworkArea';

export default function calculatePaintForCopies(
  length: number,
  width: number,
  copies: number,
  coveragePerLiter: number
): number {
  const singleArtworkArea = calculateArtworkArea(length, width);
  const totalArea = singleArtworkArea * copies;
  return totalArea / coveragePerLiter;
}