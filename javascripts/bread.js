var SandwichMaker = (function(maker) {

  var breadTypes = {
    "white": 2.00,
    "wheat": 2.50,
    "pumpernickel": 2.75,
    "lettuce_wrap": 2.00,
    "rye": 8.50
  };


  maker.addBread = function(breadChosen) {
   if (breadChosen in breadTypes) {
  return breadTypes[breadChosen];
   }

  };

return maker;

})(SandwichMaker || {});