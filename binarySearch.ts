export default function binarySearch(
  arr: Array<number>,
  target: number
): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // in case the array length is an odd number, ensure a whole number is used to reference the middle index.
    const mid = Math.floor((left + right) / 2);

    const midValue = arr[mid];

    if (midValue === target) return mid;

    // if the target is less than the mid value, search the left half of the array.
    if (target < midValue) {
      right = mid - 1;
    } else {
      // if the target is higher than the mid value, search the right half of the array.
      left = mid + 1;
    }
  }

  // if the target was not found, return -1
  return -1;
}
