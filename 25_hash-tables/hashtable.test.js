const { HashTable } = require('./review');

describe('hash table', () => {
	const ht = new HashTable(17);
	beforeEach(() => {
		ht.set('maroon', '#800000');
		ht.set('yellow', '#FFFF00');
		ht.set('olive', '#808000');
		ht.set('salmon', '#FA8072');
		ht.set('lightcoral', '#F08080');
		ht.set('mediumvioletred', '#C71585');
		ht.set('plum', '#DDA0DD');
		ht.set('olive1', '#808000');
		ht.set('plum', '#808000');
	});

	test('get item should return correct item', () => {
		expect(ht.get('plum')).toEqual('#DDA0DD');
	});

	test('get keys should return all keys', () => {
		expect(ht.keys()).toEqual([
			'plum',
			'salmon',
			'maroon',
			'yellow',
			'olive1',
			'olive',
			'lightcoral',
			'mediumvioletred',
		]);
	});

	test('get values should list all values', () => {
		expect(ht.values()).toEqual([
			'#DDA0DD',
			'#808000',
			'#FA8072',
			'#800000',
			'#FFFF00',
			'#F08080',
			'#C71585',
		]);
	});
});
