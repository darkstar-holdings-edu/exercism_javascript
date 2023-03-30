/**
 * Checks whether a given word is an isogram or not.
 * @param {string} word - The word to check.
 * @returns {boolean} Whether the word is an isogram or not.
 */
export const isIsogram = (word) => {
  const chars = word.toLowerCase().match(/[a-z]/g) ?? [];
  return new Set([...chars]).size === chars.length;
};
