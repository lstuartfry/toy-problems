import Queue from '../queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('should initialize an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
  });

  it('should enqueue items to the back of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length()).toBe(3);
    expect(queue.front()).toBe(1);
    expect(queue.back()).toBe(3);
  });

  it('should dequeue items from the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.length()).toBe(2);
    expect(queue.front()).toBe(2);
    expect(queue.back()).toBe(3);

    expect(queue.dequeue()).toBe(2);
    expect(queue.length()).toBe(1);
    expect(queue.front()).toBe(3);
    expect(queue.back()).toBe(3);

    expect(queue.dequeue()).toBe(3);
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return undefined when dequeueing from an empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should return the item at the front of the queue without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front()).toBe(1);
    expect(queue.length()).toBe(3);
  });

  it('should return the item at the back of the queue without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.back()).toBe(3);
    expect(queue.length()).toBe(3);
  });
});
