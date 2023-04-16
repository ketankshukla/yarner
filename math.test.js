const arithmetic = require("./math");

test("Add 2 + 1 to equal 3", () => {
  expect(arithmetic.add(2, 1)).toBe(3);
});

test("Subtract 2 - 1 to equal 1", () => {
    expect(arithmetic.subtract(2, 1)).toBe(1);
  });

test("Multiply 2 * 9 to equal 18", () => {
    expect(arithmetic.multiply(2, 9)).toBe(18);
  });

test("Divide 100 / 5 to equal 20", () => {
    expect(arithmetic.divide(100, 5)).toBe(20);
  });