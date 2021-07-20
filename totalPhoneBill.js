module.exports = () => {
  var totalPhoneBill = function (strPhoneBill) {
    var arrPhoneBill = strPhoneBill.split(",");
    var totalCost = 0;

    arrPhoneBill.forEach(function (use) {
      use = use.trim();
      switch (use) {
        case "call":
          totalCost += 2.75;
          break;
        case "sms":
          totalCost += 0.65;
          break;
        default:
          break;
      }
    });

    return "R" + totalCost.toFixed(2);
  };
};
