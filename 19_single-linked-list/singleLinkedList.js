// Node: next, prev
class Node {
	constructor(val) {
		this.next = null;
		this.val = val;
	}
}

class SingleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		this.length++;
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			// link old tail to point to the new node
			this.tail.next = newNode;
			// then add newNode as tail
			this.tail = newNode;
		}

		return this;
	}
	// remove the node from end of the linked list
	pop() {
		// remove tail
		// loop to n-1 list
		if (!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current; // removed tail
	}
	// remove head node
	shift() {
		if (!this.head) return undefined;
		// set new head
		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}

		return currentHead;
	}
	//push to to top

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const currentHead = this.head;
			this.head = newNode;
			newNode.next = currentHead;
		}
		this.length++;
		return this;
	}

	// can not get through index, loop through the list
	get(index) {
		if (index < 0 || index > this.length) return null;
		let current = this.head;
		for (let i = 1; i <= index; i++) {
			current = current.next;
		}
		return current;
	}

	set(index, value) {
		const target = this.get(index);
		if (target) {
			target.value = value;
			return true;
		}

		return false;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return undefined;

		// insert end
		if (index === 0) return this.unshift(value);

		// insert beginning
		if (index === this.length) return this.push(value);

		const newNode = new Node(value);
		let leftNode = this.get(index - 1);
		let rightNode = leftNode.next;
		newNode.next = rightNode;
		leftNode.next = newNode;

		this.length++;

		return true;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;

		// remove beginning
		if (index === 0) return this.shift(value);

		// remove end
		if (index === this.length) return this.pop(value);

		const leftNode = this.get(index - 1);
		const removed = leftNode.next;
		const rightNode = removed.next;

		leftNode.next = rightNode;

		this.length--;

		return removed;
	}

	//
	reverse() {
		// 1 => 2 => 3 => 4
		// 4 => 3 => 2 =>
		let movingNode = this.head;
		this.head = this.tail;
		this.tail = movingNode;

		let nextNode;
		let prevNode = null;
		for (let i = 0; i < this.length; i++) {
			nextNode = movingNode.next;
			movingNode.next = prevNode;

			prevNode = movingNode;
			movingNode = nextNode;
		}
	}
}
