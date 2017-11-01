function manipulate(num) {
  const n = num.toString().split(''),
    number = Math.floor(n.length / 2),
    arr = n.map((x, i, array) => i >= number ? 0 : x);

  return Number(arr.join(''));
}

manipulate(81736487102938471);
