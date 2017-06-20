function sortArray(array) {
  var odds = array.filter(x => x % 2 !== 0).sort((a, b) => b - a);
  return sorted = array.map(elem => elem % 2 !== 0 ? elem = odds.pop() : elem)
}

sortArray([5, 3, 2, 8, 1, 4])
