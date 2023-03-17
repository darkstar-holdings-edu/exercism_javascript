export const transpose = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const numCols = Math.max(...arr.map((row) => row.length));
  const result = Array.from({ length: numCols }, () => '');

  arr.forEach((row) => {
    for (let j = 0; j < numCols; j++) {
      result[j] += row[j] || ' ';
    }
  });

  result[result.length - 1] = result.slice(-1)[0].trimEnd();

  return result;
};
