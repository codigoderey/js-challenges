class Queue {
	constructor() {
		this.queue = [];
		this.head = 0;
		this.tail = 0;
		this.maxSize = 100;
	}

	enqueue(element) {
		if (this.isFull()) {
			return false;
		}
		this.queue[this.tail] = element;
		this.tail++;
		return true;
	}

	dequeue() {
		const item = this.queue[this.head];
		this.head++;
		return item;
	}

	peek() {
		return this.queue[this.head];
	}

	getLength() {
		return this.tail - this.head;
	}

	isEmpty() {
		return this.getLength() === 0;
	}

	isFull() {
		return this.getLength() === this.maxSize;
	}
}

// const queue = new Queue();
// (queue.isEmpty()); // true
// (queue.isFull()); // false
// (queue.enqueue(1)); // true
// (queue.enqueue(2)); // true
// (queue.enqueue(3)); // true
// (queue.peek()); // 1
// (queue.dequeue()); // 1
// (queue.peek()); // 2
// (queue.getLength()); // 2

module.exports = Queue;
