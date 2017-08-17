function convertHashToArray(hash){
  const array = [];
  for (var key in hash) {
    array.push([key, hash[key]]);
  }
  return order(array);
}

var order = (x) => x.sort((a, b) => a[0] > b[0]);

convertHashToArray({name: "Jeremy", age: 24});

////////////////// or ///////////////////////////
// function convertHashToArray(hash){
//   let result = [];
//   Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
//   return result;
// }
