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