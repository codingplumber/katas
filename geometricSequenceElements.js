function geometricSequenceElements(a, r, n){
  let x = a;
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(x);
    x = x * r;
  }
  return nums.join(', ');
}

geometricSequenceElements(2, 3, 5);
