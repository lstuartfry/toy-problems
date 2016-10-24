/*
Given a string, return true if it contains balanced parenthesis ().
*/

var balancedParenthesis = function (string) {
  // separate string's characters and push them all into a new array
  var temp = string.split('');
  // initialize storage array
  var results = [];
  // cycle through each character from our original string, now stored in our temp array
  temp.forEach(function(val) {
    // if the value at the current index is an open parenthesis, push it into our storage array
  	if(val === '(') {
  		results.push(val);
  		}
    // if the value at the current index is a closed parenthesis, pop a value off the storage array
  	else if(val === ')') {
  		results.pop();
  	}
  });
  // if we had a balanced number of open and closed parenthesis, the storage array will be empty
  if (results.length === 0) {
  	return true;
  	}
  // if we had a closed parenthesis appear before our first open parenthesis,
  // or if we had an uneven number of open and closed parenthesis, the stirng was not balanced,
  // and there will be at least one value left over in our storage array
  else {
  	return false;
  	}
};

/*
Another, condensed solution using similar methodology
*/

function balancedParens(string) {
  return !string.split("").reduce(function(prev, char) {
    if(prev < 0) {
      return prev;
    }
    if(char === '(') { 
      return ++prev;
    } 
    if (char === ')') {
      return --prev;
    }
    return prev;
  }, 0);
};