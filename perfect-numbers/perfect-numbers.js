const { floor, sqrt } = Math;

const factors = (n) => [...Array(n).keys()].filter((i) => n % i === 0);

const isPrime = (n) => {
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= floor(sqrt(n)) + 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export const classify = (n) => {
  if (n < 1) throw new Error('Classification is only possible for natural numbers.');
  if (n === 1 || isPrime(n)) return 'deficient';

  const sum = factors(n).reduce((acc, cur) => acc + cur);

  switch (true) {
    case !!(sum === n):
      return 'perfect';
      break;

    case !!(sum > n):
      return 'abundant';
      break;

    default:
      return 'deficient';
  }
};
