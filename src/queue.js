const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class Queue {
  constructor() {
    this.head = null
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new Node(value)
    } else {
      let node = this.head
      while (node.next) {
        node = node.next
      }
      node.next = new Node(value)
    }
  }

  dequeue() {
    let first = this.head
    this.head = this.head.next
    return first.value
  }
}

module.exports = {
  Queue
};
