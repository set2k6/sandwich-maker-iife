// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
    "no_condiments": 0,
    "mayo": 0.25,
    "ketchup": 0.50,
    "mustard": 0.50,
    "bbq": 0.99
  }

  // Augment the original object with another method
  maker.addCondiments = function(condimentChosen) {
    console.log(condimentChosen);
    return condimentPrices[condimentChosen];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});