import calculateTriangleArea from './calculateTriangleArea';

describe('calculateTriangleArea', () => {
  test('should calculate triangle area with base 1/3 of rectangle length', () => {
    const rectangleLength = 3;
    const rectangleWidth = 2;
    const expectedBase = rectangleLength / 3;
    const expectedHeight = rectangleWidth;
    const expectedArea = (expectedBase * expectedHeight) / 2;
    
    expect(calculateTriangleArea(rectangleLength, rectangleWidth)).toBe(expectedArea);
  });

  test('should handle decimal calculations correctly', () => {
    const rectangleLength = 6;
    const rectangleWidth = 4;
    const expectedBase = rectangleLength / 3;
    const expectedHeight = rectangleWidth;
    const expectedArea = (expectedBase * expectedHeight) / 2;
    
    expect(calculateTriangleArea(rectangleLength, rectangleWidth)).toBe(expectedArea);
  });

  test('should handle non-integer dimensions', () => {
    const rectangleLength = 3.6;
    const rectangleWidth = 2.4;
    const expectedBase = rectangleLength / 3;
    const expectedHeight = rectangleWidth;
    const expectedArea = (expectedBase * expectedHeight) / 2;
    
    expect(calculateTriangleArea(rectangleLength, rectangleWidth)).toBeCloseTo(expectedArea, 2);
  });
});