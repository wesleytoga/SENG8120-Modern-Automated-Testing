import calculateCanvasSize from './calculateCanvasSize';
import paintRequiredCalculator from './paintRequiredCalculator';

function main(): void {
  try {
    const area = calculateCanvasSize('10', '20');
    const coveragePerLiter = 11.4;

    if (isNaN(area)) {
      console.error('Error: Invalid dimensions provided');
      return;
    }

    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);

    console.log(
      `${paintRequired.toFixed(2)} liters of paint is required to cover ${area} square units of canvas.`
    );
  } catch (error) {
    console.error('Error calculating paint requirements:', error);
  }
}

main();
