function f(n) {
  if (n <= 0 || n % 1 !== 0) return false;
  return sumOfN(n);
}

function sumOfN(x) {
  const arr = [...Array(x + 1).keys()];
  arr.shift();
  return arr.reduce((sum, num) => sum + num);
}

f(100);

/////////// INTERESTING ////////////////
function f(n){
  return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
}
