function reverseNumber(n) {
  var num = n
    .toString()
    .split('');
  var arr = [];
  if (num[0] === '-') {
    arr.push(num.splice(num[0], 1));
  }
  for (var i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }
  return Number(arr.join(''));
}

reverseNumber(-123);

///////////////// BETTER ///////////////////////
// function reverseNumber(n) {
//   let isNegative = n < 0;
//   let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
//   let result = Number(reverseAsString);
//
//   return isNegative ? -result : result;
// }
