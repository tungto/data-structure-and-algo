/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// O(n)
var strStr = function (haystack, needle) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle[0]) {
			for (let j = 0; j < needle.length; j++) {
				if (needle[j] !== haystack[i + j]) break;
				if (j === needle.length - 1) return i;
			}
		}
	}

	return -1;
};

const naiveSearch = (long, pattern) => {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (pattern[j] !== long[i + j]) break;
			if (j === pattern.length - 1) {
				count++;
			}
		}
	}
	console.log('count', count);
	return count;
};

naiveSearch('leetcode', 'leetco');
naiveSearch('lorie loled lolandklol', 'lol');
