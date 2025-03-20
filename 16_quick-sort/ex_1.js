function strLength(a, b) {
	return a.length - b.length;
}

function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
	// good luck!
	const pivot = arr[start];
	let pivotIdx = start;
	for (let i = start + 1; i <= end; i++) {
		let shouldSwap = comparator
			? comparator(pivot, arr[i]) > 0
			: pivot > arr[i];
		if (shouldSwap) {
			pivotIdx++;
			swap(arr, pivotIdx, i);
		}
	}
	swap(arr, pivotIdx, start);

	console.log(arr, 'pivotIdx', pivotIdx);
	return pivotIdx;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

pivot(arr1); // 3
pivot(arr2); // 4
pivot(arr3, strLength); // 1
