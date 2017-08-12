function stringTask(s){
  const arr = s.split('');
  const noUppers = lowerCase(arr);
  const noVowels = removeVowels(noUppers);
  const dot = addDot(noVowels);
  return dot.join('');
}

function removeVowels(x) {
  return x.filter(el => {
    switch(el) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        delete x;
        break;
      default:
        return x;
    }
  })
}

function lowerCase(x) {
  return x.map(el => el !== el.toLowerCase() ? el.toLowerCase() : el);
}

function addDot(x) {
  return x.map(el => '.' + el);
}

stringTask('Codewars');
