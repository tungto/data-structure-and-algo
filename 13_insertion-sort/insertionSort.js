// function insertionSort(arr) {
// 	let minIndex;
// 	for (let i = 1; i < arr.length; i++) {
// 		let curVal = arr[i];
// 		for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
// 			arr[j + 1] = arr[j];
// 		}
// 		arr[j + 1] = curVal; //
// 	}
// 	console.log(arr);
// }

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let curValue = arr[i];

		for (var j = i - 1; j >= 0 && arr[j] > curValue; j--) {
			// if left value > cur => move left to right
			arr[j + 1] = arr[j];
		}

		// if loop to 0 or arr[j] < arr[j +1]
		// insert the curValue at that position
		arr[j + 1] = curValue; // j + 1 here equal j because we already decrease j at the loop above j--
	}

	console.log(arr);
}

insertionSort([64, 25, 12, 22, 11]);

// cur = 12
// 25 64 12 22 11
// 25 64 64 22 11
// 25 12 64
