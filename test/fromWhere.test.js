let assert = require("assert");
const fromWhere = require("../fromWhere");

describe("A function that returns the town a vehicle is registered in based on the registration number", function () {
  it("should state that the registration number CY 351 575 is from Bellville. ", function () {
    assert.equal(fromWhere("CY 351 575"), "Bellville");
  });
  it("should state that the registration number CJ 379 543 is from Paarl. ", function () {
    assert.equal(fromWhere("CJ 379 543"), "Paarl");
  });
  it("should state that the registration number CA 352 427 is from Cape Town. ", function () {
    assert.equal(fromWhere("CA 352 427"), "Cape Town");
  });
  it("should state that the registration number CL 759 952 is from some other place. ", function () {
    assert.equal(fromWhere("CL 759 952"), "Some other place!");
  });
});
