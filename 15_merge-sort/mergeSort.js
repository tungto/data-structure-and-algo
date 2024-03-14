// input: two sorted array
// same length
function merge(arr1, arr2) {
	const result = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		// console.log(arr1[i], arr2[j]);
		if (arr1[i] > arr2[j]) {
			result.push(arr2[j]);
			j++;
		} else if (arr1[i] === arr2[j]) {
			result.push(arr1[i], arr2[j]);
			i++;
			j++;
		} else {
			result.push(arr1[i]);
			i++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
	// console.log(result);
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
// mergeTwoArr([1, 10, 50], [2, 14, 99, 100]);
const sorted = mergeSort([10, 24, 76, 73]);

console.log(sorted);
