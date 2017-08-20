function wordValue(a) {
  return a
    .map(x => values(x))
    .map((x, i, arr) => x * (i + 1));
}

function values(x) {
  if (x === '') {
    return 0;
  } else {
    return x
      .split('')
      .map(e => e !== ' ' ? e.charCodeAt(0) - 96 : 0)
      .reduce((a, b) => a + b);
  }
}

wordValue(["codewars","abc","xyz"]);
