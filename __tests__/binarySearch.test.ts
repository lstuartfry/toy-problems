import binarySearch from '../binarySearch';

describe('binarySearch', () => {
  it('should return the index of the target element in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([10, 20, 30, 40, 50], 40)).toBe(3);
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it('should return -1 if the target element is not found in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([10, 20, 30, 40, 50], 15)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
  });

  it('should return -1 if the array is empty', () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it('should return -1 if the target element is smaller than the smallest element in the array', () => {
    expect(binarySearch([10, 20, 30, 40, 50], 5)).toBe(-1);
  });

  it('should return -1 if the target element is larger than the largest element in the array', () => {
    expect(binarySearch([10, 20, 30, 40, 50], 60)).toBe(-1);
  });
});
