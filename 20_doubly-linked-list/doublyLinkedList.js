/**
 * almost identical with single linked list except every node has another node point to the previous node
 * more memory === more flexibility
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}
	// remove node at end of linked list
	pop() {
		if (!this.head) {
			return undefined;
		}

		let oldTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}

		this.length--;

		return oldTail;
	}

	shift() {
		//1. no head
		if (!this.head) return undefined;
		//2. length = 1
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		// length > 1
		else {
			this.head = oldHead.next;
			this.head.prev = null;
			// remember to isolate the shifted head from next and prev links
			oldHead.next = null;
		}

		this.length--;
		console.log(oldHead);
		return oldHead;
	}
	// push node at start
	unshift(val) {
		const newNode = new Node(val);
		// is there any edge case
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;

		return this;
	}

	get(index) {
		if (this.length === 0 || index > this.length) return undefined;

		let mid = Math.floor(this.length / 2);
		let temp;
		let count;
		// loop from head
		if (index < mid) {
			temp = this.head;
			count = 0;
			while (count !== index) {
				temp = temp.next;
				count++;
			}
		} else {
			temp = this.tail;
			count = this.length - 1;
			// loop from tail
			while (count !== index) {
				temp = temp.prev;
				count--;
			}
		}
		console.log('get node', temp);
		return temp;
	}

	// update val of node at the index place
	set(index, val) {
		const curNode = this.get(index);

		if (!curNode) return false;
		// insert node at index
		curNode.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return;

		if (index === 0) {
			this.unshift(val);
		} else if (index === this.length) {
			this.push(val);
		} else {
			const curNode = this.get(index);

			// console.log('curNode', curNode);

			const newNode = new Node(val);

			const prevCurNode = curNode.prev;
			prevCurNode.next = newNode;
			newNode.next = curNode;
			curNode.prev = newNode;
			newNode.prev = prevCurNode;
			this.length++;
		}

		return this;
	}

	remove(index) {
		if (index < 0 || index > this.length) undefined;

		if (index === 0) {
			return this.shift();
		} else if (index === this.length - 1) {
			return this.pop();
		} else {
			const beforeNode = this.get(index - 1);
			var removedNode = beforeNode.next;
			const afterNode = removedNode.next;

			beforeNode.next = afterNode;
			afterNode.prev = beforeNode;

			removedNode.next = null;
			removedNode.prev = null;
			return removedNode;
		}
	}
}

const list1 = new DoubleLinkedList();
list1.push('hello');
list1.push('world');

list1.push(99);
// list1.pop();
// list1.shift();
// list1.get(2);
list1.insert(1, 'this is insert');
list1.remove(1);
list1.get(1);

console.log(list1);
