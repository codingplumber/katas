function unlock(str) {
  var pass = [];
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    switch(arr[i].toLowerCase()) {
      case 'a':
      case 'b':
      case 'c':
        pass.push(2);
        break;
      case 'd':
      case 'e':
      case 'f':
        pass.push(3);
        break;
      case 'g':
      case 'h':
      case 'i':
        pass.push(4);
        break;
      case 'j':
      case 'k':
      case 'l':
        pass.push(5);
        break;
      case 'm':
      case 'n':
      case 'o':
        pass.push(6);
        break;
      case 'p':
      case 'q':
      case 'r':
      case 's':
        pass.push(7);
        break;
      case 't':
      case 'u':
      case 'v':
        pass.push(8);
        break;
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        pass.push(9);
        break;
    }
  }
  return pass.join('');
}

unlock("Nokia");
