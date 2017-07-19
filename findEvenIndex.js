function findEvenIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) {
      let x = arr.slice(0, i);
      let y = arr.slice(i + 1);
      if (x.length >= 1 && y.length >= 1) {
        if (x.reduce((a, b) => a + b) === y.reduce((a, b) => a + b)) {
          return i;
        }
      }
    }
  }
  return -1;
}

findEvenIndex([1,2,3,4,3,2,1]);
