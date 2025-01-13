const insertionSort = (arr) => {
	// loop from 1 to end
	for (let i = 0; i < arr.length; i++) {
		let curVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
			arr[j + 1] = arr[j];
		}

		// how about 0
		arr[j + 1] = curVal;
	}

	console.log(arr);
};

insertionSort([64, 25, 12, 22, 11]);
