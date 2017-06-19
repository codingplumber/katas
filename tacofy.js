function tacofy(word) {
  word = word.toLowerCase().split('')
  for (var i = 0; i < word.length; i++) {
    switch(word[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        word[i] = 'beef';
        break;
      case 't':
        word[i] = 'tomato';
        break;
      case 'l':
        word[i] = 'lettuce';
        break;
      case 'c':
        word[i] = 'cheese';
        break;
      case 'g':
        word[i] = 'guacamole';
        break;
      case 's':
        word[i] = 'salsa';
        break;
      default:
        word[i] = 0;
    }
  }
  word = word.filter(x => {
    if (x !== 0) {
      return x
    }
  });
  word.unshift('shell')
  word.push('shell');
  return word;
}

tacofy("MaXwElL");
