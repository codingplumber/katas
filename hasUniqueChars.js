function hasUniqueChars(str){
  var obj = str
    .split('')
    .reduce(function(obj, elem) {
      if (!obj[elem]) [obj[elem] = 0];
      ++obj[elem];
      return obj
    }, {})
  for (var key in obj) {
    if (obj[key] > 1) return false
  }
  return true;
}

hasUniqueChars("abcdef");

////////////////// BETTER ///////////////
let hasUniqueChars = (str) => new Set(str).size === str.length;
/////////////////////////////////////////
function hasUniqueChars(str){
  return str.split('').every(function(v, i, arr){
    return arr.indexOf(v) == i;
  });
}
