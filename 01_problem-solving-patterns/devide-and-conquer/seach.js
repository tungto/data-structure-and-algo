// input: sorted array of integers, a number
// output: index of number, -1 if not found

/**
 * 1. Naive O(n) - linear search
 * 2. Binary search - O(log(n))
 * @param {*} arr
 * @param {*} value
 * @returns
 */
function search(arr, value) {
	let min = 0;
	let max = arr.length - 1;

	while (max >= min) {
		let middle = Math.floor((min + max) / 2);

		if (value > arr[middle]) {
			min = middle + 1;
		} else if (value < arr[middle]) {
			max = middle - 1;
		} else {
			console.log(middle);
			return middle;
		}
	}

	return -1;
}

search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); //5
search([1, 2, 3, 4, 5, 6], 11); //-1
