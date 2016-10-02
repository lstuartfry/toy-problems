/*
Invert a binary tree.
*/

var invertTree = function(root) {
	// if tree is not vaild, or if it does not have subtrees/leaves to invert, return it
	// this will also stop the function from running once we've recursed down both subtrees of the root
	if (!root || (!root.left && !root.right)) {
	  return root;
	}
	// hold the root's left subtree in a variable, as we will be setting it's left subtree
	// to something else, and need to hold on to its original value
	var temp = root.left;
	// set the root's .left value to it's .right value
	root.left = root.right;
	// set the root's .right value to the root's original .left value,
	// which we're holding in our temp variable
	root.right = temp;
	// run our function on each of the root's .left and .right subtrees
	invertTree(root.left);
	invertTree(root.right);
	return root;
};