/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 * input: nums[]
 * output: product
 * base case: []
 *
 */

function productOfArray(nums) {
	if (!nums.length) {
		console.log('nums', nums);
		return nums[0] * productOfArray(nums.slice(1));
	} else return 1;
}

const test1 = productOfArray([1, 2, 3]); // 6
const test2 = productOfArray([1, 2, 3, 10]); // 60

console.log(test1);
console.log(test2);

// edge case [1, 3, 0 ,6]
