export default function calculateCanvasPerimeter(
  length: string,
  width: string
): number {
  const lengthNum = parseFloat(length);
  const widthNum = parseFloat(width);
  
  if (isNaN(lengthNum) || isNaN(widthNum)) {
    return NaN;
  }
  
  return 2 * (lengthNum + widthNum);
}
