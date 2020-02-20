const sortArray = require('../sortArray');

describe('sortArray', () => {
	it('sorts an array so odds numbers are ascending but even numbers stay in place', () => {
		expect(sortArray([11, 5, 1, 11, 2, 1, 111])).toEqual([
			1,
			1,
			5,
			11,
			2,
			11,
			111,
		]);
		expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
	});
});
