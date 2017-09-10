function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alpha = alphabet.split('');

  string
    .split('')
    .map(x => {
      x = x.toLowerCase();
      if (x === alpha[alpha.indexOf(x)]) {
        alpha.splice(alpha.indexOf(x), 1);
      }
    })

  return alpha.length === 0;
}

isPangram("How quickly daft jumping zebras vex.");
