function findSum(n) {
  var nums = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      nums.push(i);
    } else if (i % 5 === 0) {
      nums.push(i);
    }
  }
  return nums.reduce((total, num) => {
    return total + num;
  });
}

findSum(5);
