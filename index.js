class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class LinkedListQueue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	//enqueue
	enqueue() {
		// if first node
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	//dequeue
	dequeue() {
		if (!this.head) return null;

		let oldHead = this.head;
		this.head = oldHead.next;
		oldHead.next = null;
		length--;
		if (this.length === 0) {
			this.tail = null;
		}

		return oldHead;
	}

	// get the first element in queue
	peek() {
		if (!this.head) return null;

		return this.head.val;
	}

	find(val) {
		if (!this.head) return undefined;
		const current = this.head;
		while (current) {
			if (current.val === val) return current;
		}

		return undefined;
	}
}

// O(1)
//
