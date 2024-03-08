/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid 
but "(]" and "([)]" are not.

SOLUTION - The trick to this problem is that, whenever there is a close-parens, the last open-parens *has* to match the closed-parens type.
*/

type OpenParens = '(' | '{' | '[';

const isOpenParens = (val: string): val is OpenParens => {
  return ['(', '{', '['].includes(val);
};

const balancedParens = (s: string) => {
  // build a map to store the parens relationships.
  // we will be referencing the 'open' paren values, so store the closed-parens as keys, open-parens as values
  const parensMap: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // store all open paren characters in a stack.
  const openParensStack: string[] = [];

  // loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // if the character is an open-parens, add it to the stack
    if (isOpenParens(char)) {
      openParensStack.push(char);

      // if we have a close-parens, the last value in the stack *must* be a matching open parens.
      // if they do not match, do nothing, which could leave an open-parens character left in the stack.
    } else if (openParensStack.pop() !== parensMap[char]) {
      return false;
    }
  }

  // after looping through the entire string, all open-parens should be closed, and the stack should be empty.
  return openParensStack.length === 0;
};

export default balancedParens;
