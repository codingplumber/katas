function countPositivesSumNegatives(arr) {
  if (arr == null) {
    return [];
  } else if (arr.length < 1) {
    return [];
  } else if (arr === 0) {
    return [0, 0];
  } else {
        let count = 0,
        total = 0,
        result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      } else {
        total+=arr[i];
      }
    }
    console.log(count);
    console.log(total);
    result.push(count, total);
    return result;
  }
}

countPositivesSumNegatives([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 ]);
