function reverseFactorial(num) {
  if (num === 1) return '1!';
  let result = 1;
  for (let i = 1; i <= num + 1; i++) {
    if (result === num) return i - 1 + '!';
    if (result < num) result *= i;
    if (result > num) return 'None';
  }
}

reverseFactorial(2);
