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
			return this;
		} else {
			let current = this.root;
			// if val > root and right null;
			while (true) {
				if (val === current.val) return undefined;
				if (val < current.val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else if (val > current.val) {
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
		let current = this.root;
		// loop from root the end left
		while (current !== null) {
			if (current.val === val) return current;

			if (val > current.val) {
				current = current.right;
			} else if (val < current.val) {
				current = current.left;
			}
		}

		return undefined;
	}

	remove(val) {}
}

const tree = new BST();

tree.insert(10);
tree.insert(3);
tree.insert(1);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(10);

const test = tree.find(13);

console.log(test);
