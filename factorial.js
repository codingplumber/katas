function factorial (n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return null;
  } else {
    let x = 1;
    let i = n;
    while (i > 0) {
      x = fact(x, n);
      n--;
      i--;
    }
    return x;
  }
}

function fact(n1, n2) {
  return n1 * n2;
}

factorial(10);

///////////////// with recursion ////////////////////
// function factorial (n) {
//   if (n === 0) {
//     return 1;
//   } else if (n < 0) {
//     return null;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
