import calculateTriangleArea from '../calculateTriangleArea/calculateTriangleArea';
import calculateArtworkArea from '../calculateArtworkArea/calculateArtworkArea';

describe('Integration Tests for Paint Calculator', () => {
  test('should calculate basic artwork dimensions', () => {
    const length = 3;
    const width = 2;
    
    const triangleArea = calculateTriangleArea(length, width);
    const totalArea = calculateArtworkArea(length, width);
    
    expect(triangleArea).toBe(1);
    expect(totalArea).toBe(7);
  });
});