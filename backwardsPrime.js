function backwardsPrime(start, stop){
  const primes = [];
  for (let i = start; i <= stop; i++) {
    if (primeChecker(i)) {
      let y = Number(i.toString().split('').reverse().join(''));
      if (i !== y) {
        if (primeChecker(y)) {
          primes.push(i);
        }
      }
    }
  }
  return primes;
}

function primeChecker(n) {
  if (n < 2) return false;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) isPrime = false;
  }
  return isPrime;
}

backwardsPrime(700000008, 700000050);
