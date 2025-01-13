/**
 *
 * @param {*} arr
 */
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	console.log(arr);
};

/**
 * We can optimize this using noSwap (the arr already sorted but not loop over the arr yet)
 * @param {*} arr
 */
function buddleSortOptimize(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	console.log('no swap: ', arr);
}

bubbleSort([5, 2, 6, 9, 11, 20, 1, 4]);
buddleSortOptimize([5, 2, 6, 9, 11, 20, 1, 4]);
