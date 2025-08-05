export default function calculateTriangleArea(rectangleLength: number, rectangleWidth: number): number {
  const base = rectangleLength / 3;
  const height = rectangleWidth;
  return (base * height) / 2;
}