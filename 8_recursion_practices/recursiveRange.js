/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 * input: a number, a total from 0 to the number
 * base case: total > number
 * recursive steps:
 */

const recursiveRange = (n) => {
	if (n === 0) return 0;
	return n + recursiveRange(n - 1);
};

const test = recursiveRange(10);

console.log(test);
