function sumDigits(number) {
  const nums = number
    .toString()
    .split('')
    .filter(x => x !== '-')
    .reduce((sum, num) => Number(sum) + Number(num), 0);
  return nums;
}

sumDigits(-11);
