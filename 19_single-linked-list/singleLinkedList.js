class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add node at end of list
	push(val) {
		const newNode = new Node(val);

		// if this linked list is empty then set both head and tail to new node
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	// remove the node from end of the linked list
	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		newTail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// add at top
	shift() {
		if (!this.head) return undefined;

		// if empty after remove

		// remove
		const oldHead = this.head;
		// if 1 node list, this.head.next = null
		const newHead = oldHead.next;

		// remove connect between old head and next node
		oldHead.next = null;
		this.head = newHead;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return oldHead;
	}

	// add at the top
	unshift() {
		// if no head or this linked list is empty
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

	get(index) {
		if (index < 0 || index > this.length - 1) return null;
		let start = 0;
		let curNode = this.head;
		while (start < index) {
			curNode = curNode.next;
			start++;
		}

		return curNode;
	}
	// set new val
	set(index, val) {
		const foundNode = this.get(index);
		if (!foundNode) return false;

		foundNode.val = val;
		return true;
	}

	// insert
	insert(index, val) {
		// check valid index
		if (index < 0 || index > this.length) return false;

		// insert at start
		if (index === 0) return !!this.unshift(val);

		// insert at end
		if (index === this.length) return !!this.push(val);

		// start at 0
		const prevNode = this.get(index - 1);
		const newNode = new Node(val);

		let temp = prevNode.next;
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++;

		return true;
	}

	// delete
	remove(index) {
		// empty
		if (index < 0 || index > this.length - 1) return undefined;

		if (index === 0) return this.shift();

		if (index === this.length - 1) return this.pop();

		const prev = this.get(index - 1);

		const deletedNode = prev.next;
		prev.next = deletedNode.next;

		// disconnect deleted node
		deletedNode.next = null;

		this.length--;

		return deletedNode;
	}

	//head - 1 => 2 => 3 => 4 -tail null
	//null- tail - 1 <== 2 <== 3 <== 4 <==
	reserver() {
		// reverse head and tail
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

const test = new LinkedList();

test.push('hello');
test.push('from');
test.push('an');
test.push('beautiful');
test.push('day');
// console.log(test.pop());
// console.log(test.get(2));
// console.log(test.set(2, 'set to a'));
// console.log(test.get(2));
// test.insert(2, 'this is insertion');
// console.log(test.remove(2));
// console.log(test.remove(5));
test.reserver();
console.log(test.get(2));
