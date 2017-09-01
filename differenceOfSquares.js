function differenceOfSquares(x){
  return squareSums(x) - sumSquares(x);
}

function sumSquares(n) {
  const arr = [...Array(n + 1).keys()];
  arr.shift();
  return arr
    .map(x => Math.pow(x, 2))
    .reduce((sum, num) => sum + num);
}

function squareSums(n) {
  const arr = [...Array(n + 1).keys()];
  arr.shift();
  return Math.pow(arr.reduce((sum, num) => sum + num), 2);
}

differenceOfSquares(10);

//////////////////// INTERESTING ////////////////////////
function differenceOfSquares(x) {
  return Math.pow(x * (x + 1) / 2, 2) - Math.round(x / 6 * (x + 1) * (2 * x + 1))
}
