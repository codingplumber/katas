function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])
