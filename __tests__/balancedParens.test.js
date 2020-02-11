const balancedParens = require('../balancedParens');

describe('balancedParens', () => {
	it('returns true when passed an empty string', () => {
		expect(balancedParens('')).toEqual(true);
	});
	it('returns true when passed a series of valid opening & closing parens', () => {
		expect(balancedParens('(())')).toEqual(true);
		expect(balancedParens('{{}}')).toEqual(true);
		expect(balancedParens('[[]]')).toEqual(true);
	});
	it('returns false when passed a series of invalid opening & closing parens', () => {
		expect(balancedParens('((())')).toEqual(false);
		expect(balancedParens('{{{}}')).toEqual(false);
		expect(balancedParens('[[[]]')).toEqual(false);
	});
	it('handles multiple types of parens', () => {
		expect(balancedParens('({[]})')).toEqual(true);
		expect(balancedParens('[{(}]')).toEqual(false);
	});
});
