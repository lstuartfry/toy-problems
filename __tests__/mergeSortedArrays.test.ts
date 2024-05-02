import mergeSortedArrays from '../mergeSortedArrays';

describe('mergeSortedArrays', () => {
  it('should merge two sorted arrays', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    const result = mergeSortedArrays(arr1, arr2, 3, 3);

    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const expected: number[] = [];

    const result = mergeSortedArrays(arr1, arr2, 0, 0);

    expect(result).toEqual(expected);
  });

  it('should handle arrays with different lengths', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4];
    const expected = [1, 2, 3, 4, 5];

    const result = mergeSortedArrays(arr1, arr2, 3, 2);

    expect(result).toEqual(expected);
  });

  it('should handle arrays with invalid values', () => {
    const arr1 = [1, 3, 5, 0, 0, 0];
    const arr2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    const result = mergeSortedArrays(arr1, arr2, 3, 3);

    expect(result).toEqual(expected);
  });
});
