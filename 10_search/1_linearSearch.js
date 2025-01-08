/**
 *
 * LINEAR SEARCH
 * input: arr, value
 * output: int (index of found value or -1)
 * start = 0
 * end = arr.length - 1
 * while (start < end ) arr[start] === value => true
 * return false
 *
 * @param {*} arr
 * @param {*} value
 * @returns
 */

/**
 *
 * steps:
 * input: arr, value
 * loop through the arr and check if current value is equal to the value
 * if it is, return the index at which the element is found
 * if the value is never found, return -1
 * method use linear search: findIndex, indexOf, include
 * Big O
 * time complexity: O(n)
 * space complexity: O(1)
 * ARR NOT SORTED
 */

function linearSearch(arr, value) {
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] === value) return index;
	}
	return -1;
}

const test = linearSearch([3, 5, 7, 11, 14, 3], 55);

console.log(test);
