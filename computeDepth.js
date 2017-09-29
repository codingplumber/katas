function computeDepth(x){
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let multiple = 1;
  return function check() {
    let num = x * multiple;
    num
      .toString()
      .split('')
      .forEach(x => {
        if (array.includes(Number(x))) {
          array.splice(array.indexOf(Number(x)), 1);
        }
      });
    multiple++;
    return array.length === 0 ? multiple - 1 : check();
  }();
}

computeDepth(42);
