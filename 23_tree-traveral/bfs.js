class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		var newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		var current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	find(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
	contains(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}

	// take advantage of Queue - FIFO
	// visit list and keep track what we visited

	BFS() {
		const queue = [];
		const data = [];

		let node = this.root;
		queue.push(node);

		while (queue.length) {
			let node = queue.shift();
			data.push(node.val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}

		console.log(data);

		return data;
	}
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);

bst.insert(15);

bst.insert(3);

bst.insert(8);
bst.insert(20);
bst.BFS();

//  10
//  6  15
// 3 8   20
// bfs: 10, 6, 15, 3, 8, 20
