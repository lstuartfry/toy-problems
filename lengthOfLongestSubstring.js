var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
    return 1;
  }
  var longestLength = 0;
  var currentString = "";

  for (var i = 0; i < s.length; i++) {
    var currentChar = s[i];
    var index = currentString.indexOf(currentChar);
    if (index === -1) {
      currentString += currentChar;
      longestLength = Math.max(longestLength, currentString.length);
    } else {
      currentString = currentString.slice(index + 1) + s[i];
    }
  }
  return longestLength;
};