function rot13(message){
  var arr = [];
  var str = '';
  message = message.split('');
  for (var i = 0; i < message.length; i++) {
    if (message[i].charCodeAt(message[i]) >= 65 && message[i].charCodeAt(message[i]) <= 90) {
      if (message[i].charCodeAt(message[i]) >= 79) {
        newStr = message[i].charCodeAt(message[i]) - 13;
        str = String.fromCharCode(newStr);
        arr.push(str);
      } else {
        newStr = message[i].charCodeAt(message[i]) + 13;
        str = String.fromCharCode(newStr);
        arr.push(str);
      }
    } else if (message[i].charCodeAt(message[i]) >= 97 && message[i].charCodeAt(message[i]) <= 122) {
      if (message[i].charCodeAt(message[i]) >= 110) {
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

rot13('abcdefghijklmnopqrstuvwxyz ');

//////////////////// BETTER ////////////////////////////
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

///////////////////// OTHER ////////////////////////////
// function rot13(message){
//   //your code here
//   return (message + '')
//     .replace(/[a-z]/gi, function(s) {
//       return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
//     });
//
// }

//////////////////// OTHER /////////////////////////////
// function rot13(message){
//   return message.replace(/[a-zA-Z]/g, function(c){
//     var c13 = c.charCodeAt(0) + 13;
//     var endCharCode = ( c > 'Z')? 122 : 90;
//     return String.fromCharCode(  endCharCode < c13 ?  c.charCodeAt(0) - 13 : c13 );
//   });
// }
