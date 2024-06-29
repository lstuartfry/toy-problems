import recursiveMergeSort from '../recursiveMergeSort';

describe('recursiveMergeSort', () => {
  it('should return an empty array when given an empty array', () => {
    expect(recursiveMergeSort([])).toEqual([]);
  });

  it('should return the same array when given an array with a single element', () => {
    expect(recursiveMergeSort([5])).toEqual([5]);
  });

  it('should sort an array of numbers in ascending order', () => {
    expect(recursiveMergeSort([4, 2, 7, 1, 5])).toEqual([1, 2, 4, 5, 7]);
    expect(recursiveMergeSort([9, 3, 6, 8, 2])).toEqual([2, 3, 6, 8, 9]);
    expect(recursiveMergeSort([10, 5, 3, 9, 1])).toEqual([1, 3, 5, 9, 10]);
  });

  it('should handle arrays with duplicate numbers', () => {
    expect(recursiveMergeSort([3, 2, 1, 2, 3])).toEqual([1, 2, 2, 3, 3]);
    expect(recursiveMergeSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  });

  it('should sort arrays with negative numbers', () => {
    expect(recursiveMergeSort([-4, -2, -7, -1, -5])).toEqual([
      -7, -5, -4, -2, -1,
    ]);
    expect(recursiveMergeSort([-9, -3, -6, -8, -2])).toEqual([
      -9, -8, -6, -3, -2,
    ]);
    expect(recursiveMergeSort([-10, -5, -3, -9, -1])).toEqual([
      -10, -9, -5, -3, -1,
    ]);
  });

  it('should not modify the original array', () => {
    const arr = [4, 2, 7, 1, 5];
    recursiveMergeSort(arr);
    expect(arr).toEqual([4, 2, 7, 1, 5]);
  });
});
