function sepStr(arr) {
  const len = length(arr);
  const s = arr.split(' ');
  const array = [];
  for (let i = 0; i < s.length; i++) {
    array.push([...s[i]]);
  }
  const spacesAdded = addSpaces(array, len);
  const result = changeArrays(spacesAdded);

  return result
}

function changeArrays(x) {
  const returnArr = [];
  for (let i = 0; i < x[0].length; i++) {
    let temp = [];
    for (let j = 0; j < x.length; j++) {
      temp.push(x[j][i]);
    }
    returnArr.push(temp);
  }
  return returnArr;
}

function addSpaces(x, length) {
  for (let i = 0; i < x.length; i++) {
    if (x[i].length < length) {
      x[i].push('');
    }
    if (x[i].length < length) {
      addSpaces(x, length)
    }
  }
  return x;
}

function length(x) {
  const y = x.split(' ');
  let l = 0;
  for (let i = 0; i < y.length; i++) {
    if (y[i].length > l) {
      l = y[i].length;
    }
  }
  return l;
}

sepStr("The Mitochondria is the powerhouse of the cell");
