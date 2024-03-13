/**
 *  Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

// sorted
// first pair

function sumZero(arr) {
	// naive : O(n^2) - nested loop
	// loop from 1 to 1/2
	// loop from end to 1/2

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];

		if (sum === 0) {
			console.log([arr[left], arr[right]]);
			return [left, right];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}

	console.log('undefined');
}

sumZero([-3, -2, -1, 0, -1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
