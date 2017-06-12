var noIfsNoButs = function(a, b) {
  switch(true) {
    case a > b:
      return a + ' is greater than ' + b;
    case a < b:
      return a + ' is smaller than ' + b;
    case a == b:
      return a + ' is equal to ' + b;
  }
}

noIfsNoButs(51, 50);
