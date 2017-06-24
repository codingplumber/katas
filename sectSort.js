function sectSort(arr, start, len) {
  if (start && len)  {
    const x = arr.slice(start, len + start);
    const y = sorted(x);
    const newArr = [
      ...arr.slice(0, start),
      ...y,
      ...arr.slice((len + start))
    ]
    return newArr;
  } else if (start && !len) {
    const x = arr.slice(start);
    const y = sorted(x);
    const newArr = [
      ...arr.slice(0, start),
      ...y
    ]
    return newArr;
  } else if (!start && !len) {
    return sorted(arr);
  }
}

function sorted(param) {
  return param.sort((a, b) => a - b);
}

sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5);
