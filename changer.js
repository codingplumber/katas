function changer(str) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .map(x => {
      let lowX = x.toLowerCase()
        , code = String.fromCharCode;
      if (lowX >= code(97) && lowX <= code(122)) {
        if (x === 'z' || x === 'Z') {
          lowX = 'a';
        } else {
          y = x.charCodeAt() + 1;
          lowX = code(y).toLowerCase();
        }
      }
      return arr.includes(lowX)
        ? lowX.toUpperCase()
        : lowX.toLowerCase();
    })
    .join('');
}

changer('qbZy7T 9CiXu9dFCEue');

// 97 - 122
