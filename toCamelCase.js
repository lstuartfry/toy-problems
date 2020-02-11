/* 

Complete the method/function so that it converts dash/underscore delimited wordsinto camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).

Examples:

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

*/

const toCamelCase = string => {
	let result = string.split('');
	let i = 0;
	while (i < result.length) {
		let char = result[i];
		if (char === '-' || char === '_') {
			let nextChar = result[i + 1];
			if (nextChar === '-' || nextChar === '_') {
				// if we are iterating through our array and find the next
				// value is also a dash or an underscore,
				// we simply want to splice the current value out of our results array
				// without updating the index reference.
				// This allows us to run the same logic on every multiple dash or underscore.
				result.splice(i, 1);
			} else {
				// if the next value in our array is a character other than a dash or underscore,
				// we want to Uppercase it.
				// within this block, our 'char' variable still points to a dash or underscore,
				// so we want to splice it out, and then increate our 'i' variable to continue iterating
				// through the array
				result[i + 1] = result[i + 1].toUpperCase();
				result.splice(i, 1);
				i++;
			}
		} else {
			i++;
		}
	}

	return result.join('');
};

module.exports = toCamelCase;
