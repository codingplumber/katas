function isItANum(str) {
  const nums = [];
  str
    .split('')
    .filter(x => x <= 9 && x >= 0 && x !== ' ' ? nums.push(x) : -1);

  return nums[0] === '0' && nums.length === 11 ? nums.join('') : 'Not a phone number';
}

isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165");
