var muffins = document.querySelector(".sell_muffin");
var cupcakes = document.querySelector(".sell_cupcake");
var muffinsCounter = document.querySelector(".muffin_count");
var cupcakesCounter = document.querySelector(".cupcake_count");
var message = document.querySelector(".message");

let muffinInstance = Bakery(cupcakes, muffins);
muffins.addEventListener("click", function () {
  muffinInstance.set_muffin("muffin");
  muffinsCounter.innerHTML = muffinInstance.getMuffin();
  message.innerHTML = muffinInstance.sell_muffin();
  message.innerHTML = muffinInstance.count();
});
let cupcakeInstance = Bakery(cupcakes, muffins);
cupcakes.addEventListener("click", function () {
  cupcakeInstance.set_cupcake("cupcake");
  cupcakesCounter.innerHTML = cupcakeInstance.getCupcake();
  message.innerHTML = cupcakeInstance.sell_cupcake();
  message.innerHTML = cupcakeInstance.count();
});
