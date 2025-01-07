class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

/**
 * pros: ADD, remove(head, tail quick) no need to re-index
 * cons: use more space than (array, store pointer), search slow
 * property: head, tail, length;
 * API:
 * - add(val)
 * - pop, shift
 * - push(val), unshift(val)
 * - get(index)
 * - find(index)
 * - remove(index)
 * - reverse
 */
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	length() {
		return this.length;
	}

	// add
	add(val) {
		const newNode = new Node(val);
		this.length++;
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		this.tail.next = newNode;
		this.tail = newNode;
	}

	// remove from tail
	pop() {
		if (!this.head) return;

		let currentNode = this.head;
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		console.log('currentNode', currentNode);
		this.tail = currentNode;
		currentNode.next = null;
		this.length--;
	}

	// print
	print() {
		let node = this.head;
		console.log('========print list');
		while (node) {
			console.log(node.value);
			node = node.next;
		}
	}
}

//test
const list = new LinkedList();

list.add(5);
list.add(19);
list.add(10);
list.add(3);

list.print();

list.pop();
list.print();
