import calculateCanvasSize from "../calculateCanvasSize/calculateCanvasSize";
import paintRequiredCalculator from "../paintRequiredCalculator/paintRequiredCalculator";

describe("Canvas to Paint Integration", () => {
  test("should calculate paint requirements from canvas area", () => {
    const length = "10";
    const width = "12";
    const coveragePerLiter = 15;

    const canvasArea = calculateCanvasSize(length, width);
    const paintRequired = paintRequiredCalculator(canvasArea, coveragePerLiter);

    expect(canvasArea).toBe(120);
    expect(paintRequired).toBe(8);
  });
});
