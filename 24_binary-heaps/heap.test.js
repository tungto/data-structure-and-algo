const { MaxBinaryHeap } = require('./maxBinaryHeap.js');

const initHeap = () => {
	const heap = new MaxBinaryHeap();
	heap.insert(41);
	heap.insert(39);
	heap.insert(33);
	heap.insert(18);
	heap.insert(27);
	heap.insert(12);
	heap.insert(55);
	return heap;
};

describe('Max Heap', () => {
	let heap;

	beforeEach(() => {
		heap = initHeap();
	});

	test('insert elements into MaxBinaryHeap', () => {
		expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
	});

	test('extractMax removes and returns the largest element', () => {
		expect(heap.extractMax()).toBe(55);
		expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);
	});
});
