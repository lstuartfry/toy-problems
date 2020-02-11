const formatNames = require('../formatNames');

describe('formatNames', () => {
	it('returns a string formatted as a list of comma-separated names, except for the last 2 names which are separated by an ampersand', () => {
		expect(
			formatNames([
				{ name: 'Renee' },
				{ name: 'Joaquin' },
				{ name: 'Laura' },
				{ name: 'Brad' },
			])
		).toEqual('Renee, Joaquin, Laura & Brad');
	});
	it('returns an empty string if passed an empty list', () => {
		expect(formatNames([])).toEqual('');
	});
});
