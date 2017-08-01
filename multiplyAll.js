var multiplyAll = (arr) => {
  return (num) => {
    return arr.map(x => x * num);
  }
}

multiplyAll([1, 2, 3])(2);
