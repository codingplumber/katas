function vertMirror(strng) {
  let arr = strng.split('\n')
  return arr.map((x, i, arr) => {
    return x
      .split('')
      .reverse()
      .join('')
  })
  .join('\n');
}

function horMirror(strng) {
  let arr = strng
    .split('\n')
    .reverse()
    .join('\n');

  return arr;
}

function oper(fct, s) {
    return fct === vertMirror
      ? vertMirror(s)
      : horMirror(s);
}

// vertMirror("abcd\nefgh\nijkl\nmnop")

// horMirror("abcd\nefgh\nijkl\nmnop")

oper(horMirror, "abcd\nefgh\nijkl\nmnop")
