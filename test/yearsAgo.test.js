let assert = require("assert");
const yearsAgo = require("../yearsAgo");

describe("A function that returns how many years the input year is from the current year.", function () {
  it("should say that 1994 was 27 years ago. ", function () {
    assert.strictEqual(yearsAgo(1994), 27);
  });
  it("should say that 2020 was 1 year ago. ", function () {
    assert.strictEqual(yearsAgo(2020), 1);
  });
  it("should say that 2021 was zero years ago. ", function () {
    assert.strictEqual(yearsAgo(2021), 0);
  });
});
