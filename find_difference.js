function find_difference(a, b) {
  a = a.reduce((acc, num) => {
    return acc * num;
  });
  b = b.reduce((acc, num) => {
    return acc * num;
  });
  return a > b ? a - b : b - a;
}

find_difference([3, 2, 5], [1, 4, 4]);
