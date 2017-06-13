function cubeOdd(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    } else if (arr[i] % 2 !== 0) {
      newArr.push(Math.pow(arr[i], 3));
    }
  }
  return total = newArr.reduce((acc, val) => {
    return acc + val;
  }, 0);
}

cubeOdd([1, 2, 3, 4]);
