/*
Given an array and a value, remove all instances of that value in place and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

function removeElements(array, val) {
	// the trick here is to work backwords through the array.  We want to use our array helper
	// 'splice', because it does not create a new array or a shallow copy, but changes the original
	// array itself.  We need to work backwards because our 'splice' method has trouble removing the last
	// element of arrays
	for(var i = array.length; i >= 0; i--) {
		if(array[i] === val) {
			array.splice(i, 1);
		}
		
		return array.length;
	}
};

// we can also do this by progressing forwards through the array, while holding a variable to keep
// track of our length and decrementing it accordingly

function removeElements(array, val) {
	let length = array.length;
	let i = 0;

	while(i < length) {
		// if we find a match, remove it as we did above using splice, then decrement the length variable
		if(array[i] === val) {
			array.splice(i, 1);
			length--;
		}
		else {
			// if we did not find a match, increment the index to progress through the array
			i++;
		}
	}

	return length;
}