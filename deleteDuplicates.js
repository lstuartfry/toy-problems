/*
PART I
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/

var deleteDuplicates = function(head) {
	var current = head;
	// while the current node is valid, continue with if/else handling of each node
    while(current) {
    	// if the current node's .next value is valid, and is equal to the current node's .val,
    	// we have found duplicate values, and can "erase" the second instance of the duplicate
    	// by skipping over the current.next value, and setting it instead to the next node in the sequence
    	if(current.next !== null && current.val === current.next.val) {
    		current.next = current.next.next;
    	// otherwise if no duplicate is found, step through to the next node in the list
    	} else {
    		current = current.next;
    	}
    }
    return head;
};

/*
PART II
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
*/

