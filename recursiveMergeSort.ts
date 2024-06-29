/**
 * Implement a function that performs a recursive merge sort.
 */

export default function recursiveMergeSort(arr: Array<number>): Array<number> {
  // set base case when array length is finished being divided
  if (arr.length <= 1) {
    return arr;
  }

  // divide the array into left and right halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // recursively sort each half until the base case above is triggered
  const sortedLeft = recursiveMergeSort(left);
  const sortedRight = recursiveMergeSort(right);

  // merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left: Array<number>, right: Array<number>): Array<number> {
  const merged = [];

  let l = 0;
  let r = 0;

  // repeatedly compare values from the left and right arrays
  // and push the lower value into the merge result.

  // create a while loop that will iterate through both left and right arrays
  while (l < left.length && r < right.length) {
    const leftValue = left[l];
    const rightValue = right[r];

    if (leftValue < rightValue) {
      merged.push(leftValue);
      l++;
    } else {
      merged.push(rightValue);
      r++;
    }
  }

  // after the while loop is complete, ensure any remaining values from the left or right arrays
  // are pushed to the merged result
  merged.push(...left.slice(l), ...right.slice(r));
  return merged;
}
