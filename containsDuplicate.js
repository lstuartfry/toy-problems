/*
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.
*/

const containsDuplicate = nums => {
	// we instantiate a 'flag' variable to hold on to a boolean value, which we will return
	// before exiting the function
  let flag = false;
  // we sort the input array to enable easier comparisons between pairs of values
  nums.sort();
  for(var i = 0; i < nums.length; i++) {
  	// since our array is sorted, if our current value is equal to the next value in the array, 
  	// we've found a duplicate, and we set our 'flag' variable to true
    if(nums[i] === nums[i+1]) {
      flag = true;
    }
  }
  return flag;
};

// here is a much faster solution, using a hash object
const containsDuplicate = nums => {
	let hash = {};
	// we will loop through the nums array, and if we come across a value which our hash object
	// already has a corresponding key-value pair, we have found a duplicate, and will return true
	for(var i = 0; i < nums.length; i++) {
		if(hash[nums[i]]) {
			return true;
		} else {
			// if the hash key does not exist, we will create it, and give it a value of '1', representing
			// how many instances of that value we've come across so far
			hash[nums[i]] = 1;
		}
	}
	// if we never go into our first 'if' statement of our for loop, then we never came across a duplicate,
	// and we want to return false
	return false;
}