function numberCompare(num1, num2) {
	return num1 - num2;
}

[6, 4, 5, 7, 10, 3, 15].sort(numberCompare);

function compareByLen(str1, str2) {
	return str1.length - str2.length;
}
