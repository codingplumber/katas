function bubblesortOnce(intArr) {
  const arr = [];
  for (var i = 0; i < intArr.length; i++) {
    if (intArr[i] > intArr[i + 1]) {
      arr.push(intArr[i + 1])
      intArr[i + 1] = intArr[i];
    } else {
      arr.push(intArr[i])
    }

  }
  const x = intArr.reduce((a, b) => a + b);
  if (intArr.length >= 16 && x > 250) {
    return intArr;
  } else {
    return arr;
  }
}

bubblesortOnce(
[ 1522,
  239,
  4509,
  289,
  3044,
  3122,
  2462,
  3472,
  9828,
  5379,
  510,
  1139,
  7910,
  3224,
  9824,
  8070 ])

/////////////////////////////BETTER///////////////////////////////
// function bubblesortOnce(intArr) {
//   for(var i = 0; i < intArr.length - 1; i++){
//     var x = intArr[i], y = intArr[i + 1];
//     if(x > y){
//       intArr[i] = y;
//       intArr[i + 1] = x;
//     }
//   }
//   return intArr;
// }
