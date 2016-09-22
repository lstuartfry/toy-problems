/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word in the string.

If the last word does not exist, return 0.
*/

var lengthOfLastWord = function(s) {
    if(s.length) {
    var array = s.split(" ").filter(function(item) {
    	return item !== "";
    });
    if(array[array.length-1] !== null && array.length) {
        var result = array[array.length-1];
        return result.length;
    } else {
        return 0;
    	}
    } else {
    	return 0;
    	}
};