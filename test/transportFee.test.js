let assert = require("assert");
const transportFee = require("../transportFee");

describe("The function returns the transport fee based on the shift", function () {
  it("should give R20 as the transport fee for the morning shift. ", function () {
    assert.strictEqual(transportFee("morning"), "R20");
  });
  it("should give R10 as the transport fee for the afternoon shift. ", function () {
    assert.strictEqual(transportFee("afternoon"), "R10");
  });
  it("should say the transport is free for the nightshift. ", function () {
    assert.strictEqual(transportFee("nightshift"), "free");
  });
  it("should ask when you work when the input is not a shift. ", function () {
    assert.strictEqual(transportFee("spider"), "When do you work?");
  });
});
