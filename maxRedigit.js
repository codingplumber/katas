var maxRedigit = function(num) {
  if (num.toString().length !== 3) {
    return null;
  }
  else {
    let n = num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('');
    return parseInt(n);
  }
};

maxRedigit(231);

//////////// different /////////////////
// var maxRedigit = function(num) {
//   if (num < 100 || num > 999) return null
//   
//   return +[...(`${num}`)].sort().reverse().join``
// }
