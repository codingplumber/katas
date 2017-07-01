function countArara(n) {
  const anane = 1;
  const adak = 2;
  const arr = [];
  if (n % adak === 0) {
    const x = n / adak;
    for (var i = 0; i < x; i++) {
      arr.push('adak');
    }
  } else {
    n = n - 1;
    const x = n / adak;
    for (var j = 0; j < x; j++) {
      arr.push('adak');
    }
    arr.push('anane')
  }
  return arr.join(' ');
}

countArara(7);
