import firstIndexOfNeedleInHaystack from '../firstIndexOfNeedleInHaystack';

describe('firstIndexOfNeedleInHaystack', () => {
  it('should return the index of the first occurrence of needle in haystack', () => {
    expect(firstIndexOfNeedleInHaystack('sadbutsad', 'sad')).toBe(0);
    expect(firstIndexOfNeedleInHaystack('leetcode', 'leeto')).toBe(-1);
    expect(firstIndexOfNeedleInHaystack('hello', 'll')).toBe(2);
  });

  it('should return -1 if needle is not part of haystack', () => {
    expect(firstIndexOfNeedleInHaystack('sadbutsad', 'foo')).toBe(-1);
    expect(firstIndexOfNeedleInHaystack('leetcode', 'abc')).toBe(-1);
    expect(firstIndexOfNeedleInHaystack('hello', 'world')).toBe(-1);
  });
});
