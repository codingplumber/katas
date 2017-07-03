function highAndLow(numbers){
  const n = numbers.split(' ')
  const sorted = n.sort((a, b) => b - a);
  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

///////////////////////// ALSO ///////////////////////////////
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

///////////////////////// ALSO ///////////////////////////////
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
