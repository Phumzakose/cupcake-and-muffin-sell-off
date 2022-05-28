function Bakery(cupcake, muffin) {
  var itemsBought = "";
  var cupcake_counter = 0;
  var muffin_counter = 0;

  function set_cupcake(itemsBought) {
    if (itemsBought === "cupcake") {
      cupcake_counter++;
    }
  }
  function cupcakeIncrement() {
    return cupcake_counter++;
  }
  function muffinIncrement() {
    return muffin_counter++;
  }
  function getCupcake() {
    return cupcake_counter;
  }
  function set_muffin(itemsBought) {
    if (itemsBought === "muffin") {
      muffin_counter++;
    }
  }
  function getMuffin() {
    return muffin_counter;
  }
  function sell_cupcake() {
    if (getCupcake()) {
      return "so far you only sold cupcakes";
    }
  }
  function sell_muffin() {
    if (getMuffin()) {
      return "so far you only sold muffins";
    }
  }
  function count() {
    if (getCupcake() == 1) {
      return "so far you only sold cupcake";
    } else if (getMuffin() == 1) {
      return "so far you only sold muffin";
    }
    if (getCupcake() === getMuffin()) {
      return "you sold as much muffins as cupcakes";
    } else if (getCupcake() > getMuffin()) {
      return "you sold more cupcakes than muffins";
    } else {
      return "you sold more muffins than cupcakes";
    }
  }

  return {
    set_cupcake,
    getCupcake,
    set_muffin,
    getMuffin,
    sell_cupcake,
    sell_muffin,
    cupcakeIncrement,
    muffinIncrement,
    count,
  };
}

// function Bakery() {
//   var cupcake_counter = 0;
//   var muffin_counter = 0;

//   function cupcakeCount() {
//     cupcake_counter++;
//     return cupcake_counter;
//   }
//   function muffinCount() {
//     muffin_counter++;
//     return muffin_counter;
//   }
//   function sellCupcakes() {
//     if (cupcakeCount() > 0) {
//       return "so far you only sold cupcakes";
//     }
//   }
//   function sellMuffins() {
//     if (muffinCount() > 0) {
//       return "so far you only sold muffins";
//     }
//   }

//   function count() {
//     if (cupcakeCount() > muffinCount()) {
//       return "you sold more cupcakes";
//     } else if (muffinCount() > cupcakeCount()) {
//       return "you sold more muffins";
//     } else if (cupcakeCount() === muffinCount()) {
//       return "you sold as much muffins as cupcakes";
//     }
//   }

//   return {
//     cupcakeCount,
//     muffinCount,
//     count,
//     sellCupcakes,
//     sellMuffins,
//   };
// }
