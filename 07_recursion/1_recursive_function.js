/**
 *
 * base case: when recursion ends
 *
 */

function countDown(num) {
	console.log(num);
	if (num > 0) return countDown(--num);
}

countDown(10);
