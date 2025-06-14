# SENG8120 Modern Automated Testing 

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## List of Test cases for Assignment 2
### First Five (to be implemented)

##### calculateCanvasSize
1. Should return zero when length is zero
2. Should return zero when width is zero

##### paintRequiredCalculator
3. Should handle division by zero (returns Infinity)
4. Should handle negative values (returns negative result)

##### Integration Test (interaction between `CalculateCanvasSize.ts` and `paintRequiredCalculator.ts`)
5. Should calculate paint requirements from canvas area (calculated from string values of length and width)

### Last Five (not implemented)
##### calculateCanvasSize
6. should return zero when both length and width are zero

##### paintRequiredCalculator
7. should handle calculation of very small areas
8. should handle very high coverage per liter

##### Integration Test
9.  should handle multiple calculations efficiently on both Canvas Size and Paint Required methods
10. should handle when either the length, width or coverage is zero


## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

