function distributeGifts(wishes){
  const primes = [];
  for (var i = 0; i < wishes.length; i++) {
    if (wishes[i] <= 2) {
      primes.push(wishes[i]);
    } else {
      primes.push(isPrime(wishes[i]));
    }
  }
  return primes.reduce((a, b) => a + b);
}

const isPrime = num => {
  let prime = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
     return findFactors(num)
    }
  }
  return num;
}

const findFactors = num => {
  const primes = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      primes.push(i);
    }
  }
  return primes[primes.length - 1];
}

distributeGifts([11,22,33]);
//////////////////////////////////////////////////
// function bf(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return n / i;
//     }
//   }
//   return n;
// }
//
// function distributeGifts(wishes){
//   return wishes.reduce((s, n) => s + bf(n), 0)
// }
