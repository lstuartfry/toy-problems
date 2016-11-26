/*
Given a digit string, return all possible letter combinations that the number could represent.
*/

const letterCombinations = digits => {
  if(!digits) {
    return [];
  }
  
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
  
  const input = digits.toString().split("");
  const digitLetters = input.map(function(num) {
    return [].concat(map[num]);
  });
  
  return digitLetters.reduce(function(comb, item) {
    var length = comb.length;
    comb.forEach(combination => {
      item.forEach(letter => {
        comb.push(combination + letter);
      });
    });
    return comb.slice(length);
  });
};