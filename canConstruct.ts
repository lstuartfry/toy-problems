/**
Credit: Leetcode (https://leetcode.com/problems/ransom-note/)
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

export default function canConstruct(
  ransomNote: string,
  magazine: string
): boolean {
  // use a Map to store every character in the magazine, along with a 'count' of how many instances exist of that character.
  // we will determine whether the magazine contains all letters of the ransomNote if the 'count' for each character never returns '0'.
  const magazineChars = new Map();

  // loop through the magazine and update the map.
  for (let char of magazine) {
    // if the char exists in the map, add 1 to the total count, otherwise set the count to 1.
    magazineChars.set(char, magazineChars.get(char) + 1 || 1);
  }

  // loop through the ransomNote and check if the magazineChars map has enough instances of each character in the note.
  for (let char of ransomNote) {
    // if the character exists in the map, subtract a value from the total count.
    // this will ensure the map has or does not have enough instances of the character that exist in the note.
    if (magazineChars.get(char)) {
      magazineChars.set(char, magazineChars.get(char) - 1);
    }

    // if the character is not found, the magazine cannot be used to construct the ransomNote, so return false
    else return false;
  }
  // if the magazine contains all characters to make the ransomNote, return true
  return true;
}
