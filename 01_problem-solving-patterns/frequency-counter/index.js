/**
 * input: two array
 * true:
 * - every value in array one has its corresponding value squared in array two
 * - the frequency of values must be the same: two 2, four 5 => two 4, four 25
 */

// store the frequency or rather the occurrence of data to object

// NAIVE SOLUTION
function same1(arr1, arr2) {
	if (arr1.length != arr2.length) return false;

	// find index of number in arr1 squared and remove from arr2

	for (let number of arr1) {
		let idx = arr2.indexOf(number ** 2);

		if (idx === -1) return false;

		arr2.splice(idx, 1);
	}

	return true;
}

// REFACTORED SOLUTION
function same(arr1, arr2) {
	if (arr1.length != arr2.length) return false;

	const sqrObj = {};

	for (let number of arr1) {
		if (!sqrObj[number ** 2]) {
			sqrObj[number ** 2] = 0;
		}
		sqrObj[number ** 2]++;
	}

	for (let number of arr2) {
		if (!sqrObj[number] || sqrObj[number] === 0) {
			return false;
		}

		sqrObj[number]--;
	}

	return true;
}

console.log(same1([1, 2, 3, 2, 3], [9, 1, 4, 4, 9]));
