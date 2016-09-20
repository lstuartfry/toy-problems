/*
Invert a binary tree.
*/

var invertTree = function(root) {
	if(root) {
		var left = root.left ? root.left : null;
		var right = root.right ? root.right : null;
		root.left = invertTree(right);
		root.right = invertTree(left);
	}
	return root;
};