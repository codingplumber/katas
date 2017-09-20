function order(words){
  let array = [...words.split(' ')];
  words
    .split(' ')
    .map(x => {
      let position = 0;
      x
        .split('')
        .map(x => {
          if (Number(x)) {
            position = x - 1;
          }
        })

      return array.splice(position, 1, x);
    })

  return array.join(' ');
}

order("is2 Thi1s T4est 3a");

////////////////// BETTER /////////////////////
function order(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
