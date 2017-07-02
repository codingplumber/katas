function mobileKeyboard(str){
console.log(str)
  if (str === '' || str === null) {
    return 0;
  }
  return arr = str
                .split('')
                .map(x => {
                  switch(x) {
                    case ' ':
                      return 0;
                      break;
                    case 'a':
                    case 'd':
                    case 'g':
                    case 'j':
                    case 'm':
                    case 'p':
                    case 't':
                    case 'w':
                      return 2;
                      break;
                    case 'b':
                    case 'e':
                    case 'h':
                    case 'k':
                    case 'n':
                    case 'q':
                    case 'u':
                    case 'x':
                      return 3;
                      break;
                    case 'c':
                    case 'f':
                    case 'i':
                    case 'l':
                    case 'o':
                    case 'r':
                    case 'v':
                    case 'y':
                      return 4;
                      break;
                    case 's':
                    case 'z':
                      return 5;
                      break;
                    default:
                      return 1;
                  }
                })
              .reduce((a, b) => a + b);
}

mobileKeyboard("longwordwhichdontreallymakessense");

///////////////////////////// BETTER //////////////////////////////
// const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']
//
// function mobileKeyboard(str){
//   return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
// }
