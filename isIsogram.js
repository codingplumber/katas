function isIsogram(str){

  const string = str
    .split('')
    .map(x => x.toLowerCase());

  for (var i = 0; i < string.length; i++) {
    let count = checkLetter(string[i], string);
    if (count.length > 1) {
      return false;
    }
  }
  return true;

}

function checkLetter(letter, st) {
  return st.filter(x => x === letter)
}

isIsogram("Dermatoglyphics");

//////////////////////// OR /////////////////////////
// function isIsogram(str){
//   var i, j;
//   str = str.toLowerCase();
//   for(i = 0; i < str.length; ++i)
//     for(j = i + 1; j < str.length; ++j)
//       if(str[i] === str[j])
//         return false;
//   return true;
// }
