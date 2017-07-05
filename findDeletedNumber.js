function findDeletedNumber(arr, mixArr) {
  const arr2 = mixArr.sort((a, b) => a - b);
  if (arr.length === arr2.length) {
    return 0;
  } else {
    const missing = arr.filter(item => !arr2.includes(item));
    return missing.pop();
  }
}


findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]);
