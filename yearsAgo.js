module.exports = () => {
  var yearsAgo = function (year) {
    var today = new Date();

    return today.getFullYear() - year;
  };
};
