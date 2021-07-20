let assert = require("assert");
const regCheck = require("../regCheck");

describe("The registration check function", function () {
  it("should say that BY 93 JQ GP is a Gauteng registration number. ", function () {
    assert.strictEqual(regCheck("BY 93 JQ GP", "GP"), true);
  });
  it("should say that CHZ 231 L is not a Gauteng registration number. ", function () {
    assert.strictEqual(regCheck("CHZ 231 L", "GP"), false);
  });

  it("should say that CHZ 231 L is a Limpopo registration number. ", function () {
    assert.strictEqual(regCheck("CHZ 231 L", "L"), true);
  });
  it("should say that FMJ 541 EC is not a Limpop registration number. ", function () {
    assert.strictEqual(regCheck("FMJ 541 EC", "L"), false);
  });

  it("should say that FML 541 EC is an Eastern Cape registration number. ", function () {
    assert.strictEqual(regCheck("FML 541 EC", "EC"), true);
  });
  it("should say that CDS 791 MP is not an Eastern Cape registration number. ", function () {
    assert.strictEqual(regCheck("CDS 791 MP", "EC"), false);
  });

  it("should say the CDS 791 MP is a Mpumalanga registration number. ", function () {
    assert.strictEqual(regCheck("CDS 791 MP", "MP"), true);
  });
  it("should say that BY 93 JQ GP is not a Mpumalanga registration number. ", function () {
    assert.strictEqual(regCheck("BY 93 JQ GP", "MP"), false);
  });
});
