function countCorrectCharacters(correctWord, guess){
  var count = 0;
  if (correctWord.length !== guess.length) {
    throw new Error('error!');
  } else {
    for (var i = 0; i < correctWord.length; i++) {
      if (correctWord[i] === guess[i]) {
        count++;
      }
    }
  }
  return count;
}
