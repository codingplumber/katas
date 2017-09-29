function uniqueSum(lst){
  if (lst.length === 0) return null;
  return lst
    .sort((a, b) => a - b)
    .filter((x, i, arr) => x !== arr[i + 1])
    .reduce((acc, num) => acc + num, 0);
}

uniqueSum([1, 3, 8, 1, 8]);

///////// Intersting ///////////////
// function uniqueSum(lst){
//   return lst.length > 0 ? [...new Set(lst)].reduce((s,n)=> s + n, 0) : null
// }
