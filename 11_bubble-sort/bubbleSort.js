function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}

/**
 * We can optimize this using noSwap (the arr already sorted but not loop over the arr yet)
 * @param {*} arr
 */
function buddleSort1(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	console.log(arr);
}

// loop from end to start
// loop from start to i

buddleSort1([5, 2, 6, 9, 11, 20, 1, 4]);
