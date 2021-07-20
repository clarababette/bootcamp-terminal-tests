let assert = require("assert");
const countAllPaarl = require("../countAllPaarl");

var regList2Paarl =
  "FHQ 438 L,ILI 604 MP,RFN 956 MP,CY 761 312,CL 449 592,CY 553 506,KCE 205 L,CY 743 838,KAX 219 GP,CY 934 492,HAC 282 L,CA 797 920,CL 446 216,CJ 698 624,AVP 705 GP,LDZ 269 GP,CL 133 445,AXS 828 L,CL 759 952,JGD 838 L,JEE 854 L,JVK 582 EC,CY 661 955,CJ 502 372,CA 231 420";
var regList6Paarl =
  "CA 352 427,CA 514 651,CJ 249 428,CJ 379 543,CJ 485 753,CJ 526 250,CJ 816 811,CJ 839 718,CL 896 784,CL 945 589,CY 351 575,CY 736 149,DEV 531 L,GIF 578 MP,GKP 858 L,GSF 931 L,HHB 675 EC,HII 263 L,HRH 916 EC,KJQ 491 MP,PSY 394 MP,SID 498 GP,TJK 441 EC,VCD 721 MP,XCU 833 L";
describe("The function counts the number of Paarl registration numbers in a list.", function () {
  it("should identify 2 Paarl registration numbers in the list. ", function () {
    assert.strictEqual(countAllPaarl(regList2Paarl), 2);
  });
  it("should identify 6 Paarl registration numbers in the list. ", function () {
    assert.strictEqual(countAllPaarl(regList6Paarl), 6);
  });
});
