function sumAverage(arr) {
  let i = arr.length - 1,
    index = 0,
    array = [];
  while (i >= 0) {
    array.push(average(arr[index]));
    i--;
    index++;
  }
  return Math.floor(array.reduce((a, b) => a + b));
}

function average(x) {
  return x.reduce((a, b) => a + b) / x.length;
}

sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 76]]);

//////////////////////// GOOD /////////////////////////////
// function sumAverage(arr) {
//   return Math.floor(arr
//           .map(e => e.reduce(sum) / e.length)
//           .reduce(sum));
// }
//
// const sum = (a, b) => a + b;
