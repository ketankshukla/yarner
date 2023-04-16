import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
  test("returns the correct Fibonacci number for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  test("returns the correct Fibonacci number for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  test("returns the correct Fibonacci number for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  test("returns the correct Fibonacci number for n = 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  test("returns the correct Fibonacci number for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  test("returns the correct Fibonacci number for n = 20", () => {
    expect(fibonacci(20)).toBe(6765);
  });
});
