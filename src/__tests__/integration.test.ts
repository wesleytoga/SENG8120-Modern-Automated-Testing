import calculateTriangleArea from '../calculateTriangleArea/calculateTriangleArea';
import calculateArtworkArea from '../calculateArtworkArea/calculateArtworkArea';
import calculatePaintForCopies from '../calculatePaintForCopies/calculatePaintForCopies';

describe('Integration Tests for Paint Calculator', () => {
  test('should calculate basic artwork dimensions', () => {
    const length = 3;
    const width = 2;
    
    const triangleArea = calculateTriangleArea(length, width);
    const totalArea = calculateArtworkArea(length, width);
    
    expect(triangleArea).toBe(1);
    expect(totalArea).toBe(7);
  });

  test('should calculate paint for assignment scenario', () => {
    const length = 3;
    const width = 2;
    const copies = 5000;
    const coverage = 11.4;
    
    const paintNeeded = calculatePaintForCopies(length, width, copies, coverage);
    
    expect(paintNeeded).toBe(3070);
  });
});