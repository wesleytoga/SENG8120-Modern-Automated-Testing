# SENG8120 Modern Automated Testing 

Version: Industry Standard

## Purpose

This repository houses the code we require for examples and assignments.

## Code Quality Improvements

The following industry best practices have been implemented:

**Testing & TDD:**
- Added more comprehensive test coverage
- Implemented Test-Driven Development methodology
- All tests now passing (41 tests total)

**Code Quality:**
- Added ESLint and Prettier for consistent code formatting
- Implemented TypeScript strict mode with proper type annotations
- Added input validation and error handling

**Bug Fixes:**
- Fixed function naming inconsistencies (calculateCanvasDiagonal)
- Corrected diagonal calculation using Pythagorean theorem
- Enhanced paintRequiredCalculator with proper error handling

**Additional Scripts:**
```bash
npm run lint # Check code style
npm run lint:fix # Auto-fix style issues  
npm run format # Format code with Prettier
npm run typecheck # TypeScript type checking
```

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

