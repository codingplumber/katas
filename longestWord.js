function longestWord(stringOfWords){
  let x = stringOfWords.split(' ')
  let count = 0
  let word = ''
  for (var i = 0; i < x.length; i++) {
    if (x[i].length === count || x[i].length > count) {
      count = x[i].length;
      word = x[i]
    }
  }
  return word;
}

longestWord('red hotdog blue grey odghot')
