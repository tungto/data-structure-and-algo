/**
 * 242. Valid Anagram - leetcode
 */
// same characters and frequency of each character

const isAnagram = (s, t) => {
	const lookup = {};
	if (s.length !== t.length) return false;

	for (let char of s) {
		if (!lookup[char]) {
			lookup[char] = 0;
		}
		lookup[char]++;
	}

	for (let char of t) {
		if (!lookup[char] || lookup[char] === 0) return false;
		lookup[char]--;
	}

	return true;
};

isAnagram('anagram', 'nagaram');
isAnagram('rat', 'car');
isAnagram('aaz', 'zza');
