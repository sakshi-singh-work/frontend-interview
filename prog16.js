function checkPrimeNum(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrime() {
  let result = [];
  for (let i = 2; i <= 10000000; i++) {
    let isPrime = checkPrimeNum(i);
    if (isPrime) {
      result.push(i);
    }
  }
  return result[result.length - 1];
}

console.log(getPrime());


function sieveOfEratosthenes(n) {
  const primes = [];
  const sieve = Array(n + 1).fill(true);
  for (let p = 2; p * p <= n; p++) {
    if (sieve[p] === true) {
      for (let i = p * p; i <= n; i += p) {
        sieve[i] = false;
      }
    }
  }
  for (let p = 2; p <= n; p++) {
    if (sieve[p] === true) {
      primes.push(p);
    }
  }
  return primes;
}

function getPrime() {
  const primes = sieveOfEratosthenes(10000000);
  return primes[primes.length - 1];
}

console.log(getPrime());
