class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}
	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	set(key, value) {
		const index = this._hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}

		this.keyMap[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key);

		if (this.keyMap[index]) {
			const item = this.keyMap[index];
			for (let i = 0; i < item.length; i++) {
				const element = item[i];
				if (element[0] === key) {
					return element[1];
				}
			}
		}

		return undefined;
	}

	keys() {
		let output = [];
		for (const element of this.keyMap) {
			if (element) {
				for (const el of element) {
					if (!output.includes(el[0])) {
						output.push(el[0]);
					}
				}
			}
		}
		console.log(output);

		return output;
	}

	// * should we handle duplicate values?
	values() {
		let output = [];
		for (const element of this.keyMap) {
			if (element) {
				for (const el of element) {
					if (!output.includes(el[1])) {
						output.push(el[1]);
					}
				}
			}
		}
		console.log(output);

		return output;
	}
}

module.exports = { HashTable };
