function findDup( arr ){
  return arr
    .sort((a, b) => a > b)
    .filter((a, i, array) => array[i] === array[i + 1])
    .pop();
}

findDup([1,3,2,5,4,5,7,6]);

/////////////////// or /////////////////////
// function findDup(arr){
//   return arr.reduce(function(n, v, i){
//     return arr.indexOf(v) == i ? n : v;
//   }, null);
// }
