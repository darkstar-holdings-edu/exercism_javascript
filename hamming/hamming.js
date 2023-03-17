export const compute = (...strands) => {
  if (strands[0].length !== strands[1].length) {
    throw new Error('strands must be of equal length');
  }

  return [...strands[0]].reduce(
    (acc, cur, idx) => (cur !== strands[1].charAt(idx) ? ++acc : acc),
    0
  );
};
