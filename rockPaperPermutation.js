/*
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/

var rockPaperPermutation = function (roundCount) {
  var rps = 'rps';
  var results = [];
  function recurse(pString) {
    if(pString.length === roundCount) {
      results.push(pString);
      return;
  	}
    for(var i = 0; i < rps.length; i++) {
      recurse(pString + rps[i]);
    }
  }
  if(roundCount > 0) {
  	recurse('');
	}
  return results;
}