/*
Implement a queue using stack methods.
*/

// we can simulate a queue using two stacks.  For example, let's use an inbox and an outbox
function twoStackQueue() {
	this.inbox = [];
	this.outbox = [];
}

// to add an item to our pseudo-queue, we simply push it into our inbox array
twoStackQueue.prototype.queue = val => this.inbox.push(val);

/*
to remove an item from our pseudo-queue, we simply pop off the top item in our outbox stack.
However, what if our outbox is empty?  After checking to see if our inbox is also empty, we need to
push every item in the inbox into the outbox.  We do this in queue-like fashion by popping off the top item in
the inbox, and pushing that item into the outbox.  This will enable us to dequeue later in queue-like fashion.
*/
twoStackQueue.prototype.dequeue = function() {
	if(!this.outbox.length) {
		if(!this.inbox.length) {
			return null;
		}
		while(this.inbox.length) {
			this.outbox.push(this.inbox.pop());
		}
	}
	return this.outbox.pop();
};