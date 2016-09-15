var lengthOfLongestSubstring = function(s) {
  var longestString = "";
  var currentString = "";
  for (var i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1] && currentString.indexOf(s[i]) === -1) {
      currentString = currentString + s[i];
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
    }
  }
  return longestString.length;
};