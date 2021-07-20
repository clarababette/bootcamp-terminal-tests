let assert = require("assert");
const findItemsOver = require("../findItemsOver");
var itemsA = [
  { name: "milk", qty: 41 },
  { name: "bread", qty: 6 },
  { name: "apples", qty: 11 },
  { name: "oranges", qty: 42 },
  { name: "lemons", qty: 41 },
  { name: "tea", qty: 49 },
  { name: "coffee", qty: 32 },
  { name: "chocolate", qty: 15 },
  { name: "tomatoes", qty: 41 },
  { name: "pasta", qty: 14 },
];

var itemsOver42A = [{ name: "tea", qty: 49 }];

var itemsB = [
  { name: "milk", qty: 8 },
  { name: "bread", qty: 16 },
  { name: "apples", qty: 36 },
  { name: "oranges", qty: 26 },
  { name: "lemons", qty: 28 },
  { name: "tea", qty: 9 },
  { name: "coffee", qty: 44 },
  { name: "chocolate", qty: 27 },
  { name: "tomatoes", qty: 50 },
  { name: "pasta", qty: 7 },
];

var itemsOver25B = [
  { name: "apples", qty: 36 },
  { name: "oranges", qty: 26 },
  { name: "lemons", qty: 28 },
  { name: "coffee", qty: 44 },
  { name: "chocolate", qty: 27 },
  { name: "tomatoes", qty: 50 },
];

var itemsC = [
  { name: "milk", qty: 11 },
  { name: "bread", qty: 14 },
  { name: "apples", qty: 12 },
  { name: "oranges", qty: 37 },
  { name: "lemons", qty: 19 },
  { name: "tea", qty: 11 },
  { name: "coffee", qty: 38 },
  { name: "chocolate", qty: 25 },
  { name: "tomatoes", qty: 43 },
  { name: "pasta", qty: 31 },
];

var itemsOver11C = [
  { name: "bread", qty: 14 },
  { name: "apples", qty: 12 },
  { name: "oranges", qty: 37 },
  { name: "lemons", qty: 19 },
  { name: "coffee", qty: 38 },
  { name: "chocolate", qty: 25 },
  { name: "tomatoes", qty: 43 },
  { name: "pasta", qty: 31 },
];

describe("A function that takes in a list of items and a threshold quantity and returns a list with only the items with a quantity above the threshold", function () {
  it("should correctly identify the items with a quantity above 42. ", function () {
    assert.deepStrictEqual(findItemsOver(itemsA, 42), itemsOver42A);
  });
  it("should correctly indentify the items with a quantity above 25. ", function () {
    assert.deepStrictEqual(findItemsOver(itemsB, 25), itemsOver25B);
  });
  it("should corrently identify the items with a quantity above 11. ", function () {
    assert.deepStrictEqual(findItemsOver(itemsC, 11), itemsOver11C);
  });
});
