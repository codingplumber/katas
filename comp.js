function comp(array1, array2){
  if (array1 === null || array2 === null) return false;
  const a = array1.sort((first, second) => first - second);
  const b = array2.sort((first, second) => first - second);
  return a.every((element, index) => {
    return Math.pow(element, 2) === b[index];
  });
}

var a = [121, 144, 19, 161, 19, 144, 19, 11]
var b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b);
