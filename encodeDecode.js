function encode(str) {
  let arr = str.split('')
  let encoded = [];
  for (var i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case 'A':
        encoded.push('G');
        break;
      case 'D':
        encoded.push('E');
        break;
      case 'R':
        encoded.push('Y');
        break;
      case 'P':
        encoded.push('O');
        break;
      case 'L':
        encoded.push('U');
        break;
      case 'K':
        encoded.push('I');
        break;
      case 'a':
        encoded.push('g');
        break;
      case 'd':
        encoded.push('e');
        break;
      case 'r':
        encoded.push('y');
        break;
      case 'p':
        encoded.push('o');
        break;
      case 'l':
        encoded.push('u');
        break;
      case 'k':
        encoded.push('i');
        break;
      case 'G':
        encoded.push('A');
        break;
      case 'E':
        encoded.push('D');
        break;
      case 'Y':
        encoded.push('R');
        break;
      case 'O':
        encoded.push('P');
        break;
      case 'U':
        encoded.push('L');
        break;
      case 'I':
        encoded.push('K');
        break;
      case 'g':
        encoded.push('a');
        break;
      case 'e':
        encoded.push('d');
        break;
      case 'y':
        encoded.push('r');
        break;
      case 'o':
        encoded.push('p');
        break;
      case 'u':
        encoded.push('l');
        break;
      case 'i':
        encoded.push('k');
        break;
      default:
        encoded.push(arr[i]);
    }
  }
  return encoded.join('');
}


function decode(str) {
  let arr = str.split('')
  let decoded = [];
  for (var i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case 'A':
        decoded.push('G');
        break;
      case 'D':
        decoded.push('E');
        break;
      case 'R':
        decoded.push('Y');
        break;
      case 'P':
        decoded.push('O');
        break;
      case 'L':
        decoded.push('U');
        break;
      case 'K':
        decoded.push('I');
        break;
      case 'a':
        decoded.push('g');
        break;
      case 'd':
        decoded.push('e');
        break;
      case 'r':
        decoded.push('y');
        break;
      case 'p':
        decoded.push('o');
        break;
      case 'l':
        decoded.push('u');
        break;
      case 'k':
        decoded.push('i');
        break;
      case 'G':
        decoded.push('A');
        break;
      case 'E':
        decoded.push('D');
        break;
      case 'Y':
        decoded.push('R');
        break;
      case 'O':
        decoded.push('P');
        break;
      case 'U':
        decoded.push('L');
        break;
      case 'I':
        decoded.push('K');
        break;
      case 'g':
        decoded.push('a');
        break;
      case 'e':
        decoded.push('d');
        break;
      case 'y':
        decoded.push('r');
        break;
      case 'o':
        decoded.push('p');
        break;
      case 'u':
        decoded.push('l');
        break;
      case 'i':
        decoded.push('k');
        break;
      default:
        decoded.push(arr[i]);
    }
  }
  return decoded.join('');
}
