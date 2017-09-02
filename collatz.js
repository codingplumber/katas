function collatz(n){
  if (n === 1) return '1';
  const arr = [n];
  const checker = function(x) {
    if (x % 2 === 0) {
      x = x / 2;
      arr.push(x);
      if (x === 1) return arr.join('->');
    } else {
      x = 3 * x + 1;
      arr.push(x);
      if (x === 1) return arr.join('->');
    }
    return checker(x);
  };
  return checker(n);
}

collatz(3);

/////////////// BETTER //////////////////////
function collatz(n) {
  if(n === 1) return "1";
  return n + "->" + collatz(n % 2 === 0 ? n / 2 : 3 * n + 1)
}
