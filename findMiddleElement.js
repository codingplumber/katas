var gimme = function (inputArray) {
  var copy = [];
  for (var j = 0; j < inputArray.length; j++) {
    copy.push(inputArray[j])
  }
  var sorted = inputArray.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < copy.length; i++) {
    if (sorted[1] === copy[i]) {
      return i;
    }
  }
};

gimme([5, 10, 14]);
gimme([2, 3, 1]);
