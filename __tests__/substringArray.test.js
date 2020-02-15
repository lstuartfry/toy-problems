const substringArray = require('../substringArray');

describe('substringArray', () => {
	it('returns a sorted array of substrings that appear in a second array', () => {
		const a1 = ['supe', 'wonder', 'bat'];
		const a2 = ['batman, superman', 'wonder woman'];
		expect(substringArray(a1, a2)).toEqual(['bat', 'supe', 'wonder']);
	});
	it('does not contain duplicate substrings', () => {
		const a1 = ['th', 'be'];
		const a2 = ['before', 'there', 'that', 'begin'];
		expect(substringArray(a1, a2)).toEqual(['be', 'th']);
	});
});
