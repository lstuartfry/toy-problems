/*
Given a binary tree, return the level order traversal of its nodes' values 
(ie, from left to right, level by level).
*/

var levelOrder = function(root) {
  var result = [];
  var queue = [[root, 0]];
  var node, depth;
  if(!root) {
    return result;
  }
  while(queue.length) {
    var temp = queue.shift();
    node = temp[0];
    depth = temp[1];
    if (!Array.isArray(result[depth])) {
      result[depth] = [];
    }
    result[depth].push(node.val);
    if(node.left) {
      queue.push([node.left, depth +1]);
    }
    if(node.right) {
      queue.push([node.right, depth +1]);
    }
  }
  return result;
};