/**
 * Implement stack using array - LIFO
 * unshift - shift
 * push - pop
 * Efficiency: remove from bottom more efficient than remove from top
 */

// const stack = [];

// stack.push(1);
// stack.push(2);
// stack.pop();

// const stack2 = [];
// stack2.unshift(1);
// stack2.unshift(2);
// stack2.shift();

/**
 * Implement using linked list
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// stack has head, tail, length
class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// push to bottom
	push(val) {
		// if stack null set head and tail equal newNode

		const newNode = new Node(val);
		if (this.length == 0) {
			this.head = val;
			this.tail = val;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		return ++this.length;
	}

	// LIFO
	// get from bottom
	pop() {
		// if stack is null
		if (this.length === 0) return null;
		let oldHead = this.head;

		if (this.length === 1) {
			this.tail = null;
		}

		this.head = oldHead.next;

		this.length--;
		return oldHead.val;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);

stack.pop();
stack.push(5);
stack.push(10);
stack.pop();
console.log(stack);
