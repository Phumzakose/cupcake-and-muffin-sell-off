function Bakery() {
  var cupcake_counter = 0;
  var muffin_counter = 0;

  function cupcakeCount() {
    return cupcake_counter++;
  }
  function muffinCount() {
    return muffin_counter++;
  }
  function sellCupcakes() {
    if (cupcakeCount() > 0) {
      return "so far you only sold cupcakes";
    }
  }
  function sellMuffins() {
    if (muffinCount() > 0) {
      return "so far you only sold muffins";
    }
  }

  function count() {
    if (cupcakeCount() > muffinCount()) {
      return "you sold more cupcakes";
    } else if (muffinCount() > cupcakeCount()) {
      return "you sold more muffins";
    } else if (cupcakeCount() === muffinCount()) {
      return "you sold as much muffins as cupcakes";
    }
  }

  return {
    cupcakeCount,
    muffinCount,
    count,
    sellCupcakes,
    sellMuffins,
  };
}
