class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

/**
 * binary tree
 * left sub tree: contains value < node's value
 * right sub tree: contains value > node's value
 * no duplicates
 * Usage: efficiently for searching, inserting, and deleting
 */
class BST {
	constructor() {
		this.root = null;
	}
	insert(val) {
		const newNode = new Node(val);

		if (!this.root) this.root = newNode;
		else {
			let current = this.root;
			while (true) {
				if (current.val === val) return false;

				if (current.val > val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				}

				if (val > current.val) {
					if (current.right === null) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}
	}

	find(val) {
		if (!this.root) return false;

		let current = this.root;
		while (current !== null) {
			if (current.val === val) return true;
			if (current.val > val) current = current.left;
			else current = current.right;
		}

		return false;
	}

	delete() {}

	/**
	 * use queue FIFO to visiting nodes left to right at each level
	 * @returns
	 */
	BFS() {
		if (!this.root) return [];
		const result = [];
		const queue = [this.root];

		while (queue.length) {
			let node = queue.shift(); // move from the top
			result.push(node.val);
			// need to check specific != null
			if (node.left !== null) queue.push(node.left);
			if (node.right !== null) queue.push(node.right);
		}

		return result;
	}

	/**
	 * Root -> left -> right
	 * Copying trees, Prefix expressions
	 * @returns
	 */
	DFSPreOrder() {
		const result = [];
		let node = this.root;
		const traverse = (node, result) => {
			result.push(node.val);
			if (node.left !== null) traverse(node.left, result);
			if (node.right !== null) traverse(node.right, result);

			return result;
		};
		return traverse(node, result);
	}

	/**
	 * Left -> Root -> Right
	 * Sorting BST elements, Infix expressions
	 * @returns sorted array
	 */
	DFSInOrder() {
		const result = [];
		let node = this.root;
		const traverse = (node, result) => {
			if (node.left !== null) traverse(node.left, result);
			result.push(node.val);
			if (node.right !== null) traverse(node.right, result);

			return result;
		};
		return traverse(node, result);
	}

	/**
	 * Left -> Right -> root
	 * Deleting trees, Postfix expressions
	 * @returns
	 */
	DFSPostOrder() {
		const result = [];
		let node = this.root;
		const traverse = (node, result) => {
			if (node.left !== null) traverse(node.left, result);
			if (node.right !== null) traverse(node.right, result);
			result.push(node.val);
			return result;
		};
		return traverse(node, result);
	}
}

module.exports = { BST };
