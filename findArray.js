function findArray(arr1, arr2) {
  const array = [];
  for (let i = 0; i < arr2.length; i++) {
    array.push(arr1[arr2[i]]);
  }
  return array.filter(x => x !== undefined ? x : delete x);
}

findArray([0, 3, 4], [2, 6]);
