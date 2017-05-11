'use strict';

module.exports = class StringSplosion {
	constructor (input) {
		this.input = input;
	}

	manipulate() {
		let item = "";
		let result = "";
		let inputLength = this.input.length;
		for(let counter = 0; counter < inputLength; counter++) {
			item += this.input[counter];
			result += item;
		}
		return result;
	}
}