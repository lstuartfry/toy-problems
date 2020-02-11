const toCamelCase = require('../toCamelCase');

describe('toCamelCalse', () => {
	it('returns an empty string when passed an empty string', () => {
		expect(toCamelCase('')).toEqual('');
	});
	it('converts dash delimited words into camel casing', () => {
		expect(toCamelCase('test-one-two')).toEqual('testOneTwo');
	});
	it('converts underscore delimited words into camel casing', () => {
		expect(toCamelCase('test_one_two')).toEqual('testOneTwo');
	});
	it('handles strings with a mix of dashes and underscores', () => {
		expect(toCamelCase('test_one-two')).toEqual('testOneTwo');
	});
	it('does not automatically lowercase the first letter if it is capitalized', () => {
		expect(toCamelCase('This-stays-capital')).toEqual('ThisStaysCapital');
	});
	it('handles strings that contain consecutive underscores and/or dashes', () => {
		expect(toCamelCase('test---one___two')).toEqual('testOneTwo');
		expect(toCamelCase('test-_-one_-_two')).toEqual('testOneTwo');
	});
});
