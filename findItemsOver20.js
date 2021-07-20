module.exports = (itemList) => {
  var itemsOver20 = [];

  itemList.forEach(function (item) {
    if (item.qty > 20) {
      itemsOver20.push(item);
    }
  });

  return itemsOver20;
};
