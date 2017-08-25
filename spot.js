function spot(s1, s2) {
  const indices = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      indices.push(i);
    }
  }
  return indices;
}

spot('abcdefg', 'abcqetg');

//////////////////// or ///////////////////////
// function spot(s1,s2){
//   var res = [];
//   [...s1].forEach(function (e, i) {
//     if (e != s2[i]) res.push(i);
//   });
//   return res;
// }
