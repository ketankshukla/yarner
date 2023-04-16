//compute the nth fibonacci number

export const fibonacci = (n, memo = {}) => {
  return n <= 1
    ? n
    : memo[n]
    ? memo[n]
    : (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
};

// export default fibonacci;
