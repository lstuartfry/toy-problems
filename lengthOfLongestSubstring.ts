/*
Given a string, find the length of the longest substring without repeating characters.
*/

export default function lengthOfLongestSubstring(s: string) {
  let longestLength = 0;
  const characterMap = new Map();

  // use a sliding-window method to track the length of the current substring using two indices.
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const currentCharacter = s[rightIndex];

    // if we find a character that exists in the map, update the leftIndex to start a new substring
    if (
      characterMap.has(currentCharacter) &&
      characterMap.get(currentCharacter) >= leftIndex
    ) {
      leftIndex = characterMap.get(currentCharacter) + 1;
    }

    // if the character hasn't been found,
    // check the longestLength against the length of the current window.
    // add 1 to the length of the window due to zero-based index tracking.
    longestLength = Math.max(longestLength, rightIndex - leftIndex + 1);

    // update characterMap with new index of character
    characterMap.set(currentCharacter, rightIndex);
  }

  return longestLength;
}
