export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  const l = Math.abs(parseInt(length));
  const w = Math.abs(parseInt(width));
  return Math.sqrt(l * l + w * w);
}
