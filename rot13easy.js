function rot13(message){
  var arr = []
  var str = '';
  message = message.split('');
  for (var i = 0; i < message.length; i++) {
    if (message[i].charCodeAt(message[i]) >= 97 && message[i].charCodeAt(message[i]) <= 122) {
      if (message[i].charCodeAt(message[i]) >= 110) { //**
        newStr = message[i].charCodeAt(message[i]) - 13;
        str = String.fromCharCode(newStr);
        arr.push(str);
      } else {
        newStr = message[i].charCodeAt(message[i]) + 13;
        str = String.fromCharCode(newStr);
        arr.push(str);
      }
    } else {
      arr.push(message[i]);
    }
  }
  return arr.join('');
}

rot13('abc');

//////////////////////// BETTER ////////////////////////////
// function rot13(s) {
//   return s.replace(/[a-z]/g, c =>
//     String.fromCharCode(((c.charCodeAt(0) - 84) % 26) + 97)
//   )
// }


//
// function rot13(s) {
//   var str = '';
//   for(var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) str += String.fromCharCode(i);
//   return [].map.call(s, v => str.indexOf(v) > -1 ? str[(str.indexOf(v) + 13) % 26] : v).join('');
// }


//
// function rot13(s) {
//   return s.split('').map(e => e != ' ' ? String.fromCharCode(e.charCodeAt(0) + (e.charCodeAt(0) < 110 ? 13 : -13)) : e).join('');
// }
