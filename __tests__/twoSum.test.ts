import twoSum from '../twoSum';

describe('twoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];

    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('should return undefined if no two numbers add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 10;

    expect(twoSum(nums, target)).toBeUndefined();
  });
});
