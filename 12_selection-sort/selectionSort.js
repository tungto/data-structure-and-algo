function selectionSort(arr) {
	let minIndex;
	let temp;

	for (let i = 0; i < arr.length; i++) {
		minIndex = i;

		// loop from i + 1 to end
		// not from 0 1 to end
		for (let j = i + 1; j < arr.length; j++) {
			console.log(j);
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		// console.log(i, minIndex, arr[minIndex]);

		temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}

	// console.log(arr);
}

selectionSort([64, 25, 12, 22, 11]);
// i = 0 1 2

// 11 25 12 22 64 // tempindx = 1
// 11 12 25 22 64 // tempindex = 2
// 11 12 22 25 64
