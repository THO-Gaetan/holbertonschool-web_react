# TypeScript Learning Project

## Overview
This repository contains a series of TypeScript tasks that demonstrate various TypeScript features and best practices. Each task focuses on specific TypeScript concepts, gradually building up complexity from basic types to advanced patterns.

## Task Structure

### Task 1: Basic Types and Interfaces
- Created interfaces for `Teacher` objects with required and optional fields
- Implemented index signatures to allow additional properties
- Defined objects with TypeScript type annotations
- Demonstrated basic TypeScript type checking

### Task 2: Advanced Types and Functions
- Extended interfaces with `Directors` interface inheriting from `Teacher`
- Created class implementations with interfaces (`TeacherInterface`, `DirectorInterface`) 
- Implemented type predicates with `isDirector` function
- Used function overloads for type-safe function calls
- Worked with string literal types for controlled value sets
- Created the `executeWork` function that handles different types of employees

### Task 3: Ambient Types and Module Integration
- Defined a module structure with proper type definitions
- Created type definitions for third-party code (`crud.js`)
- Implemented ambient module declarations
- Used triple-slash directives for reference paths
- Built a CRUD system with proper type safety
- Demonstrated TypeScript's ability to type external JavaScript libraries

### Task 4: Namespaces and Declaration Merging
- Implemented a class hierarchy for different subjects (Cpp, Java, React)
- Used declaration merging to extend interfaces across files
- Created polymorphic methods for different subject types
- Applied inheritance with the base `Subject` class
- Demonstrated module patterns for code organization
- Built a complete example showing teacher assignments to different subjects

### Task 5: Branded Types
- Created branded types for `MajorCredits` and `MinorCredits`
- Implemented brand properties to distinguish between similar interfaces
- Built type-safe functions that handle only specific branded types
- Used type assertions to manage branded types
- Demonstrated techniques for preventing type confusion

## Key Concepts Covered

- **Type Annotations**: Explicitly specifying types for variables, function parameters, and return values
- **Interfaces**: Defining contract-like structures that classes and objects must adhere to
- **Type Guards**: Using runtime checks to narrow types within conditional blocks
- **Declaration Merging**: Extending existing types through declaration merging
- **Namespaces**: Organizing code to prevent naming collisions
- **Branded Types**: Creating nominally unique types for enhanced type safety
- **Type Assertions**: Instructing the TypeScript compiler about the specific type of a value
- **Ambient Declarations**: Describing types for code that exists outside the TypeScript project

## Technologies Used

- TypeScript
- Webpack for bundling
- ES6+ JavaScript features
- Node.js for running the development environment

## Running the Examples

Each task has its own directory with configuration files. To run any example:

1. Navigate to the task directory: `cd task_X`
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. start the server with: `npx serve dist` or run with Node.js

## Project Highlights

This project demonstrates how TypeScript helps create more robust JavaScript applications by:
- Catching errors at compile time rather than runtime
- Providing better documentation through type annotations
- Enabling better IDE support with accurate autocompletion
- Facilitating easier refactoring with type checking
- Supporting complex type patterns for advanced use cases

By progressing through these tasks, I've gained practical experience with TypeScript's type system and its application in real-world scenarios.