# Red, Green, Refactor: `countVowels`

This project uses test-driven development to implement a `countVowels` function. The function accepts a string and returns the number of vowels (`a`, `e`, `i`, `o`, and `u`) in it.

## TDD Summary

### Red

In the Red phase, we write a test for the behavior we want before writing the implementation. The test should fail for the expected reason, proving that it can detect the missing behavior and clarifying what the code must do.

### Green

In the Green phase, we write the simplest code needed to make the failing test pass. The goal is correct behavior first, without adding unnecessary complexity or optimizing too early.

### Refactor

In the Refactor phase, we improve the code's readability, efficiency, or maintainability while keeping its behavior unchanged. We rerun the tests to make sure the improvements did not break the working feature.

## Expected Results

- `countVowels("hello")` returns `2`.
- `countVowels("world")` returns `1`.
- `countVowels("")` returns `0`.
- `countVowels("AEIOU")` returns `5`.

## Red Phase Explanation

The first test was designed to verify that `countVowels("hello")` returns `2`. It failed initially because the `countVowels` module had not been created. Starting with this failing test clarified that the function must accept a string, count each vowel, and return a number.

## Green Phase Explanation

The minimal implementation looped through the string, compared each character with the five lowercase vowels, increased a counter for each match, and returned the counter. This code directly satisfied the first test. Prioritizing functionality at this stage confirmed that the requirement and test were correct before spending time improving the design.

## Refactor Phase Explanation

The refactored code stores the vowels in a `Set` and uses `vowels.has(char)`, which is easier to read and maintain than several repeated comparisons. Converting the string to lowercase also lets the function handle uppercase letters without duplicating conditions. Refactoring is important for long-term success because clearer code is easier to understand, change, and debug, while the tests protect the existing behavior.

## Run the Tests

```bash
npm install
npm test
```

The Git history preserves each phase in a separate commit:

1. `Add failing countVowels test`
2. `Implement minimal countVowels solution`
3. `Refactor countVowels and expand tests`
