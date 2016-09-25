/*
Write a function that, given a string, finds the longest run of identical characters 
and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/

var longestRun = function (string) {
  var longest = [0,0];
  var current = [0,0];
  for(var i=1; i<string.length;i++){
    if(string[i-1] === string[i]) {
      current[1] = i;
      if(current[1]-current[0] > longest[1]-longest[0]) {
        longest = current;
      }
    }
    else {
      current = [i,i];
    }
  }
  return longest;
}