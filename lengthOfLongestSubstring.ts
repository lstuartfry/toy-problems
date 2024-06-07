/*
Given a string, find the length of the longest substring without repeating characters.
*/

export default function lengthOfLongestSubstring(s: string) {
  if (s.length <= 1) {
    return s.length;
  }

  let longestLength = 0;
  let currentSubstring = '';

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const index = currentSubstring.indexOf(currentChar);
    // check if the character exists elsewhere in the substring.
    // if it doesn't, add it to the currentSubstring
    if (index === -1) {
      currentSubstring += currentChar;
      // check if the new substring is the longest substring found
      longestLength = Math.max(longestLength, currentSubstring.length);
    } else {
      // if the character exists elsewhere in the current substring,
      // create a new substring starting one index after the index of the duplicate character.
      currentSubstring = currentSubstring.slice(index + 1) + s[i];
    }
  }
  return longestLength;
}
