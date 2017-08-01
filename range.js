function range(startNum, endNum) {
  let arr = [];
  for (let i = startNum; i < endNum; i++) {
    if (i > startNum) {
      arr.push(i);
    }
  }
  return arr;
};

range(2,9);

// better without the if statement
