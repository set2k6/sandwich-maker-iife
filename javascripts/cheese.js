var SandwichMaker = (function(maker) {

  var cheeseTypes = {
    "no_cheese": 0,
    "swiss": 0.75,
    "american": 0.50,
    "provolone": 0.50,
    "pepper_jack": 1.00
  };


  maker.addCheese = function(cheeseChosen) {
    return cheeseTypes[cheeseChosen];
  }

return maker;

})(SandwichMaker || {});