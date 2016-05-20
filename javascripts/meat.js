// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    "no_meat": 0,
    "turkey": 3.00,
    "spam": 0.50,
    "bacon": 2.00,
    "tempeh": 39.69
  }

  // Augment the original object with another method
  maker.addMeat = function(meatChosen) {
    return meatPrices[meatChosen];
  };

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker || {});