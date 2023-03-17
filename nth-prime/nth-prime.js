const { floor, sqrt } = Math;

const isPrime = (n) => {
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= floor(sqrt(n)) + 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export const prime = (nthPrime) => {
  if (nthPrime < 1) throw new Error('there is no zeroth prime');
  if (nthPrime === 1) return 2;

  let primeCount = 1; // Includes 2 as a prime
  let currentNumber = 3;

  while (primeCount < nthPrime) {
    if (isPrime(currentNumber)) {
      primeCount++;
    }

    currentNumber += 2; // Only check the odd numbers
  }

  return currentNumber - 2;
};
