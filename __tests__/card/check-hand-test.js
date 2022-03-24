const checkHand = require('../../card/check-hand.js');

test('one pair', () => {
  expect(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])).toBe('pair');
});