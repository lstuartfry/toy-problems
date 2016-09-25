/*
Given a linked list, remove the nth node from the end of list and return its head.

Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
*/

var removeNthFromEnd = function(head, n) {
  var firstRunner = head;
  for (var i = 0; i < n; i++) {
    firstRunner = firstRunner.next;
  }
  if(firstRunner === null) {
    return head.next;
  }
  var secondRunner = head;
  while(firstRunner.next !== null) {
    secondRunner = secondRunner.next;
    firstRunner = firstRunner.next;
  }
  secondRunner.next = secondRunner.next.next;
  return head;
};