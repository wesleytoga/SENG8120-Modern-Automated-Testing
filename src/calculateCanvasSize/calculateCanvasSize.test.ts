import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  });

  test("should return zero when length is zero", () => {
    const length = "0";
    const width = "10";

    const result = calculateCanvasSize(length, width);

    expect(result).toBe(0);
  });
});
