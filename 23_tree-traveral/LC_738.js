/**
 * 783. Minimum Distance Between BST Nodes
Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.
Input: root = [4, 2, 6, 1, 3];
Output: 1;
Input: root = [1,0,48,null,null,12,49]
Output: 1

Analytics: 
- BST already sorted => the different between parent node vs directly child is smallest
- traverse through the tree and check for smallest subtraction
 */

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
	insert(val) {
		const newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			var current = this.root;
			while (true) {
				if (val < current.val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if (val > current.val) {
					if (current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	// todo: implement insert using recursion
	insertRecursion() {}

	minDiffBST() {
		let minDiff = Infinity;
		let prev = null;

		const inOrder = (node) => {
			if (node === null) return;

			inOrder(node.left);

			if (prev !== null) {
				minDiff = Math.min(minDiff, node.val - prev);
			}
			prev = node.val;

			inOrder(node.right);
		};

		inOrder(this.root);

		console.log('minDiff', minDiff);
	}

	/**
	 * BFS
	 * using queue to push leaves in same level to it then
	 * traverse through the queue
	 */
	BFS() {
		const queue = [];
		const result = [];
		let node = this.root;
		queue.push(node);
		while (queue.length > 0) {
			node = queue.shift(); // FIFO move from the top
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			result.push(node.val);
		}

		console.log(result);
		return result;
	}

	/**
	 * In this problem, because parent and directly child node is closest in value, so we
	 * will using DFS instead of BFS
	 * inputs: result [], currentNode, min subtract
	 * output: result, min subtract
	 */
	traverse(result, node, min = null) {
		if (node.left !== null) this.traverse(result, node.left, min);
		result.push(node.val);

		if (node.right !== null) this.traverse(result, node.right, min);

		return result;
	}

	DFSInOrder() {
		const result = this.traverse([], this.root);

		return result;
	}
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
// 	.insert(15)
// 	.insert(20)
// 	.insert(10)
// 	.insert(12)
// 	.insert(1)
// 	.insert(5)
// 	.insert(50);

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4).insert(2).insert(6).insert(1).insert(3);
binarySearchTree.minDiffBST();
// binarySearchTree
// 	.insert(1)
// 	.insert(0)
// 	.insert(48)
// 	.insert(null)
// 	.insert(null)
// 	.insert(12)
// 	.insert(49);
// binarySearchTree.DFSInOrder(); // [1, 5, 10, 12, 15, 20, 50]

// [4, 2, 6, 1, 3];
// [1,0,48,null,null,12,49] - this equal insert [1, 0 , 48, 12, 49]
