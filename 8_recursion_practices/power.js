function power(base, exp) {
	console.log('exp', exp);
	if (exp === 0) return 1;

	while (exp > 0) {
		return base * power(base, --exp);
	}
}

const test1 = power(2, 0); // 1
const test2 = power(2, 2); // 4
const test3 = power(2, 4); // 16

console.log(test1);
console.log(test2);
console.log(test3);
