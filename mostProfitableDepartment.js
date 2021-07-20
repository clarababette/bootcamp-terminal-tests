module.exports = () => {
  var mostProfitableDepartment = function (salesData) {
    var departmentMap = {};
    var mostProfitable = salesData[0].department;

    //Map total number of sales per department.
    salesData.forEach(function (dataEntry) {
      if (departmentMap[dataEntry.department] === undefined) {
        departmentMap[dataEntry.department] = 0;
      }
      departmentMap[dataEntry.department] += dataEntry.sales;
    });
    //console.log(departmentMap);

    //Find most profitable
    for (var department in departmentMap) {
      if (departmentMap[department] > departmentMap[mostProfitable]) {
        mostProfitable = department;
      }
    }
    return mostProfitable;
  };
};
