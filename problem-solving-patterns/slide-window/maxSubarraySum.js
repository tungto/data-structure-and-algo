// input: array of integers and a number called n
// output: calculate the max sum of n consecutive element in the array

function maxSubarraySum(arr, number) {
	if (arr.length === 0) {
		console.log(null);
		return null;
	}

	let max = 0;
	let temp;
	for (let i = 0; i < number; i++) {
		max += arr[i];
	}

	temp = max;

	for (let i = number; i < arr.length; i++) {
		temp = temp - arr[i - number] + arr[i];
		max = Math.max(temp, max);
	}

	console.log(max);
	return max;
}

//examples
a = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
b = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
c = maxSubarraySum([4, 2, 1, 6], 1); // 6
d = maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
e = maxSubarraySum([], 4); // null
