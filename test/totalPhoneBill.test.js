let assert = require("assert");
const totalPhoneBill = require("../totalPhoneBill");

var billA =
  "sms,call,call,call,call,sms,sms,call,call,call,call,call,sms,sms,call,call,call,call,sms,call";
var billB =
  "call,sms,call,call,sms,sms,call,sms,call,call,sms,call,sms,call,sms,sms,call,sms,sms,call,sms,call,call,sms,call,call,sms,call,sms,call,call,call,call,sms,call,sms,call";

describe("A function to return the total phone bill in rands based on the number of calls made and sms's sent.", function () {
  it("should return R42.40 for 14 calls at R2.75 a call and 6 sms's at R0.65 a sms. ", function () {
    assert.strictEqual(totalPhoneBill(billA), "R42.40");
  });
  it("should return R68.15 for 21 calls at R2.75 a call and 16 sms's at R0.65 a sms. ", function () {
    assert.strictEqual(totalPhoneBill(billB), "R68.15");
  });
});
