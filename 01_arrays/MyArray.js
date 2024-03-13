type NumIndexedObject = { [index: number]: any };

// method: get(index), push, shift, unshift, pop, delete
class MyArray<T> {
	public length: number;
	public data: NumIndexedObject;
	constructor() {
		this.length = 0;
		this.data = {};
	}

	/**
	 * Get element of given index
	 * @param index
	 * @returns Value, or null if non-existant
	 */
	public get(index: number): T | null {
		if (index < 0 || index > this.length) {
			return null;
		}
		return this.data[index];
	}

	/**
	 * Add element to array, i.e at index of Array.Length
	 * @param item Value/object to push
	 * @returns Length of array after push
	 */
	public push(item: T): number {
		this.data[this.length] = item; // add item to end of array
		this.length++; // increase length

		return this.length;
	}

	/**
	 *
	 * @param item
	 * @returns
	 */
	public unshift(item: T): number {
		// loop through the object and increase every key value by 1
		for (const [key, value] of Object.keys(this.data)) {
			this.data[key + 1] = value;
		}
		// create new object by adding new item to index 0 and cp the rest of data obj
		this.data = Object.assign({ 0: item }, this.data);

		this.length++;
		return this.length;
	}

	public pop() {
		if (this.length === 0) return undefined;

		delete this.data[this.length - 1];
		--this.length;

		return this.data;
	}

	public shift() {
		if (this.length === 0) return undefined;
		const newObject = {};
		for (const [key, value] of Object.keys(this.data)) {
			if (key !== '0') {
				newObject[+key - 1] = value;
			}
		}

		// pre-decrement
		--this.length;

		return this.data;
	}

	public deleteIndex(index: number): T | null {
		if (!this.data[index]) return null;
		const deletedItem = this.data[index];
		this._shiftItemsLeftAtIndex(index);

		return deletedItem;
	}

	public _shiftItemsLeftAtIndex(index: number): void {
		for (let i = index; i > 0; i++) {
			this.data[i] = this.data[i + 1];
		}

		delete this.data[this.length - 1]; // remove the last item
		this.length--;
	}
	public _shiftItemsRightAtIndex(index: number): void {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}

		delete this.data[this.length - 1]; // remove the last item
		this.length--;
	}
}
