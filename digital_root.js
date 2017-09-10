function digital_root(n) {
  let num = n.toString();
  if (num.length > 1) {
    return digital_root(num
      .split('')
      .reduce((acc, elem) => {
        return acc + Number(elem)
      }, 0));
  }
  return Number(num);
}

digital_root(132189);

////////////////// CLEVER ///////////////////
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
