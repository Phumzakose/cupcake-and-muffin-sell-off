describe("The Cupcake vs Muffin Function", function () {
  it("should be able to increase the counter of cupcake", function () {
    let cakes = Bakery();

    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");

    assert.equal(3, cakes.cupcakeIncrement());
  });

  it("should be able to increase the counter of muffin", function () {
    let cakes = Bakery();

    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");

    assert.equal(3, cakes.muffinIncrement());
  });

  it("should be able to count the cupcakes sold", function () {
    let cakes = Bakery();

    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");

    assert.equal(3, cakes.getCupcake());
  });
  it("should be able to count the muffin sold", function () {
    let cakes = Bakery();
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    assert.equal(3, cakes.getMuffin());
  });
  it("should be able to check if its only cupcakes sold", function () {
    let cakes = Bakery();
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");

    assert.equal(
      "so far you only sold cupcakes",
      cakes.sell_cupcake("cupcake")
    );
  });

  it("should be able to check if its only muffins sold", function () {
    let cakes = Bakery();

    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");

    assert.equal("so far you only sold muffins", cakes.sell_muffin("muffin"));
  });

  it("should be able to check if you sold more muffins than cupcakes", function () {
    let cakes = Bakery();
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");

    assert.equal(
      "you sold more cupcakes than muffins",
      cakes.count("cupcake", "muffin")
    );
  });

  it("should be able to check if you sold more cupcakes than muffin", function () {
    let cakes = Bakery();
    cakes.set_cupcake("cupcake");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");

    assert.equal("you sold more muffins than cupcakes", cakes.count());
  });

  it("should be able to check if you sold the muffins and cupcakes equally", function () {
    let cakes = Bakery();
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_cupcake("cupcake");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");
    cakes.set_muffin("muffin");

    assert.equal("you sold as much muffins as cupcakes", cakes.count());
  });
  it("should be able to count cupcakes and muffins independently", function () {
    const cupcakeCounter = Bakery();
    const muffinCounter = Bakery();

    cupcakeCounter.set_cupcake("cupcake");
    cupcakeCounter.set_cupcake("cupcake");
    cupcakeCounter.set_cupcake("cupcake");
    cupcakeCounter.set_cupcake("cupcake");

    muffinCounter.set_muffin("muffin");
    muffinCounter.set_muffin("muffin");
    muffinCounter.set_muffin("muffin");

    assert.equal(4, cupcakeCounter.getCupcake());
    assert.equal(3, muffinCounter.getMuffin());
  });
});
