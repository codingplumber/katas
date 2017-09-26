function isOddHeavy(n){
  const minOdd = n
    .filter(x => x % 2 !== 0)
    .sort((a, b) => b - a)
    .pop()
  , maxEven = n
    .filter(x => x % 2 === 0)
    .sort((a, b) => a - b)
    .pop();

  if (n.some(x => x % 2 !== 0)) {
    if (minOdd > maxEven || maxEven === undefined) {
      return true;
    }
  }
  return false;
}

isOddHeavy([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, -2, -1 ]);
