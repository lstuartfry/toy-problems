import lengthOfLongestSubstring from '../lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  it('should return 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should return 1 for a string with a single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
    expect(lengthOfLongestSubstring('b')).toBe(1);
    expect(lengthOfLongestSubstring('c')).toBe(1);
  });

  it('should return the length of the string if all characters are unique', () => {
    expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
    expect(lengthOfLongestSubstring('xyz')).toBe(3);
    expect(lengthOfLongestSubstring('1234567890')).toBe(10);
  });

  it('should return the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
