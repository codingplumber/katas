function comes_after(str,l) {
  var letters = [];
  var string = str.split('');
  string.push(' ')
  var count = 0;
  var pattern = /[a-zA-Z]/i;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === l || string[i] === l.toLowerCase() || string[i].toLowerCase() === l) {
      console.log(string[i])
      if (string[i + 1].match(pattern) && string[i + 1] != string[i].indexOf(string.length)) {
        letters.push(string[i + 1]);
        count++;
      }
    }
  }
  if (count > 0) {
  console.log(letters.join(''));
    return letters.join('');
  } else {
    return '';
  }
}

comes_after('Pirates say arrrrrrrrr', 'r');

//////////////////////////////////// BETTER //////////////////////////////////
// function comes_after(str,l) {
//   var regexp = new RegExp(`${l}+([a-z])`,'gi')
//
//   return (str.match(regexp) || [] ).reduce((p,c)=>p+c.slice(1),'')
// }

//////////////////////////////////// OR //////////////////////////////////////
// function comes_after(str,l,rex=RegExp(l,"i")) {
//   return [...str].filter( (c,i) => i && rex.test(str[i-1]) && /[a-z]/i.test(c) ).join``
// }
