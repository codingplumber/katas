function rot13(message){
  var arr = []
  var str = '';
  var code = [];
  message = message.toLowerCase().split('');
  for (var i = 0; i < message.length; i++) {
    if (message[i].charCodeAt(message[i]) >= 97 && message[i].charCodeAt(message[i]) <= 122) {
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
  for (var j = 0; j < arr.length; j++) {
    switch(arr[j]) {
      case 'a':
        code.push('z');
        break;
      case 'b':
        code.push('y');
        break;
      case 'c':
        code.push('x');
        break;
      case 'd':
        code.push('w');
        break;
      case 'e':
        code.push('v');
        break;
      case 'f':
        code.push('u');
        break;
      case 'g':
        code.push('t');
        break;
      case 'h':
        code.push('s');
        break;
      case 'i':
        code.push('r');
        break;
      case 'j':
        code.push('q');
        break;
      case 'k':
        code.push('p');
        break;
      case 'l':
        code.push('o');
        break;
      case 'm':
        code.push('n');
        break;
      case 'z':
        code.push('a');
        break;
      case 'y':
        code.push('b');
        break;
      case 'x':
        code.push('c');
        break;
      case 'w':
        code.push('d');
        break;
      case 'v':
        code.push('e');
        break;
      case 'u':
        code.push('f');
        break;
      case 't':
        code.push('g');
        break;
      case 's':
        code.push('h');
        break;
      case 'r':
        code.push('i');
        break;
      case 'q':
        code.push('j');
        break;
      case 'p':
        code.push('k');
        break;
      case 'o':
        code.push('l');
        break;
      case 'n':
        code.push('m');
        break;
      default:
        code.push(arr[j]);
    }
  }
  code = code.join('');
  return code;
}

////////////////////////// BETTER ////////////////////////////
// function encrypter(string) {
//   return string.replace(/\w/g, c => "mlkjihgfedcbazyxwvutsrqpon"["abcdefghijklmnopqrstuvwxyz".indexOf(c)])
// }
//
//
// function encrypter(string){
//   var map = 'abcdefghijklmnopqrstuvwxyz';
//   return string.replace(/[a-z]/g, v => map[(13-map.indexOf(v)+25)%26]);
// }
//
//
// function encrypter(string){
//   var alph    = "abcdefghijklmnopqrstuvwxyz"
//   var revalph = "zyxwvutsrqponmlkjihgfedcba"
//   return string.replace(/[a-z]/g, function(x){
//         return revalph[alph.indexOf(String.fromCharCode(x.charCodeAt(0) + (x >= "n" ? -13 : 13)))]
//   });
// }
