function capitalize(s,arr){
  let sArr = s.split('');
  arr.map(elem => {
    if (sArr[elem]) {
      sArr[elem] = sArr[elem].toUpperCase();
    }
  });
  return sArr.join('');
};

capitalize("abcdef",[1,2,5,100]);
