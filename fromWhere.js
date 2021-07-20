module.exports = (regNum) => {
  switch (regNum.substr(0, 2)) {
    case "CY":
      return "Bellville";
    case "CJ":
      return "Paarl";
    case "CA":
      return "Cape Town";
    default:
      return "Some other place!";
  }
};
