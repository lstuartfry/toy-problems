/*
Given a digit string, return all possible letter combinations that the number could represent.
*/

const letterCombinations = digits => {
  // if we did not receive a valid input, we return an empty array
  if(!digits) {
    return [];
  }
  
  // here we create a map object that links each digit to its corresponding letters
  const map = {
    '1': "",
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': ""
  };
  
  // in case our input is passed in as integers, we can convert the entire sequence to a string,
  // and then split each character apart and pass it into an array
  const input = digits.toString().split("");
  // with our newly created array, we can map over each digit value, and pull out its corresponding
  // array of letters from our map object, and concatenate each array to create an array of arrays,
  // and store that array in a new variable
  const digitLetters = input.map(function(num) {
    return [].concat(map[num]);
  });
  
  // our final step will be to reduce our array of arrays into a single array
  // that contains a string of each letter combination.
  return digitLetters.reduce(function(start, add) {
    // we want to hold on to the length of the first array, as that will determine how many combinations
    // we're going to get as a result
    const length = start.length;
    // first we loop through each letter in the start array
    start.forEach(firstLetter => {
      // next we loop through each letter of each subsequent array, adding its letter on to our
      // first letter to build a combination
      add.forEach(nextLetter => {
        start.push(firstLetter + nextLetter);
      });
    });
    // we want to elimate any sequence of digits that does not equal the length of the original input,
    // since, if we had an input of '23', there is no way we could end up with a result such as 'a', only 'ad'
    return start.slice(length);
  });
};