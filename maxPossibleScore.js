function maxPossibleScore(obj, arr) {
  var values = [];
  for (var k in obj) {
    for (var i = 0; i < arr.length; i++) {
      if (Number(k) === Number(arr[i]) || k.toString() === arr[i].toString()) {
        obj[k] = obj[k] * 2;
      }
    }
    values.push(obj[k]);
  }
  return values.reduce((a, b) => a + b);
}

maxPossibleScore({ true: 66524.04980540059, false: 954.7396587054327, another: 5 }, [ true, 'another' ]);
