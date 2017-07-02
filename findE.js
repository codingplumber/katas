function findE(str){
  if (str === '') {
    return '';
  } else if (str == null) {
    return null;
  } else {
    let count = 0;
    const e = str.split('')
             .filter(elem => elem.toLowerCase() === 'e' ? count++ : -1);
    if (count) {
      return count.toString();
    } else {
      return 'There is no "e".';
    }
  }
}

findE("eeenglish");

//////////////////////////////////// BETTER /////////////////////////////////
// function findE(str){
//   if (str == null)
//     return null;
//   if (str == '')
//     return '';
//
//   var count = str.toUpperCase().split("E").length - 1;
//   if (count == 0)
//     return 'There is no "e".';
//
//   return count.toString();
// }
