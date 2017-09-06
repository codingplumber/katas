function checkConcatenatedSum(number, n) {
  var negative = [];
  var num = number
    .toString()
    .split('')
    .filter(x => x !== '-')
    .map((x, i, arr) => concatNum(x, n))
    .reduce((acc, item) => {return acc + item}, 0);
  return num === Math.abs(number) ? true : false;
}

function concatNum(num, count) {
  var i = count;
  var arr = [];
  while (i > 0) {
    arr.push(num);
    i--;
  }
  return Number(arr.join(''));
}

checkConcatenatedSum(-2997,3);
