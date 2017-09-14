function getMiddle(s) {
  return s.length % 2 !== 0
    ? s.charAt(0 | s.length / 2)
    : `${s.charAt((0 | s.length / 2) - 1)}${s.charAt(0 | s.length / 2)}`;
}

getMiddle("test");
