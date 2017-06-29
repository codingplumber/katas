function uniqueNumbers(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

uniqueNumbers([1,1,2,2]);

/////////////////////////// OR ///////////////////////////
// function uniqueNumbers(numbersArray) {
//   return [...new Set(numbersArray)];
// }
