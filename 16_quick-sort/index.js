const merge = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	const results = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			// if arr2 <=arri [i]
			results.push(arr2[j]);
			j++;
		}
	}

	// if finish 1 array, push items left in the other to result
	while (arr1[i]) {
		results.push(arr1[i]);
		i++;
	}
	while (arr2[j]) {
		results.push(arr2[j]);
		j++;
	}
	return results;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
};

var nums = [
	4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
	4342, 32,
];

const test = mergeSort(nums);
// console.log(test);

/**
 * quick sort
 * choose pivot
 *
 */

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
	const pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);

	return swapIdx;
};

pivotHelper([3, 4, 9, 3, 6, 1, 7, 1, 2]);
// 1 3 4 9 3 6 7

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivotHelper(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
};

const test1 = quickSort([3, 4, 9, 3, 6, 1, 7, 1, 2]);

console.log(test1);
