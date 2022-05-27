var muffins = document.querySelector(".sell_muffin");
var cupcakes = document.querySelector(".sell_cupcake");
var muffinsCounter = document.querySelector(".muffin_count");
var cupcakesCounter = document.querySelector(".cupcake_count");
var message = document.querySelector(".message");

let cakesInstance = Bakery();
muffins.addEventListener("click", function () {
  muffinsCounter.innerHTML = cakesInstance.muffinCount();
  message.innerHTML = cakesInstance.sellMuffins();
  // message.innerHTML = cakesInstance.count();
});

cupcakes.addEventListener("click", function () {
  cupcakesCounter.innerHTML = cakesInstance.cupcakeCount();
  message.innerHTML = cakesInstance.sellCupcakes();
  //message.innerHTML = cakesInstance.count();
});
