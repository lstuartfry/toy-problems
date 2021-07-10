const isAnagram = require('../isAnagram');

describe('isAnagram', () => {
	it('returns true when passed two strings containing the same letters', () => {
		expect(isAnagram('hello', 'lhelo')).toEqual(true);
	});
	it('ignores whitespaces', () => {
		expect(isAnagram('hello   ', 'hello')).toEqual(true);
	});
	it('ignores capital letters', () => {
		expect(isAnagram('Hello', 'LeLoh')).toEqual(true);
	});
	it('returns false when passed two strings containing different letters', () => {
		expect(isAnagram('hello', 'hello there')).toEqual(false);
	});
});
