/**
 * Implement a Queue class.
 * The 'enqueue' and 'dequeue' methods should have O(1) time complexity.
 */

class Node<T> {
  value: T | undefined;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value?: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class Queue<T> {
  _dummyHead: Node<T>;
  _dummyTail: Node<T>;
  _length: number;

  constructor() {
    this._dummyHead = new Node<T>();
    this._dummyTail = new Node<T>();
    this._dummyHead.prev = this._dummyTail;
    this._dummyTail.next = this._dummyHead;
    this._length = 0;
  }

  /**
   * Determines if the queue is empty
   */
  isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Adds an item to the back of the queue.
   * Returns the new length of the list.
   */
  enqueue(item: T): number {
    const node = new Node(item);

    // locate the current last position in the queue
    const prevLast = this._dummyTail.next;

    // link the new node to the current last position
    prevLast!.prev = node;
    node.next = prevLast;

    // link the new node to the dummy tail
    this._dummyTail.next = node;
    node.prev = this._dummyTail;

    // update the length of the list
    this._length++;

    // return the new length of the list
    return this._length;
  }

  /**
   * Remove an item from the front of the queue.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    // find the current front of the queue
    const node = this._dummyHead.prev;

    // link the second position to the new head of the queue
    const newFront = node!.prev;
    newFront!.next = this._dummyHead;
    this._dummyHead.prev = newFront;

    // unlink the node at the front of the queue
    node!.prev = null;
    node!.next = null;

    // update the length of the list
    this._length--;

    return node!.value;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   */
  front(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this._dummyHead.prev!.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue it.
   */
  back(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this._dummyTail.next!.value;
  }

  /**
   * Returns the number of items in the queue.
   */
  length(): number {
    return this._length;
  }
}
