function ìsZeroBalanced(n){
  if (n.length < 1) return false;
  if (n.every((x, i, arr) => {
    return arr.includes(-x);
  }) === true) {
    return n.reduce((acc, elem) => acc + elem, 0) === 0;
  }
  return false;
}

ìsZeroBalanced([ -1, 1, -2, 2, -2, -2, -4, 4, 0 ]);
