import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate area correctly for positive values', () => {
    expect(calculateCanvasSize('10', '20')).toEqual(200);
    expect(calculateCanvasSize('5', '4')).toEqual(20);
    expect(calculateCanvasSize('100', '50')).toEqual(5000);
  });

  test('should handle zero values', () => {
    expect(calculateCanvasSize('0', '10')).toEqual(0);
    expect(calculateCanvasSize('10', '0')).toEqual(0);
    expect(calculateCanvasSize('0', '0')).toEqual(0);
  });

  test('should handle decimal values', () => {
    expect(calculateCanvasSize('2.5', '4')).toEqual(10);
    expect(calculateCanvasSize('3.14', '2')).toBeCloseTo(6.28);
  });

  test('should handle negative values', () => {
    expect(calculateCanvasSize('-5', '10')).toEqual(-50);
    expect(calculateCanvasSize('5', '-10')).toEqual(-50);
    expect(calculateCanvasSize('-5', '-10')).toEqual(50);
  });

  test('should handle invalid input', () => {
    expect(calculateCanvasSize('abc', '5')).toBeNaN();
    expect(calculateCanvasSize('5', 'xyz')).toBeNaN();
    expect(calculateCanvasSize('', '')).toBeNaN();
    expect(calculateCanvasSize('', '5')).toBeNaN();
    expect(calculateCanvasSize('5', '')).toBeNaN();
  });
});
