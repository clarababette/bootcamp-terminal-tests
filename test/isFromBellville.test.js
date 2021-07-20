let assert = require("assert");
const isFromBellville = require("../isFromBellville");

describe("Bellville registration number function", function () {
  it("should say that CY 956 835 is a Bellville registration number. ", function () {
    assert.strictEqual(isFromBellville("CY 956 835"), true);
  });

  it("should say that CA 458 293 is not a Bellville registration number. ", function () {
    assert.strictEqual(isFromBellville("CA 458 293"), false);
  });
});
