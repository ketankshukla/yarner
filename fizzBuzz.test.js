import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  test("returns an array of FizzBuzz values up to n", () => {
    const expected = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];

    expect(fizzBuzz(15)).toEqual(expected);
  });

  test("returns an empty array for n = 0", () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  test("returns an array with only 1 for n = 1", () => {
    expect(fizzBuzz(1)).toEqual([1]);
  });
});
