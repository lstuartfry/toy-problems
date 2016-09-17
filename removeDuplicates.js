/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
For example,
Given input array nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. 
It doesn't matter what you leave beyond the new length.

*NOTE - you need to store the length of the array passed as the argument in a variable, since you'll be changing the array's length
each time you find a duplicate integer.  Continuously decrementing the length variable and simultaneously increasing the index is
the best way to ensure you're looping through each value in the array.
*/

var removeDuplicates = function(nums) {
  var length = nums.length - 1;
  var index = 1;
  while (index <= length) {
    if (nums[index] === nums[index - 1]) {
      nums.splice(index, 1);
      length--;
    } else {
      index++;
    }
  }
  return nums.length;
};