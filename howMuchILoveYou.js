function howMuchILoveYou(nbPetals) {
  const x = [];
  const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for (var i = 0; i < nbPetals; i++) {
    x.push(arr[i % arr.length]);
  }
  return x.pop()
}

howMuchILoveYou(7);

//////////////////////////// BETTER /////////////////////////////
// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]
//
// function howMuchILoveYou(n) {
//   return phrases[(n - 1) % phrases.length]
// }
