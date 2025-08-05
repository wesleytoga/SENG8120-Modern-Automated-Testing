import calculateArtworkArea from './calculateArtworkArea';

describe('calculateArtworkArea', () => {
  test('should calculate total area of rectangle plus triangle', () => {
    const length = 3;
    const width = 2;
    const rectangleArea = length * width;
    const triangleArea = (length / 3 * width) / 2;
    const expectedTotal = rectangleArea + triangleArea;
    
    expect(calculateArtworkArea(length, width)).toBe(expectedTotal);
  });

  test('should handle the example scenario dimensions', () => {
    const length = 3;
    const width = 2;
    const expectedTotal = 7;
    
    expect(calculateArtworkArea(length, width)).toBe(expectedTotal);
  });

  test('should handle decimal dimensions', () => {
    const length = 6;
    const width = 4;
    const rectangleArea = 24;
    const triangleArea = 4;
    const expectedTotal = 28;
    
    expect(calculateArtworkArea(length, width)).toBe(expectedTotal);
  });
});