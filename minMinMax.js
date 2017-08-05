function minMinMax(array) {
  const biggest = big(array),
    smallest = small(array),
    minimumAbsent = minAbsent(array, smallest);
  return [smallest, minimumAbsent, biggest];
}

function big(ar) {
   ar
    .sort((a, b) => b - a)
    .slice(ar.length - 1);
  return ar[0]
}

function small(ar) {
  ar
    .sort((a, b) => a - b)
    .slice(ar.length - 1);
  return ar[0]
}

function minAbsent(ar, x) {
  const arr = ar.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(x)) {
      return minAbsent(ar, x + 1);;
    } else {
      return x;
    }
  }
}

minMinMax([ -5, -2, 3, -5, -4, 2, 22 ]);
