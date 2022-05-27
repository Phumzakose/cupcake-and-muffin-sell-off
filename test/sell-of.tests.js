describe("The Cupcake vs Muffin Function", function () {
  it("should be able to count the cupcakes sold", function () {
    let cakes = Bakery();
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");

    assert.equal("you sold more cupcakes", cakes.count());
  });
  it("should be able to count the muffin sold", function () {
    let cakes = Bakery();
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");
    assert.equal("you sold more muffins", cakes.count());
  });
  it("should be able to count how many cupcakes sold", function () {
    let cakes = Bakery();
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");

    assert.equal("so far you only sold cupcakes", cakes.sellCupcakes());
  });

  it("should be able to count how many muffin sold", function () {
    let cakes = Bakery();
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");

    assert.equal("so far you only sold muffins", cakes.sellMuffins());
  });

  it("should be able to check if you sold the muffins and cupcakes equally", function () {
    let cakes = Bakery();
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.cupcakeCount("cupcake");
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");
    cakes.muffinCount("muffin");

    assert.equal("you sold as much muffins as cupcakes", cakes.count());
  });
});
