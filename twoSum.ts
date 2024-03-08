/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.
*/

const twoSum = (nums: number[], target: number): number[] | undefined => {
  // store numbers within the 'nums' array in a map
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    // store a reference to the difference between the current value and the target value
    const diff = target - curr;

    // check if the diff exists in the map.
    // if it does, return the indices of the current value and the diff value
    if (map.has(diff)) return [map.get(diff)!, i];
    // if the diff value does not exist in the map, store the current value in the map
    else map.set(curr, i);
  }
  // if the target value cannot be found using the sum of two values within the 'nums' array,
  return undefined;
};

export default twoSum;
