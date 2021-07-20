let assert = require("assert");
const findItemsOver20 = require("../findItemsOver20");

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

var itemsOver20A = [
  { name: "milk", qty: 41 },
  { name: "oranges", qty: 42 },
  { name: "lemons", qty: 41 },
  { name: "tea", qty: 49 },
  { name: "coffee", qty: 32 },
  { name: "tomatoes", qty: 41 },
];

var itemsOver20B = [
  { name: "apples", qty: 36 },
  { name: "oranges", qty: 26 },
  { name: "lemons", qty: 28 },
  { name: "coffee", qty: 44 },
  { name: "chocolate", qty: 27 },
  { name: "tomatoes", qty: 50 },
];

var itemsOver20C = [
  { name: "oranges", qty: 37 },
  { name: "coffee", qty: 38 },
  { name: "chocolate", qty: 25 },
  { name: "tomatoes", qty: 43 },
  { name: "pasta", qty: 31 },
];

describe("A function that takes in a list of items and their quantities and returns a list with only the items with a quantity over 20.", function () {
  it("should correctly identify which items have a quantity over 20. ", function () {
    assert.deepStrictEqual(findItemsOver20(itemsA), itemsOver20A);
  });
  it("should correctly identify which items have a quantity over 20. ", function () {
    assert.deepStrictEqual(findItemsOver20(itemsB), itemsOver20B);
  });
  it("should correctly identify which items have a quantity over 20. ", function () {
    assert.deepStrictEqual(findItemsOver20(itemsC), itemsOver20C);
  });
});
