function findUnique(numbers) {
  numbers.sort();
  console.log(numbers)
  var num = [],
      x = [];
  for (var i = 0; i < numbers.length; i+=2) {
    switch(numbers[i] === numbers[i + 1]) {
      case true:
        num.push(numbers[i], numbers[i + 1]);
        break;
      case false:
        x.push(numbers[i])
    }
  }
  var q = x.shift();
  return parseInt(q);
}

findUnique([1, 1000, 143435, 8, 4, 4, 100, 6, 6, 1, 8, 100, 1000])


// BEST SOLUTION --- not mine of course....
// function findUnique(numbers) {
//   return numbers.reduce((a, b) => a ^ b);
// }
