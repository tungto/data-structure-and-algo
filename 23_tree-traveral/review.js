class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(val) {
		const newNode = new Node(val);
		// if empty tree
		if (!this.root) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				// val > current
				// val < current
				// val = current
				if (val === current.val) return false;
				if (val > current.val) {
					if (current.right === null) {
						// add to right
						current.right = newNode;
						return this;
					}
					current = current.right;
				} else if (val < current.val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				}
			}
		}
	}

	BFS() {
		let node = this.root;
		const queue = [];
		const result = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			result.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		console.log(result);
	}

	DFSHelperPreOrder(node, results) {
		results.push(node.val);
		if (node.left) {
			this.DFSHelperPreOrder(node.left, results);
		}
		if (node.right) {
			this.DFSHelperPreOrder(node.right, results);
		}

		return results;
	}

	DFSPreOrder() {
		let current = this.root;
		const results = this.DFSHelperPreOrder(current, []);

		console.log(results);
	}

	DFSHelperPostOrder(node, results) {
		if (node.left) {
			this.DFSHelperPostOrder(node.left, results);
		}
		if (node.right) {
			this.DFSHelperPostOrder(node.right, results);
		}
		results.push(node.val);
		return results;
	}

	DFSPostOrder() {
		let current = this.root;
		const results = this.DFSHelperPostOrder(current, []);

		console.log(results);
	}

	DFSHelperInOrder(node, results) {
		if (node.left) {
			this.DFSHelperPostOrder(node.left, results);
		}
		results.push(node.val);
		if (node.right) {
			this.DFSHelperPostOrder(node.right, results);
		}

		return results;
	}

	DFSInOrder() {
		let current = this.root;
		const results = this.DFSHelperInOrder(current, []);

		console.log(results);
	}
}

const tree = new BST();
tree.insert(10);
tree.insert(3);
tree.insert(1);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(10);

// const test = tree.find(13);

// console.log(test);

// tree.BFS();
tree.DFSPreOrder();
