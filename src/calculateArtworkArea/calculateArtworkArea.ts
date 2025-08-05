import calculateCanvasSize from '../calculateCanvasSize/calculateCanvasSize';
import calculateTriangleArea from '../calculateTriangleArea/calculateTriangleArea';

export default function calculateArtworkArea(length: number, width: number): number {
  const rectangleArea = calculateCanvasSize(length.toString(), width.toString());
  const triangleArea = calculateTriangleArea(length, width);
  return rectangleArea + triangleArea;
}