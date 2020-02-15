/*

*** credit to g964 on Codewars for this challenge!
https://www.codewars.com/users/g964

Given two arrays of strings a1 and a2 return a sorted array r
in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

*/

const substringArray = (a1, a2) => {
	let result = [];
	a2.forEach(word => {
		a1.forEach(string => {
			if (word.indexOf(string) !== -1 && !result.includes(string)) {
				result.push(string);
			}
		});
	});
	return result.sort();
};

module.exports = substringArray;
