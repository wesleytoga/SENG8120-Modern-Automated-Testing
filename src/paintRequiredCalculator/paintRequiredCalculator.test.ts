import paintRequiredCalculator from './paintRequiredCalculator';

describe('paint required calculator', () => {
  test('should return expected result for normal values', () => {
    expect(paintRequiredCalculator(50, 10)).toEqual(5);
    expect(paintRequiredCalculator(100, 20)).toEqual(5);
    expect(paintRequiredCalculator(75, 15)).toEqual(5);
  });

  test('should handle zero area', () => {
    expect(paintRequiredCalculator(0, 10)).toEqual(0);
    expect(paintRequiredCalculator(0, 0)).toEqual(0);
  });

  test('should handle zero coverage per liter', () => {
    expect(paintRequiredCalculator(50, 0)).toEqual(Infinity);
    expect(paintRequiredCalculator(100, 0)).toEqual(Infinity);
  });

  test('should handle decimal values', () => {
    expect(paintRequiredCalculator(25.5, 5.1)).toBeCloseTo(5);
    expect(paintRequiredCalculator(33.33, 11.11)).toBeCloseTo(3);
  });

  test('should throw error for negative area', () => {
    expect(() => paintRequiredCalculator(-10, 5)).toThrow(
      'Area and coverage per liter must be non-negative'
    );
  });

  test('should throw error for negative coverage per liter', () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrow(
      'Area and coverage per liter must be non-negative'
    );
  });

  test('should throw error for both negative values', () => {
    expect(() => paintRequiredCalculator(-25, -5)).toThrow(
      'Area and coverage per liter must be non-negative'
    );
  });
});
