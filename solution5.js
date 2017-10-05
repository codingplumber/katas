function solution(pairs){
  let arr = [];
  for (var key in pairs) {
    arr.push(`${key} = ${pairs[key]}`);
  }
  return arr.join(',');
}

solution({a: 1, b: '2'});

/////////////// USING MAP ON AN OBJECT ////////////////
// function solution(pairs){
//   return Object.keys(pairs)
//     .map(function(k) { return k + ' = ' + pairs[k] })
//     .join(',');
// }
