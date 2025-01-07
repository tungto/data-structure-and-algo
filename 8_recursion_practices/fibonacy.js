/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 *base case: num =
 *
 */

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n, cur, prev) {
	// add whatever parameters you deem necessary - good luck!
	// 0 1 1 2 3 5
	// start from 0
	//

	if (n < 2) return 1;

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// fn = f(n-1) + f(n-2)
// 4 = 3 + 2 + 1 + 0
// 5 = 4 + 3 + 2 + 1 +
