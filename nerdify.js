function nerdify(txt) {
  return txt
    .split('')
    .map(x => {
      switch(x) {
        case 'a':
        case 'A':
          return 4;
        case 'e':
        case 'E':
          return 3;
        case 'l':
          return 1;
        default:
          return x;
      }
    })
  .join('');
}

nerdify("Los Angeles");
