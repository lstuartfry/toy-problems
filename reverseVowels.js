/*
Write a function that takes a string as input, and returns the string 
with only the vowels reversed.  Note, do not include 'y', as its function as
a 'vowel' always means the absence of any other traditional vowels, and thus
could only be revered with another 'y'.
*/

function reverseVowels(string) {
	// create a string or storage array to hold all vowels
	const vowels = 'aeiouAEIOU';

	// create result array to return before exiting the function
	let result = [];
	// create a storage array to hold the string's vowels in place
	let stringVowels = [];

	// iterate through the string, plucking out its vowels only by checking it against
	// our generated vowels string
	for(let char of string) {
		if(vowels.indexOf(char) !== -1) {
			stringVowels.push(ch);
		}
	}

	// create a variable to use later as a reference to our position in the
	// stringVowels array
	let index = stringVowels.length - 1;

	// iterate through the string again, and when we come to a vowel, we push
	// that vowel's counterpart in the string by moving from end to start in our stringVowels
	// array
	for(let char of string) {
		if(vowels.indexOf(char) !== -1) {
			result.push(stringVowels[index]);
			// decrement our index if we've pushed a value from our stringVowels array into our final result
			index--;
		} else {
			// if the current character is not a vowel, simply push it into our result array
			result.push(char);
		}
	}

	// our last step is to join our result array items together into a string
	return result.join('');
}