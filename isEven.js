var isEven = function (n) {
  if (n / 2 === 1) {
    return true;
  } else if (n / 2 > 1) {
    return isEven(n - 2);
  } else if (n /2 < 1) {
    return false;
  }
};

isEven(100);
