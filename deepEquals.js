/*
Write a function that, given two objects, returns whether or not the two are deeply equivalent,
meaning the structure of the two objects is the same, 
and so is the structure of each of their corresponding descendants.
*/

var deepEquals = function(a, b) {
  // first test if a and b are objects
  if ((typeof a === "object" && a !== null) && (typeof b === "object" && b !== null)) {
    // test if they have the same number of keys, otherwise return
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    // if above tests didn't return false, begin checking
    // if objects have the same keys
    for (var key in a) {
      if (b.hasOwnProperty(key)) {
        // final check against object vals and array vals
        if ((Array.isArray(a[key]) && !Array.isArray(b[key])) || !Array.isArray(a[key]) && Array.isArray(b[key])) {
          return false;
        }
        // recurse, test if key values are equal
        if (!deepEquals(a[key], b[key])) {
          return false;
        }
      }
      // if b did not have same a property, return false
      else {
        return false;
      }
    }
    return true;
  }
  // tests if objects have a single key-value
  else if (a !== b) {
    return false;
  } else {
    return true;
  }
};