import calculatePaintForCopies from "./calculatePaintForCopies/calculatePaintForCopies";

function main() {
  const length = 3;
  const width = 2;
  const copies = 5000;
  const coveragePerLiter = 11.4;

  const paintRequired = calculatePaintForCopies(length, width, copies, coveragePerLiter);

  console.log(`${paintRequired.toFixed(2)} liters of paint required for ${copies} copies of ${length}m x ${width}m artwork.`);
}

main();
