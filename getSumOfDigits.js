function getSumOfDigits(integer) {
  return integer === 0 ? 0 : integer
    .toString()
    .split('')
    .reduce((a, b) => Number(a) + Number(b));
}

getSumOfDigits(0);

/////////////////////// BETTER ///////////////////////////
function getSumOfDigits(integer) {
  return integer
    .toString()
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0);
}
