/*
Reverse digits of an integer (a good lesson about integer overflows!  see line 15)
*/

var reverseInteger = function(x) {
  var string = x + "";
  var newString = "";
  if (string.charAt(0) === "-") {
    string = string.slice(1);
    newString += "-";
  }
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  if (+newString > 2147483647 || +newString < -2147483647) {
    return 0;
  }
  return +newString;
};