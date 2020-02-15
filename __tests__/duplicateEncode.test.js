const duplicateEncode = require('../duplicateEncode');

describe('duplicateEncode', () => {
	it('iterates over a string and returns a new string based on unique character count', () => {
		expect(duplicateEncode('success')).toEqual(')())())');
		expect(duplicateEncode('sassy')).toEqual(')())(');
	});
	it('treats uppercase and lowercase characters as the same character', () => {
		expect(duplicateEncode('Success')).toEqual(')())())');
		expect(duplicateEncode('SaSsy')).toEqual(')())(');
	});
});
