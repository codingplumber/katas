function high(x){
  x = x.toLowerCase().split(' ');
  var count = 0;
  var count2 = 0;
  var longest = 0;
  word = [];
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
      var elem = x[i][j].charCodeAt(x[i][j]) - 96;
      if (i % 2 === 0) {
        count+=elem;
      } else {
        count2+=elem;
      }
    }
    if (count > count2 && count > longest) {
      longest = count;
      count = 0;
      word = x[i];
    } else if (count2 > count && count2 > longest) {
      longest = count2;
      count2 = 0;
      word = x[i];
    } else {
      count = 0;
      count2 = 0;
    }
  }
  if (word.length == 0) {
    return '';
  } else {
    return word;
  }
}

high('man I need a taxi up to ubud');

//////////////////////////////// BETTER /////////////////////////////////
// function high(x){
//     return x.split(' ').reduce((accum, current)=>{
//         return score(current) > score(accum)? current:accum;
//     })
// }
//
// function score(word){
//     return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
// }
