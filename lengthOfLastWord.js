/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word in the string.

If the last word does not exist, return 0.
*/

var lengthOfLastWord = function(s) {
    // check to see if input string has a length
    if(s.length) {
    // split each word of the string apart and push each word into a storage array,
    // also eliminating any empty spaces
    var array = s.split(" ").filter(function(item) {
    	return item !== "";
    });
    // once we have our filtered storage array, do a final check to make sure the last
    // value isn't null, and that our storage array has a valid length
    if(array[array.length-1] !== null && array.length) {
        // store the last value in our storage array as a variable, and return the length
        var result = array[array.length-1];
        return result.length;
    } else {
        return 0;
    	}
    } else {
    	return 0;
    	}
};