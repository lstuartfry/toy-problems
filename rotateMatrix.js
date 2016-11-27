/*
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.
*/

const rotateMatrix = matrix => {
	let result = [];
	let copy = matrix;
	let count = 0;
	for(var i = 0; i < copy.length; i++) {
		result.push([]);
	}

	while(count < copy.length) {
		for(var j = copy.length-1; j >= 0; j--) {
			result[count].push(copy[j][count]);
		}
		count++
	}

	return result;
}