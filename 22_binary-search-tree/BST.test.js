const { BST } = require('./BST');

describe('BST ', () => {
	let bst;

	// Setup a fresh BST before each test
	beforeEach(() => {
		bst = new BST();
	});

	test('insert BST', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(2);
		bst.insert(7);

		expect(bst.root.val).toBe(10);
		expect(bst.root.left.val).toBe(5);
		expect(bst.root.right.val).toBe(15);
		expect(bst.root.left.left.val).toBe(2);
		expect(bst.root.left.right.val).toBe(7);
	});

	test('should not insert duplicate values', () => {
		bst.insert(10);
		bst.insert(10); // Attempt to insert duplicate

		expect(bst.root.val).toBe(10);
		expect(bst.root.left).toBeNull();
		expect(bst.root.right).toBeNull();
	});

	test('should return node if found and undefined if not found', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(2);
		bst.insert(7);
		expect(bst.find(2)).toEqual(true);
		expect(bst.find(5)).toEqual(true);
		expect(bst.find(15)).toEqual(true);
		expect(bst.find(100)).toEqual(false);
	});

	test('should travel to every nodes on same level', () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(2);
		bst.insert(7);
		bst.insert(12);
		bst.insert(17);
		const result = bst.BFS();
		expect(result).toEqual([10, 5, 15, 2, 7, 12, 17]);
	});

	test('DFS Preorder push data from root to most left and to most right', () => {
		bst.insert(10);
		bst.insert(6);
		bst.insert(15);
		bst.insert(3);
		bst.insert(8);
		bst.insert(20);
		const result = bst.DFSPreOrder();
		expect(result).toEqual([10, 6, 3, 8, 15, 20]);
	});

	test('DFS Preorder push data from root to most left and to most right', () => {
		bst.insert(10);
		bst.insert(6);
		bst.insert(15);
		bst.insert(3);
		bst.insert(8);
		bst.insert(20);
		const result = bst.DFSPostOrder();
		expect(result).toEqual([3, 8, 6, 20, 15, 10]);
	});

	test('DFS Preorder push data from root to most left and to most right', () => {
		bst.insert(10);
		bst.insert(6);
		bst.insert(15);
		bst.insert(3);
		bst.insert(8);
		bst.insert(20);
		const result = bst.DFSInOrder();
		expect(result).toEqual([3, 6, 8, 10, 15, 20]);
	});
});
