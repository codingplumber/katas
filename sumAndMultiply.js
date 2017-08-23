var sumAndMultiply = function(sum, multiply) {
  const muls = mul(multiply);
  const sums = s(sum, muls);
  return compare(muls, sums, multiply, sum)
}

function mul(x) {
  const nums = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      nums.push(i);
    }
  }
  return nums
}

function s(x, arr) {
  const subs = [];
  for (let i = 0; i < arr.length; i++) {
    subs.push(x - arr[i]);
  }
  return subs.filter(x => x > 0);
}

function compare(m, s, a, b) {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (m[i] + s[j] === b && m[i] * s[j] === a) {
        return [m[i], s[j]]
      }
    }
  }
  return (a * b === a && a + b === b) ? [a, b] : null;
}

sumAndMultiply(50, 0);

///////////////// MUCH BETTER //////////////////////
// var sumAndMultiply = function(s, m) {
//   let result = null
//   for (let i = 0; i < 1000; i++) {
//     for (let j = 0; j < 1000; j++) {
//       if (i + j === s && i * j === m) {
//         result = [j, i]
//       }
//     }
//   }
//   return result
// };
