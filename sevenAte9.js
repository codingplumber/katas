function sevenAte9(str){
 return str
  .split('')
  .filter((x, i, arr) => {
    if (Number(arr[i]) == 7) {
      if (Number(arr[i + 1]) == 9) {
        if (Number(arr[i + 2]) == 7) {
          arr.splice(i + 1, 1);
        }
      }
    }
    return x;
  })
  .join('');
}

sevenAte9('17797a');

////////////////////// BETTTER //////////////////////
function sevenAte9(str){
  return str.replace(/79(?=7)/g, '7');
}
