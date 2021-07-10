/*

Given two strings, determine if they are anagrams of each other

*/

// using Map()
const createMap = (string) => {
	let map = new Map();
	for (let char of string) {
		if (map.has(char)) {
			const currentValue = map.get(char);
			map.set(char, currentValue + 1);
		} else {
			map.set(char, 1);
		}
	}
	return map;
};

const normalize = (string) => string.replace(/\W/g, '').toLowerCase();

const isAnagram = (stringA, stringB) => {
	const mapA = createMap(normalize(stringA));
	const mapB = createMap(normalize(stringB));

	if (mapA.size !== mapB.size) {
		return false;
	}

	for (let [key, value] of mapA) {
		if (!mapB.has(key) || mapB.get(key) !== value) {
			return false;
		}
	}

	return true;
};

module.exports = isAnagram;
