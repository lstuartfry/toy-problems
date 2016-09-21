/*
Reverse a singly linked list.
*/
var reverseList = function(head) {
  var previous = null;
    
  while(head) {
    var save = head.next;
    head.next = previous;
    previous = head;
    head = save;
  }
  return previous;
};