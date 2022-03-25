// Check the result of the cards in hand.
const checkHand = function(hand){
  if (isPair(hand)) {
    return 'pair';
  } else if (isTriple(hand)){
    return 'three of a kind';
  } else if (isQuadruple(hand)) {
    return 'four of a kind';
  } else {
    return 'high card';
  }
};

// Finds a pair
const isPair = function(hand) {
  return multiplesIn(hand) === 2;
}

// Finds a Triple
const isTriple = function(hand) {
  return multiplesIn(hand) === 3;
}

// Finds a Quadruple
const isQuadruple = function(hand) {
  return multiplesIn(hand) === 4;
}

// Finds a duplicate
const multiplesIn = function(hand) {
  return highestCount(valuesFromHand(hand));
}

// Returns count of the most common card from array
const highestCount = function(values) {
  const counts = {};
  values.forEach((value) => {
    counts[value] = 0;
    if (value === values[0]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[1]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[2]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[3]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[4]) {
      counts[value] = counts[value] + 1;
    }
  });
  const totalCounts = Object.keys(counts).map((key) => counts[key]);
  return totalCounts.sort((a, b) => b-a)[0];
}

// Returns just the values from a hand
const valuesFromHand = function(hand) {
  return hand.map((card) => {
    return card.split('-')[0];
  });
}

module.exports = {
  checkHand: checkHand,
  isPair: isPair,
  multiplesIn: multiplesIn,
  highestCount: highestCount,
  valuesFromHand: valuesFromHand
};