/**
 * edge cases: empty arr,
 * don't mu
 * @param {} arr
 */

// result array: []
// if odd => add to array
// else remove the item from array

const collectOddsValuesWithResultParam = (arr, result = []) => {
	// if arr[0] is odd
	console.log('arr', arr);

	// base case
	if (!arr[0]) return [];

	// recursive steps
	if (arr[0] % 2 !== 0) {
		result.push(arr[0]);
	}
	return collectOddsValuesWithResultParam(arr.slice(1), result);
};

/**
 * this one create new array every steps
 * @param {*} arr
 * @returns
 */
const collectOddsValues = (arr) => {
	// if arr[0] is odd
	console.log('arr', arr);

	// base case, return should be an array because
	if (arr.length === 0) return [];

	// recursive steps
	if (arr[0] % 2 !== 0) {
		return [arr[0], ...collectOddsValues(arr.slice(1))];
		// result.push(arr[0]);
	}
	return collectOddsValues(arr.slice(1));
};

const collectOddConcat = (arr) => {
	if (arr.length === 0) return [];

	const newArr = arr.slice(1);

	if (arr[0] % 2 !== 0) return [arr[0]].concat(collectOddConcat(newArr));
	else return collectOddConcat(newArr);
};

const arr = [1, 3, 4, 6, 8, 9];

const test = collectOddConcat(arr);
console.log(test);
