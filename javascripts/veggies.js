// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
    "no_veggies": 0,
    "lettuce": 0.70,
    "tomato": 0.50,
    "onion": 0.60,
    "pickles": 1.05,
    "jalapenos": 0.60
  }

  // Augment the original object with another method
  maker.addVeggies = function(veggieChosen) {
    return veggiePrices[veggieChosen];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});