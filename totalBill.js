function totalBill(str) {
  if (str === '') {
    return 0;
  }
  str = str
    .split('')
    .map(x => x === 'r' ? 2 : 0)
    .reduce((total, num) => total + num);

  if (str / 10 >= 1) {
    return str - (Math.floor(str / 10) * 2);
  }
  return str;
}

totalBill('rr rr  r r      rr r');
