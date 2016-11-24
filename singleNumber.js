/*
Given an array of integers, every element appears twice except for one. Find that single one.
*/

const singleNumber = array => {
	// if we have an array with a single value, that value should be returned
  if(array.length === 1) {
    return array[0];
  }
  // if our input array has more than one value, we should sort it first to make future
  // comparisons between pairs much easier
  array.sort();
  // in our for loop, we increment by 2 because we're dealing with pairs of numbers
  for(var i = 0; i < array.length; i += 2) {
  	// our final check is to see if our first value in our pair is equal to the second,
  	// and if it isn't, we know we've found our one single value in the array
    if(array[i] !== array[i+1]) {
      return array[i];
    }
  }
}

// a MUCH FASTER solution, using an XOR operation, combined with reduce
const singleNumber = nums => nums.reduce((a, b) => a^b);