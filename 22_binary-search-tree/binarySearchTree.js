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
		if (!this.root) {
			this.root = newNode;
		} else {
			var tempNode = this.root;

			while (true) {
				if (val === tempNode.val) return undefined;

				if (val < tempNode.val) {
					if (tempNode.left === null) {
						tempNode.left = newNode;
						return this;
					} else {
						tempNode = tempNode.left;
					}
				} else {
					if (tempNode.right === null) {
						tempNode.right = newNode;
						return this;
					} else {
						tempNode = tempNode.right;
					}
				}
			}
		}
	}

	find(val) {
		if (!this.root) return null;
		let tempNode = this.root;
		while (true) {
			if (tempNode.val === val) return tempNode;
			if (tempNode.val > val) {
				if (tempNode.left === null) {
					return null;
				}

				tempNode = tempNode.left;
			}

			if (tempNode.val < val) {
				if (tempNode.right === null) return null;
				tempNode = tempNode.right;
			}
		}
	}
}

const bst = new BST();
bst.insert(16);
bst.insert(20);
bst.insert(30);
bst.insert(16);
bst.insert(5);
bst.insert(28);
console.log(bst.root);

console.log(bst.find(16));
