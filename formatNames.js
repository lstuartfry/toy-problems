/*

*** credit to weavermedia on Codewars for this challenge
https://www.codewars.com/users/weavermedia

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // returns 'Bart, Lisa & Maggie'

*/

const formatNames = names => {
	let results = names.map(val => val.name);
	for (let i = 1; i < results.length; i += 2) {
		if (i === results.length - 1) {
			results.splice(i, 0, ' & ');
		} else {
			results.splice(i, 0, ', ');
		}
	}
	return results.join('');
};

module.exports = formatNames;
