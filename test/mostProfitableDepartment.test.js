let assert = require("assert");
const mostProfitableDepartment = require("../mostProfitableDepartment");

var salesData1 = [
  { department: "cosmetics", sales: 13483, day: "Monday" },
  { department: "clothing", sales: 1368, day: "Monday" },
  { department: "homeware", sales: 15633, day: "Tuesday" },
  { department: "cosmetics", sales: 1421, day: "Tuesday" },
  { department: "clothing", sales: 7634, day: "Tuesday" },
  { department: "homeware", sales: 13129, day: "Wednesday" },
  { department: "cosmetics", sales: 18318, day: "Wednesday" },
  { department: "clothing", sales: 9189, day: "Wednesday" },
  { department: "homeware", sales: 4841, day: "Thursday" },
  { department: "cosmetics", sales: 11270, day: "Thursday" },
  { department: "clothing", sales: 5497, day: "Thursday" },
  { department: "homeware", sales: 15288, day: "Friday" },
  { department: "cosmetics", sales: 13196, day: "Friday" },
  { department: "clothing", sales: 17244, day: "Friday" },
];

var salesData2 = [
  { department: "cosmetics", sales: 7522, day: "Monday" },
  { department: "clothing", sales: 9261, day: "Monday" },
  { department: "homeware", sales: 5627, day: "Tuesday" },
  { department: "cosmetics", sales: 1234, day: "Tuesday" },
  { department: "clothing", sales: 7226, day: "Tuesday" },
  { department: "homeware", sales: 10203, day: "Wednesday" },
  { department: "cosmetics", sales: 14597, day: "Wednesday" },
  { department: "clothing", sales: 11616, day: "Wednesday" },
  { department: "homeware", sales: 16052, day: "Thursday" },
  { department: "cosmetics", sales: 1234, day: "Thursday" },
  { department: "clothing", sales: 4277, day: "Thursday" },
  { department: "homeware", sales: 4149, day: "Friday" },
  { department: "cosmetics", sales: 1235, day: "Friday" },
  { department: "clothing", sales: 7933, day: "Friday" },
];

describe("A function to determine the shop department with highest number of sales for the week.", function () {
  it("should correctly identify the cosmetics department as the most profitable department for the week. ", function () {
    assert.deepStrictEqual(mostProfitableDepartment(salesData1), "cosmetics");
  });
  it("should correctly identify the clothing department as the most profitable department for the week. ", function () {
    assert.deepStrictEqual(mostProfitableDepartment(salesData2), "clothing");
  });
});
