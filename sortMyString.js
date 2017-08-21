function sortMyString(S) {
  const evens = [];
  const odds = [];

  S
    .split('')
    .map((x, i, arr) => (i % 2 === 0) ? evens.push(arr[i]) : odds.push(arr[i]));

  return evens.join('') + ' ' + odds.join('');
}

sortMyString("CodeWars");
