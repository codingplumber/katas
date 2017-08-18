function reject(array, iterator) {
  return array.filter(num => !iterator(num));
}

reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

////////////// or //////////////////////////
// function reject(array, iterator) {
//   const arr = [];
//   for (let i = 0; i < array.length; i++) {
//     let x = iterator(array[i]);
//     if (!x) arr.push(array[i]);
//   }
//   return arr;
// }
