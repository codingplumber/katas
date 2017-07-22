function getDivisorsCnt(n){
  let divisors = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
}

getDivisorsCnt(10);
////////////////////////////////or///////////////////////
// function getDivisorsCnt(n){
//   let count = 0;
//   for (var i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }
//   return count;
// }
