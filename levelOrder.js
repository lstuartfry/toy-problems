/*
Given a binary tree, return the level order traversal of its nodes' values 
(ie, from left to right, level by level).
*/

var levelOrder = function(root) {
	// initialize collection to be returned after entire tree has been processed
  var result = [];
  // initialize queue structure, with first value being array of root and depth value, which starts at zero
  var queue = [[root, 0]];
  // initialize node, depth variables to be set later
  var node, depth;
  // if root parameter is null, return result array, which will be empty
  if(!root) {
    return result;
  }
  // begin while loop, which will keep running as values are added to the queue
  while(queue.length) {
  	// pull first value pair from the front of the queue array
    var temp = queue.shift();
    // set node variable to first value of temp, which will always be the node itself
    node = temp[0];
    // set depth variable to second value of temp, which represents how far we've gone down the tree
    depth = temp[1];
    // if our final result collection does not have any values at the index corresponding to current depth,
    // initialize an empty array to store future values
    if (!Array.isArray(result[depth])) {
      result[depth] = [];
    }
    // push the node's value into final collection, at index corresponding to current depth
    result[depth].push(node.val);
    // if there are more nodes connected to the current node's left or right properties,
    // continue climbing down the tree, adding the new nodes to our queue and incrementing the depth
    if(node.left) {
      queue.push([node.left, depth +1]);
    }
    if(node.right) {
      queue.push([node.right, depth +1]);
    }
  }
  // return final result, which will hold all the tree's node values, indexed according to their original depth in the tree
  return result;
};