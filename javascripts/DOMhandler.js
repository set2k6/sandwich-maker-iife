//You should also create an additional JavaScript file that handles interacting with the form elements
//Variable to hold the final price. Default to 0.


var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the bread options
var breadChoice = document.getElementById("menu_bread");
// var prevBreadChoice = document.getElementById("menu_bread");
var meatChoice = document.getElementById("menu_meat");
var veggieChoice = document.getElementById("menu_veggies");
var condimentChoice = document.getElementById("menu_condiments");
var checkout = document.getElementById("order_output");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

breadChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var breadSelector = event.target;
  // var preBreadSelector = event.target;

 // var bread = breadChoice.value;
  // selectedTopping = event.target.value;
  // if(breadSelector.selected) {
    finalSandwichPrice += SandwichMaker.addBread(breadSelector.value);
  // }else if (breadSelector.selected) {
   // finalSandwichPrice -= SandwichMaker.addBread(breadSelector.value);}
  checkout.innerHTML = finalSandwichPrice.toFixed(2);


  // Determine the price of the topping chosen
  // var breadPrice = SandwichMaker.addBread(bread);

  // finalSandwichPrice += breadPrice;

  // Add the topping to the SandwichMaker to increase the total price
});

// cheeseChoice.addEventListener("change",function(event){
//   var cheeseSelector = event.target;
//   console.log("cheeseSelector", cheeseSelector);
//   if(cheeseSelector.checked) {
//     finalSandwichPrice += SandwichMaker.addCheese(cheeseSelector.value);
//     console.log("cheeseSelected", cheeseSelector.value);
//     }else {
//       finalSandwichPrice -= SandwichMaker.addCheese(cheeseSelector.value);
//       console.log("unselected", cheeseSelector.value);}
//       checkout.innerHTML = finalSandwichPrice.toFixed(2);
// });


meatChoice.addEventListener("change",function(event){
  var meatSelector = event.target;
  console.log("meatSelector", meatSelector);
  if(meatSelector.checked) {
    finalSandwichPrice += SandwichMaker.addMeat(meatSelector.value);
    console.log("meatSelected", meatSelector.value);
    }else {
      finalSandwichPrice -= SandwichMaker.addMeat(meatSelector.value);
      console.log("unselected", meatSelector.value);}
      checkout.innerHTML = finalSandwichPrice.toFixed(2);
});


veggieChoice.addEventListener("change",function(event){
  var veggieSelector = event.target;
  console.log("veggieSelector", veggieSelector);
  if(veggieSelector.checked) {
    finalSandwichPrice += SandwichMaker.addVeggies(veggieSelector.value);
    console.log("veggieSelected", veggieSelector.value);
    }else {
      finalSandwichPrice -= SandwichMaker.addVeggies(veggieSelector.value);
      console.log("unselected", veggieSelector.value);}
      checkout.innerHTML = finalSandwichPrice.toFixed(2);
});

condimentChoice.addEventListener("change",function(event){
  var condimentSelector = event.target;
  console.log("condimentSelector", condimentSelector);
  if(condimentSelector.checked) {
    finalSandwichPrice += SandwichMaker.addCondiments(condimentSelector.value);
    console.log("condimentSelected", condimentSelector.value);
    }else {
      finalSandwichPrice -= SandwichMaker.addCondiments(CondimentSelector.value);
      console.log("unselected", condimentSelector.value);}
      checkout.innerHTML = finalSandwichPrice.toFixed(2);
});