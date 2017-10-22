function arrayLowerCase(arr) {
  return arr
    .map(x => {
      if (typeof x === 'string') {
        return x.split('').map(x => x.toLowerCase()).join('');
      }
      return x;
    })
}

arrayLowerCase([1, 'ReD', 'Green', 2])

///////// Better ////////////////
// to lower case will turn every letter in a string to lower case
// without having to split and map over the string
function arrayLowerCase(arr) {
  return arr.map(x => typeof x == "string" ? x.toLowerCase() : x);
}
