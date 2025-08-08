# SENG8120 Modern Automated Testing 

Version: Alpaca

## Purpose

This repository houses the code we require for examples and assignments.

## Assignment 4: Paint Calculator

I built a paint calculator for a modernistic painter who needs to figure out how much paint is required for mass production of their artwork. The artwork has a rectangle with a triangle on top, where the triangle base is always 1/3 of the rectangle length.

### What I implemented

- calculateTriangleArea: computes triangle area with base = rectangle length / 3
- calculateArtworkArea: adds rectangle and triangle areas together
- calculatePaintForCopies: figures out total paint needed for any number of copies

### Testing approach

I used TDD methodology - wrote failing tests first, then implemented the functions to make them pass. Each function has its own test file with multiple test cases.

I also added integration tests that verify the functions work together correctly across different scenarios:
- Main assignment scenario (5000 copies of 3m x 2m artwork)
- Smaller artwork with fewer copies 
- Large artwork dimensions with calculated expectations

To run just the integration tests:
```bash
npm test integration
```

### Example

Running the program with 5000 copies of a 3m x 2m artwork shows:
```
3070.18 liters of paint required for 5000 copies of 3m x 2m artwork.
```

The math: Rectangle (6 m²) + Triangle (1 m²) = 7 m² per copy. 5000 copies = 35,000 m² total. At 11.4 m²/L coverage = 3070.18 liters needed.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

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

