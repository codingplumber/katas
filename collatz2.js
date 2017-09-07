function collatz(n){
  if (n === 1) return '1';
  const arr = [n];
  const checker = function(x) {
    if (x % 2 === 0) {
      arr.push(x = x / 2);
      if (x === 1) return arr.length;
    } else {
      arr.push(x = 3 * x + 1);
    }
    return checker(x);
  };
  return checker(n);
}

collatz(15);

/////////////// BETTER /////////////////////
function collatz(n){
  if(n === 1)
    return 1;
  else if(n % 2 === 0)
    return 1 + collatz (n / 2);
  else
    return 1 + collatz (3 * n + 1);
}

function collatz(n) {
  var l = 1;
  while(n > 1) {
    l++
    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
  }
  return l;
}
