let assert = require("assert");
const countRegNumber = require("../countRegNumber");

let regList50 =
  "CA 797 920,CJ 698 624,CL 449 592,CJ 526 250,CY 661 955,CL 896 784,CA 231 420,CY 553 506,CY 934 492,CL 133 445,CY 743 838,CY 761 312,CA 352 427,CY 351 575,CJ 379 543,CL 446 216,CJ 249 428,CJ 502 372,CJ 485 753,CY 736 149,CA 514 651,CL 759 952,CJ 816 811,CJ 839 718,CL 945 589,XCU 833 L,GKP 858 L,HRH 916 EC,AVP 705 GP,SID 498 GP,FHQ 438 L,HII 263 L,DEV 531 L,GIF 578 MP,RFN 956 MP,KAX 219 GP,LDZ 269 GP,TJK 441 EC,HHB 675 EC,JEE 854 L,KCE 205 L,JGD 838 L,GSF 931 L,KJQ 491 MP,AXS 828 L,ILI 604 MP,PSY 394 MP,JVK 582 EC,HAC 282 L,VCD 721 MP";

describe("Function to count the number of registration numbers", function () {
  it("should correctly count the number of registration numbers in a list. ", function () {
    assert.strictEqual(countRegNumber(regList50), 50);
  });
});
