function factorial(n) {
  let fact = 1;
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);;
  return factor(n);

  function factor(x) {
    if (x > 0) {
      fact *= x;
      factor(x - 1);
    }
    return fact;
  }
}

factorial(22);

////////////// BETTER /////////////////
function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
  return n < 2 ? 1 : n * factorial(n - 1);
}
