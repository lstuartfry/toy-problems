/*
Write a function that takes a string as input and returns the string reversed.
*/

function reverseString(string) {
	// create a storage array
	var reversed = [];
	// iterate backwards through the string, pushing each character into the storage array
	for(var i = string.length-1; i >= 0; i--) {
		reversed.push(string[i]);
	}
	// our storage array contains each letter of the original string in reversed order, and the last
	// step is to simply join each character together
	return reversed.join("");
}

// using built-in javascript helpers

function reverseString(string) {
	return string.split("").reverse().join("");
}

// using recursion, without creating a new storage array or new string
function reverseString(string) {
	return (string === "") ? "" : reverseString(string.substr(1)) + string.charAt(0);
}