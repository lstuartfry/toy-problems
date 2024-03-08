/*
Leetcode: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

const firstIndexOfNeedleInHaystack = (
  haystack: string,
  needle: string
): number => {
  // loop through the haystack.
  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];

    // if we find the first letter of the needle, loop through the needle.
    if (char === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        // store a reference to the current value in the haystack, within the second loop.
        const currentHaystack = haystack[i + j];
        // store a reference to the current character in the needle
        const currentNeedle = needle[j];
        // if the current character in the haystack is not equal to the next character in the needle, break out of the loop.
        if (currentHaystack !== currentNeedle) {
          break;
        }
        // if we have reached the end of the needle, we have found the needle. Return the index of the first character in the needle.
        if (j === needle.length - 1) return i;
      }
    }
  }
  return -1;
};

export default firstIndexOfNeedleInHaystack;
