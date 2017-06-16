function findMultiples(int,limit) {
  let multiples = [];
  for (var i = 1; i <= limit; i++) {
    if (i % int === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

findMultiples(5, 25);
// [5, 10, 15, 20, 25]
