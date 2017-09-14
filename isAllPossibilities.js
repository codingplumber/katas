function isAllPossibilities(x){
  return !x.length
    ? false
    : x
      .sort((a, b) => a - b)
      .every((x, i) => x === i);
}

isAllPossibilities([ 1, 2, 0, 4, 3 ]);
