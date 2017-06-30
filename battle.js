function battle(x, y) {
  const a = total(x);
  const b = total(y);
  return a === b ? 'Tie!' : (a > b ? x : y);
}

const ascii = (x => x.charCodeAt(0) - 64);

function total(x) {
  return num = x
              .split('')
              .map(ascii)
              .reduce((a, b) => a + b);
}


battle("FOUR", "FIVE");
