function duplicateCount(text){
  let count = 0;
  textArr = text.toLowerCase().split('');

  const repeaterCheck = textArr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  for (var key in repeaterCheck) {
    if (repeaterCheck[key] > 1) {
      count++;
    }
  }
  return count;
}

duplicateCount("Indivisibilities");
