// implement by linked list?
// queue have head and tail, operations should be O(1)

class Queue {
	constructor() {
		this.items = {};
		this.headIndex = 0;
		this.tailIndex = 0;
	}

	// queue items arrange from headIndex to tailIndex - 1
	enqueue(val) {
		// if queue is not empty?
		this.items[this.tailIndex] = val;
		this.tailIndex++;
	}
	dequeue() {
		this.#validate();

		const item = this.items[this.headIndex];
		delete this.items[this.headIndex];
		this.headIndex++;

		return item;
	}

	// first added item
	peek() {
		this.#validate();
		return this.items[this.headIndex];
	}

	get length() {
		return this.tailIndex - this.headIndex;
	}

	#validate() {
		// head = tail => no between => empty
		if (this.headIndex === this.tailIndex) return null;
	}
}

const queue = new Queue();

queue.enqueue('hello');

queue.enqueue('from');
queue.enqueue('hanoi');

queue.dequeue();

console.log(queue);
console.log(queue.peek());
console.log(queue.length);
