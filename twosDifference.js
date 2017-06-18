function twosDifference(input){
  input = input.sort(function(a, b) {
    return a - b;
  });
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] === input[j] - 2 || input[j] === input[i] - 2) {
        arr.push([input[i], input[j]]);
      }
    }
  }
  return arr;
}

twosDifference([ 3, 32, 1, 5, 10, 12, 56, 14, 15, 6, 8 ]);
// [[1, 3], [3, 5], [6, 8], [8, 10], [10, 12], [12, 14]]

//////////////////////////// OTHER //////////////////////////////
function twosDifference(input){
  return input
   .sort(function(a, b){
     return a - b
   })
   .filter(function(a){
     return input.indexOf(a+2) != -1
   })
   .map(function(a){
     return [a, a+2]
   })
}
