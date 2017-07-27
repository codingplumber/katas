function parseF(s) {
  if (parseInt(s) === 0) {
    return 0;
  } else if (!parseFloat(s)) {
    return null;
  } else {
    return parseFloat(s);
  }
}

parseF('0')

//////////////////////////// other ////////////////////////////
// function parseF(s) {
//   return isNaN(parseFloat(s)) ? null : parseFloat(s);
// }
