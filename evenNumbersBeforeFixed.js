function evenNumbersBeforeFixed(sequence, fixedElement) {
      let arr = [];
  const appears = sequence.some(x => x === fixedElement ? true : false)
  if (appears) {
    const x = sequence.indexOf(fixedElement);
    for (var i = 0; i < sequence.length; i++) {
      if (i < x) {
        if (sequence[i] % 2 === 0) {
          arr.push(sequence[i]);
        }
      }
    }
  } else {
    return -1;
  }
  const evens = arr.some(x => x ? true : false);
  if (evens) {
    return arr.length;
  } else {
    return 0;
  }
}

evenNumbersBeforeFixed([1, 2, 4, 6, 3, 1],6)

/////////////////////////////////// BETTER //////////////////////////////////
// function evenNumbersBeforeFixed(sequence, fixedElement) {
//   var idx = sequence.findIndex(n=>n===fixedElement);
//   return idx===-1?-1:sequence.slice(0,idx).filter(n=>n%2===0).length;
// }
