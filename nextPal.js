function nextPal(val) {
  val = val + 1;
  let x = isPalindrome(val);
  if (val === x) {
    return val;
  } else {
    return nextPal(val)
  }
}

function isPalindrome(num) {
  return Number(num.toString().split('').reverse().join(''));
}

nextPal(4612)
// 4664
