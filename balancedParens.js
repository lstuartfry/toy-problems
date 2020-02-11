/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid 
but "(]" and "([)]" are not.

*/

const balancedParens = string => {
	// first we create an object that references the proper relationship
	// between our various parentheses characters
	const pairs = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	// we will use a stack method to help us keep track of which parentheses characters we've
	// come across in the string
	let stack = [];

	// loop through the string
	for (const val of string) {
		// if our pairs object has a key-value matching the current string's character,
		// push that character into our stack.  You will notice that ONLY closed-parentheses characters
		// get added to our stack.
		if (pairs[val]) {
			stack.push(pairs[val]);
		}
		// when we come across any closed-parentheses characters in our string,
		// our string is ONLY balanced if we pop off the most recently-added character in our
		// stack, and the characters match
		else {
			if (stack.pop() !== val) {
				return false;
			}
		}
	}

	// if we have a truly balanced string, our stack will be empty after completing our for-loop
	return stack.length === 0;
};

module.exports = balancedParens;
