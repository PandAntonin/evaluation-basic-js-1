var removeNegativeValue = function(values) {
  var input = [values];
  if (values = []) {
    return []
  } else {
    return values >= 0;
  }
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
