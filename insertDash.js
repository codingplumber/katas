function insertDash(num) {
  return num
    .toString()
    .split('')
    .map((number, i, arr) => {
      if (number % 2 !== 0) {
        if (arr[i - 1]) {
          if (arr[i - 1] % 2 !== 0) {
            return `-${number}`;
          }
        }
      }
      return number;
    })
    .join('');
}

insertDash(454793);
