import calculateCanvasPerimeter from './calculateCanvasSize';

describe('calculateCanvasPerimeter', () => {
  test('returns correct result', () => {
    const result = calculateCanvasPerimeter('10', '100');

    expect(result).toEqual(220);
  });

  test('should handle edge cases', () => {
    expect(calculateCanvasPerimeter('0', '0')).toEqual(0);
    expect(calculateCanvasPerimeter('5', '0')).toEqual(10);
    expect(calculateCanvasPerimeter('0', '5')).toEqual(10);
  });

  test('should handle invalid input', () => {
    expect(calculateCanvasPerimeter('abc', '5')).toBeNaN();
    expect(calculateCanvasPerimeter('5', 'xyz')).toBeNaN();
    expect(calculateCanvasPerimeter('', '')).toBeNaN();
  });

  test('should handle negative values', () => {
    expect(calculateCanvasPerimeter('-5', '10')).toEqual(10);
    expect(calculateCanvasPerimeter('5', '-10')).toEqual(-10);
  });
});
