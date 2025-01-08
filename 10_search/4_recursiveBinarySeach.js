const recursiveBS = (arr, val, left = 0, right = arr.length - 1) => {
	if (left > right) {
		console.log(-1);
		return -1;
	}

	let mid = Math.floor((left + right) / 2);

	if (arr[mid] === val) {
		console.log(mid);
		return mid;
	} else if (arr[mid] > val) {
		recursiveBS(arr, val, left, mid - 1);
	} else {
		recursiveBS(arr, val, mid + 1, right);
	}
};
recursiveBS([1, 2, 3, 4, 5], 2); // 1
recursiveBS([1, 2, 3, 4, 5], 3); // 2
recursiveBS([1, 2, 3, 4, 5], 5); // 4
recursiveBS([1, 2, 3, 4, 5], 6); // -1
