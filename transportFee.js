module.exports = () => {
  var transportFee = function (shift) {
    switch (shift) {
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      case "nightshift":
        return "free";
      default:
        return "When do you work?";
    }
  };
};
