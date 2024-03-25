class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// enqueue
	enqueue(val) {
		const newNode = new Node(val);
		// if length = 0 , set head, tail = newNode
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		return ++this.length;
	}

	dequeue() {
		if (this.length === 0) return null;
		const oldHead = this.head;
		// set new head
		if (this.length === 1) {
			// set tail to null
			this.tail = null;
		}

		// if length === 1, oldHead.next = tail = null
		this.head = oldHead.next;

		this.length--;
		return oldHead.val;
	}

	peek() {
		if (this.length === 0) return null;

		return this.head.val;
	}
}

const queue = new Queue();

console.log(queue.dequeue());

queue.enqueue('this is first item in queue');
console.log(queue);
