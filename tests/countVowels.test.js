const countVowels = require("../countVowels");

test("counts vowels in a lowercase word", () => {
  expect(countVowels("hello")).toBe(2);
});

test("counts one vowel in world", () => {
  expect(countVowels("world")).toBe(1);
});

test("returns zero for an empty string", () => {
  expect(countVowels("")).toBe(0);
});

test("counts uppercase vowels", () => {
  expect(countVowels("AEIOU")).toBe(5);
});

test("counts vowels in a sentence with mixed case", () => {
  expect(countVowels("Hello World")).toBe(3);
});

test("returns zero when the string has no vowels", () => {
  expect(countVowels("rhythm")).toBe(0);
});
