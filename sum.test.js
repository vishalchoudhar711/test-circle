const sum = require('./sum');

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 5)).toBe(7);
});
