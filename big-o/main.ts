const nemo = ['nemo'];

function findNemo(arr: string[]): number | undefined {
	return arr.find((item, index) => (item === 'nemo' ? index : -1));
}

findNemo(nemo);
