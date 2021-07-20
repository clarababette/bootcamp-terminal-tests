let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

let regNumList =
  "AVP 705 GP,AXS 828 L,CA 231 420,CA 352 427,CA 514 651,CA 797 920,CJ 249 428,CJ 379 543,CJ 485 753,CJ 502 372,CJ 526 250,CJ 698 624,CJ 816 811,CJ 839 718,CL 133 445,CL 446 216,CL 449 592,CL 759 952,CL 896 784,CL 945 589,CY 351 575,CY 553 506,CY 661 955,CY 736 149,CY 743 838,CY 761 312,CY 934 492,DEV 531 L,FHQ 438 L,GIF 578 MP,GKP 858 L,GSF 931 L,HAC 282 L,HHB 675 EC,HII 263 L,HRH 916 EC,ILI 604 MP,JEE 854 L,JGD 838 L,JVK 582 EC,KAX 219 GP,KCE 205 L,KJQ 491 MP,LDZ 269 GP,PSY 394 MP,RFN 956 MP,SID 498 GP,TJK 441 EC,VCD 721 MP,XCU 833 L";

describe("The function returns the number of vehicles from a town in the list", function () {
  it("should identify that there are 8 vehicles from Paarl in the list. ", function () {
    assert.strictEqual(countAllFromTown(regNumList, "CJ"), 8);
  });
  it("should identify that there are 6 vehicles from Stellenbosch in the list. ", function () {
    assert.strictEqual(countAllFromTown(regNumList, "CL"), 6);
  });
});
