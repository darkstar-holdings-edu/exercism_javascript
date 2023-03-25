export const isIsogram = (word) => {
  const chars = word?.toLowerCase()?.match(/[a-z]/g) ?? [];
  return new Set([...chars]).size == chars.length;
};
