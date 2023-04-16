export const fizzBuzz = (n) =>
  Array.from({ length: n }, (_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);

//export default fizzBuzz;
