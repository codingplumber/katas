function nextPerfectSquare(n) {
  if (n < 0) {
    return 0;
  }
  return Math.pow((Math.floor(Math.sqrt(n)) + 1), 2);
}

nextPerfectSquare(6);
