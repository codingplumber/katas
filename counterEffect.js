function counterEffect(hitCount) {
  let arrCounter = [];

  hitCount = hitCount.split('')
  for (var i = 0; i < hitCount.length; i++) {
    let arr = [];
    for (var j = 0; j <= hitCount[i]; j++) {
      arr.push(j);
    }
    arrCounter.push(arr);
  }
  return arrCounter
}

counterEffect("0050");
