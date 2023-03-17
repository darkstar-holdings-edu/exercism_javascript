export const steps = (n) => {
  let result = n;
  let steps = 0;

  if (n < 1) {
    throw new Error('Only positive numbers are allowed');
  }

  while (result > 1) {
    if (result % 2 === 0) {
      result /= 2;
    } else {
      result = 3 * result + 1;
    }

    steps++;
  }

  return steps;
};
