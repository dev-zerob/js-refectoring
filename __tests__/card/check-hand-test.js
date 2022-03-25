const card = require('../../card/check-hand.js');

describe('checkHand()', () => {
  it('handles pairs', () => {
    expect(card.checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])).toBe('pair');
    expect(card.checkHand(['3-H', '3-C', '4-D', '5-H', '2-C'])).toBe('pair');
  });

  it('handles three of a kind', () => {
    expect(card.checkHand(['3-H', '3-C', '3-D', '5-H', '2-H'])).toBe('three of a kind');
  });
  
  it('handles four of a kind', () => {
    expect(card.checkHand(['3-H', '3-C', '3-D', '3-H', '2-H'])).toBe('four of a kind');
  });

  it('handles high card', () => {
    expect(card.checkHand(['1-H', '2-C', '3-D', '4-H', '5-H'])).toBe('high card');
  });
});

describe('isPair()', () => {
  it('finds a pair', () => {
    expect(card.isPair(['2-H', '3-C', '4-D', '5-H', '2-C'])).toBeTruthy();
  });
});

describe('multiplesIn()', () => {
  it('finds a duplicate', () => {
    expect(card.multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C'])).toBe(2);
  });
});

describe('valuesFromHand()', () => {
  it('returns just the values from a hand', () => {
    expect(card.valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C'])).toEqual(['2', '3', '4', '5', '2']);
  });
});

describe('highestCount()', () => {
  it('returns count of the most common card from array', () => {
    expect(card.highestCount(['2', '4', '4', '4', '2'])).toBe(3);
  });
});
