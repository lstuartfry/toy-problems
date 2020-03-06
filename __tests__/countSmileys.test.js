const countSmileys = require('../countSmileys');

describe('countSmileys', () => {
	it('accepts an array of string values and returns the number of values matching a valid smiley face', () => {
		expect(countSmileys([':)', ';(', ';}', ':-D'])).toEqual(2);
		expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toEqual(3);
		expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
	});
});
