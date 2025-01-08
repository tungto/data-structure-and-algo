/**
 *
 * ONLY WORKS ON SORTED ARRAY
 * eliminate fifthy percent of searching time
 *
 */

function binarySearch(arr, value) {
	// add whatever parameters you deem necessary - good luck!
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (value > arr[middle]) {
			left = middle + 1;
		} else if (value < arr[middle]) {
			right = middle - 1;
		} else if (value === arr[middle]) {
			console.log(middle);
			return middle;
		}
	}
	console.log(-1);
	return -1;
}

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
