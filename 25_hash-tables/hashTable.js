const util = require('util');

// version 1
// function hash(key, arrayLen) {
// 	let total = 0;

// 	for (let i = 0; i < key.length; i++) {
// 		let char = key[i];
// 		let value = char.charCodeAt(0) - 96;
// 		total = (total + value) % arrayLen;
// 	}
// 	return total;
// }

// improving
// function hash(key, arrayLen) {
// 	let total = 0;
// 	let PRIME = 31;
// 	for (let i = 0; i < Math.min(key.length, 100); i++) {
// 		let char = key[i];
// 		let value = char.charCodeAt(0) - 96;
// 		total = (total * PRIME + value) % arrayLen;
// 	}
// 	return total;
// }

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

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('olive1', '#808000');
ht.set('plum', '#808000');

// console.log(JSON.stringify(ht));
// console.log(util.inspect(ht, false, null, true /* enable colors */));

// console.log(ht.get('salmon'));

// console.log(ht.keys());
ht.keys();
ht.values();
