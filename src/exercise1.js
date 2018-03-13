var input = [34, -5, 9, 18, 0, -7, 32];
var removeNegativeValue = function(input) {
  if (input != null) {
    var output = input.filter(numbers => numbers >= 0);
    return output;
  } else {
    var output = [];
    return output;
  }
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
