module.exports = (strRegList, townPrefix) => {
  var arrRegList = strRegList.split(",");
  var countTown = 0;

  arrRegList.forEach(function (regNum) {
    regNum = regNum.trim();

    if (regNum.startsWith(townPrefix)) {
      countTown++;
    }
  });
  return countTown;
};
