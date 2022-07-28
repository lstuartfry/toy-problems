class Queue {
  constructor() {
    this.data = [];
  }

  add(val) {
    this.data.unshift(val);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
