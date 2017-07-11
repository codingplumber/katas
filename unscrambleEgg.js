function unscrambleEggs(word){
  return word
    .split(' ')
    .map(x => x.split('egg'))
    .map(x => x.join(''))
    .join(' ');
}

unscrambleEggs("ceggodegge heggeregge");

////////////////////////// BETTER //////////////////////////////
// function unscrambleEggs(word){
//  return word.split("egg").join("");
// }

//////////////////////// REGEXP ////////////////////////////////
// function unscrambleEggs(word){
//   return word.replace(/egg/ig, '')
// }
