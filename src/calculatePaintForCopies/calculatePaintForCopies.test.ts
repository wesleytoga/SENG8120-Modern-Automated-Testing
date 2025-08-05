import calculatePaintForCopies from './calculatePaintForCopies';

describe('calculatePaintForCopies', () => {
  test('should calculate paint required for given number of copies', () => {
    const length = 3;
    const width = 2;
    const copies = 5000;
    const coveragePerLiter = 11.4;
    const artworkArea = 7;
    const totalArea = artworkArea * copies;
    const expectedPaint = totalArea / coveragePerLiter;
    
    expect(calculatePaintForCopies(length, width, copies, coveragePerLiter)).toBeCloseTo(expectedPaint, 2);
  });

  test('should handle single copy', () => {
    const length = 3;
    const width = 2;
    const copies = 1;
    const coveragePerLiter = 11.4;
    const expectedPaint = 7 / coveragePerLiter;
    
    expect(calculatePaintForCopies(length, width, copies, coveragePerLiter)).toBeCloseTo(expectedPaint, 2);
  });

  test('should handle different dimensions and coverage', () => {
    const length = 6;
    const width = 4;
    const copies = 100;
    const coveragePerLiter = 10;
    const artworkArea = 28;
    const expectedPaint = (artworkArea * copies) / coveragePerLiter;
    
    expect(calculatePaintForCopies(length, width, copies, coveragePerLiter)).toBe(expectedPaint);
  });
});