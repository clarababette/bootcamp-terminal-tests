module.exports = (year) => {
  var today = new Date();

  return today.getFullYear() - year;
};
