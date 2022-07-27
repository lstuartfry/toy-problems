// credit to Stephen Grider for this challenge!
// https://github.com/stephengrider/algocasts

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fibonacci = (number) => {
  // we can initialize the first two elements of the series
  // in order to avoid checking against undefined or null values
  // of an empty array
  const series = [0, 1];

  for (let i = 2; i <= number; i++) {
    const a = series[i - 1];
    const b = series[i - 2];

    series.push(a + b);
  }

  return series[number];
};

module.exports = fibonacci;
