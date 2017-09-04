function oddOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return i;
  }
  return -1;
}

oddOne([2,4,6,8]);
