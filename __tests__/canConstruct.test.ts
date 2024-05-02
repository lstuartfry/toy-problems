import canConstruct from '../canConstruct';

test('Empty ransom note and magazine should return true', () => {
  expect(canConstruct('', '')).toBe(true);
});

test('Empty ransom note and non-empty magazine should return true', () => {
  expect(canConstruct('', 'abc')).toBe(true);
});

test('Non-empty ransom note and empty magazine should return false', () => {
  expect(canConstruct('abc', '')).toBe(false);
});

test('Ransom note cannot be constructed from magazine should return false', () => {
  expect(canConstruct('a', 'b')).toBe(false);
  expect(canConstruct('aa', 'ab')).toBe(false);
});

test('Ransom note can be constructed from magazine should return true', () => {
  expect(canConstruct('aa', 'aab')).toBe(true);
  expect(canConstruct('abc', 'cba')).toBe(true);
});
