/*
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.
*/

const rotateMatrix = matrix => {
	// first we create a new, empty matrix that we will push values into
	let result = [];
	// in case we don't want to mutate the original matrix, we can create a copy that we'll work off of
	let copy = matrix;
	// initiate a count variable that we'll use to increment and step through the matrix values
	let count = 0;
	// next we supply our result array with inner arrays that maintain the row-like structure of our matrix
	for(var i = 0; i < copy.length; i++) {
		result.push([]);
	}

	// we use our count variable to keep track of our original matrix
	while(count < copy.length) {
		// if we want to simulate rotating 90 degrees, we can work from the end of the matrix,
		// and grab the first value of each inner array, and push it into our new result matrix
		for(var j = copy.length-1; j >= 0; j--) {
			result[count].push(copy[j][count]);
		}
		// after we've successfully grabbed each first-value of the inner arrays, 
		// we need to restart the process, and grab the next value, 
		// which we can access by incrementing the count variable
		count++
	}

	return result;
}