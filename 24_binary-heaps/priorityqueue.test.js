const { PriorityQueue } = require('./priorityQueue');

const setupQueue = () => {
	const queue = new PriorityQueue();
	queue.enqueue('common cold', 5);
	queue.enqueue('gunshot wound', 1);
	queue.enqueue('high fever', 4);
	queue.enqueue('broken arm', 2);
	queue.enqueue('glass in foot', 3);
	return queue;
};

describe('Min priority queue', () => {
	let queue;

	beforeEach(() => {
		queue = setupQueue();
	});

	test('should insert elements correctly', () => {
		expect(queue.values).toEqual([
			{ val: 'gunshot wound', priority: 1 },
			{ val: 'broken arm', priority: 2 },
			{ val: 'high fever', priority: 4 },
			{ val: 'common cold', priority: 5 },
			{ val: 'glass in foot', priority: 3 },
		]);
	});

	test('should remove the highest-priority element correctly', () => {
		queue.dequeue();

		expect(queue.values).toEqual([
			{ val: 'broken arm', priority: 2 },
			{ val: 'glass in foot', priority: 3 },
			{ val: 'high fever', priority: 4 },
			{ val: 'common cold', priority: 5 },
		]);
	});
});
