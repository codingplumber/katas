function numbersOfLetters(integer) {
  const arr = [];
  return checker(integer);

  function checker(x) {
    if (Number(x)) x = getNumStr(x);
    if (x === 'four') {
      arr.push(x);
      return arr;
    }
    arr.push(x);
    return checker(countLetters(x));
  }
}

function spellNumber(num) {
  switch(num) {
    case '0': return 'zero';
    case '1': return 'one';
    case '2': return 'two';
    case '3': return 'three';
    case '4': return 'four';
    case '5': return 'five';
    case '6': return 'six';
    case '7': return 'seven';
    case '8': return 'eight';
    case '9': return 'nine';
  }
}

function countLetters(str) {
  const count = str.length.toString();
  return getNumStr(count);
}

function getNumStr(arr) {
  return arr
    .toString()
    .split('')
    .map(x => spellNumber(x))
    .join('');
}

numbersOfLetters(999);
