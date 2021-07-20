module.exports = () => {
  var countAllPaarl = function (strRegList) {
    var arrRegList = strRegList.split(",");
    var countPaarl = 0;
    arrRegList.forEach(function (regNum) {
      //Registration prefix for Paarl is CJ.
      regNum = regNum.trim();
      if (regNum.startsWith("CJ")) {
        countPaarl++;
      }
    });
    return countPaarl;
  };
};
