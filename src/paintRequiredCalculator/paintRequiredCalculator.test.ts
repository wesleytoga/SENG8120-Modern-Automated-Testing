import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test("should handle division by zero", () => {
    const result = paintRequiredCalculator(100, 0);
    expect(result).toBe(Infinity);
  });

  test("should handle negative values", () => {
    const result = paintRequiredCalculator(-50, 10);
    expect(result).toBe(-5);
  });
});
