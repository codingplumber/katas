function bandNameGenerator(str) {
  if (str[0] === str[str.length - 1]) {
    first = str.slice(0, str.length - 1);
    firstLetter = first[0].toUpperCase()
    return firstLetter + first.slice(1) + str
  } else {
    firstLetter = str[0].toUpperCase();
    return "The " + firstLetter + str.slice(1);
  }
}

// bandNameGenerator('tart');
bandNameGenerator('bed');

/////////////////////// with repeat ///////////////////////////
// function bandNameGenerator(s) {
//   return s[0] === s[s.length - 1] ? s[0].toUpperCase() + s.slice(1).repeat(2) : 'The ' + s[0].toUpperCase() + s.slice(1);
// }
