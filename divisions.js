const divisions = (n, divisor) => {
  let x = n;
  let count = 0;
  const div = function() {
    x = Math.floor(x / divisor);
    if (x > 0) {
      count++;
      return div(x, divisor);
    }
    return count;
  };
  return div();
};

divisions(972113031680484, 5);
