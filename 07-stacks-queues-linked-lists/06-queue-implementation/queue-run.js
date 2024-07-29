const Queue = require("./queue");

const queue = new Queue();
queue.isEmpty();
queue.isFull();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.peek();
queue.dequeue();
queue.peek();
queue.getLength();
