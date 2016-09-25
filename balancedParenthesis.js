/*
Given a string, return true if it contains balanced parenthesis ().
*/

var balancedParenthesis = function (string) {
  var temp = string.split('');
  var results = [];
  temp.forEach(function(val) {
  	if(val === '(') {
  		results.push(val);
  		}
  	else if(val === ')') {
  		results.pop();
  	}
  });
  if (results.length === 0) {
  	return true;
  	}
  else {
  	return false;
  	}
};