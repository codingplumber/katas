function sort(initialArray, sortingArray) {
  let arr = [];
  for (let i = 0; i < initialArray.length; i++) {
    for (let j = 0; j < sortingArray.length; j++) {
      if (i === sortingArray[j]) {
        arr.push(initialArray[j]);
      }
    }
  }
  return arr;
}

sort([ 'x', 'y', 'z' ], [ 1, 2, 0 ]);
