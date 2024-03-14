function collectOddsValues(arr) {
	let results = [];

	function helper(helperInput) {
		if (helperInput.length == 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			results.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);

	console.log(results);

	return results;
}

collectOddsValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
