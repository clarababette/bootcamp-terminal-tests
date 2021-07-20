module.exports = (itemList, threshold) => {
  var itemsOver = [];

  itemList.forEach(function (item) {
    if (item.qty > threshold) {
      itemsOver.push(item);
    }
  });

  return itemsOver;
};
