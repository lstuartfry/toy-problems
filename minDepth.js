/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

var minDepth = function(root) {
	if(!root) {
		return 0;
	}
	if(root.left === null && root.right === null) {
		return 1;
	}
	if(!root.left) {
		return minDepth(root.right) + 1;
	}
	if(!root.right) {
		return minDepth(root.left) + 1;
	}
	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};