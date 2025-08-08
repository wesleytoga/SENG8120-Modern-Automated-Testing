import calculateTriangleArea from '../calculateTriangleArea/calculateTriangleArea';
import calculateArtworkArea from '../calculateArtworkArea/calculateArtworkArea';
import calculatePaintForCopies from '../calculatePaintForCopies/calculatePaintForCopies';

describe('Paint Calculator Integration Tests', () => {
  test('should calculate correct triangle and total area for basic dimensions', () => {
    const length = 3;
    const width = 2;
    
    const triangleArea = calculateTriangleArea(length, width);
    const totalArea = calculateArtworkArea(length, width);
    
    expect(triangleArea).toBe(1);
    expect(totalArea).toBe(7);
  });

  test('should calculate paint required for the main assignment scenario (5000 copies)', () => {
    const length = 3;
    const width = 2;
    const copies = 5000;
    const coverage = 11.4;
    
    const paintNeeded = calculatePaintForCopies(length, width, copies, coverage);
    
    expect(paintNeeded).toBeCloseTo(3070.18, 2);
  });

  test('should handle smaller artwork with fewer copies', () => {
    const length = 2;
    const width = 1;
    const copies = 10;
    const coverage = 5;
    
    const triangleArea = calculateTriangleArea(length, width);
    const totalArea = calculateArtworkArea(length, width);
    const paintNeeded = calculatePaintForCopies(length, width, copies, coverage);
    
    expect(triangleArea).toBeCloseTo(0.33, 1);
    expect(totalArea).toBeCloseTo(2.33, 1);
    expect(paintNeeded).toBeCloseTo(4.67, 1);
  });

  test('should handle large artwork dimensions with calculated expectations', () => {
    const length = 10;
    const width = 8;
    const copies = 100;
    const coverage = 12;
    
    const triangleArea = calculateTriangleArea(length, width);
    const totalArea = calculateArtworkArea(length, width);
    const paintNeeded = calculatePaintForCopies(length, width, copies, coverage);
    
    const expectedTriangleArea = (10/3 * 8) / 2;
    const expectedTotalArea = 80 + expectedTriangleArea;
    
    expect(triangleArea).toBeCloseTo(expectedTriangleArea, 2);
    expect(totalArea).toBeCloseTo(expectedTotalArea, 2);
    expect(paintNeeded).toBeCloseTo((expectedTotalArea * copies) / coverage, 2);
  });
});