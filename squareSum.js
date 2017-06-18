function squareSum(numbers){
  return numbers = numbers.map((x) => {
    return x * x;
  }).reduce((total, num) => {
    return total + num;
  });
}

squareSum([1, 2, 2]);


///////////////////// BETTER //////////////////////
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }
