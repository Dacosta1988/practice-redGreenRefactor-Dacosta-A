const countVowels = require("../countVowels");

test("counts vowels in a lowercase word", () => {
  expect(countVowels("hello")).toBe(2);
});
