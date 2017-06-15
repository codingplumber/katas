function multiples(m, n){
  var nums = [];
  for (var i = 1; i <= m; i++) {
    nums.push(i);
  }
  return nums.map( x => x * n);
}

multiples(10, 5);


//OR
// function multiples(m, n){
//   var nums = [];
//   for (var i = 1; i <= m; i++) {
//     nums.push(i * n);
//   }
//   return nums;
// }
