/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

var isSameTree = function(p, q) {
	// check if both trees have a value of null, in which case they would be equal
  if(!p && !q){
    return true;
  }
  // check if either one tree is false and the other is not, or, if both have non-null values,
  // check to see if those values are not equal, in which case the trees are not equal
  if((!p && q) || (!q && p) || (p && q && p.val !== q.val)){
    return false;
  }
  // after checking initial value of the root node of each tree,
  // recurse through each trees left and right values
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};