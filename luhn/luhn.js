export const valid = (check) => {
  const CHAR_VALIDATION_REGEX = /[^0-9\s]/g;
  if (check.length < 2 || CHAR_VALIDATION_REGEX.test(check)) return false;

  const digits = [...check.match(/[0-9]/g)];
  if (digits.length < 2) return false;

  const checkSum = digits
    .reverse()
    .map(Number)
    .reduce((sum, n, i) => sum + (i % 2 === 1 ? ((n *= 2) > 9 ? n - 9 : n) : n), 0);

  return checkSum % 10 === 0;
};
