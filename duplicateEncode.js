/*

*** credit to weavermedia on Codewars for this challenge!
https://www.codewars.com/users/obnounce

The goal of this exercise is to convert a string to a new string where each character in the new string is "("
if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

const duplicateEncode = word => {
	let result = '';
	const lower = word.toLowerCase();
	for (const char of lower) {
		if (lower.indexOf(char) === lower.lastIndexOf(char)) {
			result += '(';
		} else {
			result += ')';
		}
	}
	return result;
};

module.exports = duplicateEncode;
