const fibonacci = require("../fibonacci");

describe("fibonacci", () => {
  test.each`
    arg   | expected
    ${0}  | ${0}
    ${1}  | ${1}
    ${2}  | ${1}
    ${3}  | ${2}
    ${4}  | ${3}
    ${5}  | ${5}
    ${6}  | ${8}
    ${7}  | ${13}
    ${8}  | ${21}
    ${9}  | ${34}
    ${10} | ${55}
  `(
    "returns $expected when $arg is passed as an argument",
    ({ arg, expected }) => {
      expect(fibonacci(arg)).toBe(expected);
    }
  );
});
