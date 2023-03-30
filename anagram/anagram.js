/**
 * Returns a character count object for a given word.
 *
 * @param {string} word - The word to get the character count object for.
 * @returns {Object} The character count object for the given word.
 */
const getCharacterCounts = (word) => {
  const charCount = {};
  const lowercaseWord = word.toLowerCase();
  for (const char of lowercaseWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
};

/**
 * Checks if two words are anagrams of each other.
 *
 * @param {string} word1 - The first word to check.
 * @param {string} word2 - The second word to check.
 * @param {Object} targetCharCount - The character count object for the target word.
 * @returns {boolean} Whether the two words are anagrams of each other.
 */
const isAnagram = (word1, word2, targetCharCount) => {
  if (word1.length !== word2.length || word1.toLowerCase() === word2.toLowerCase()) {
    return false;
  }

  const charCount1 = getCharacterCounts(word1);
  const charCount2 = targetCharCount || getCharacterCounts(word2);

  for (const char in charCount1) {
    if (charCount1[char] !== (charCount2[char] || 0)) {
      return false;
    }
  }
  return true;
};

/**
 * Returns an array of anagrams of a given target word from a list of candidates.
 *
 * @param {string} target - The target word to find anagrams of.
 * @param {string[]} candidates - An array of candidate words to check for anagrams.
 * @returns {string[]} An array of anagrams of the target word.
 * @throws {Error} If the target parameter is not a string or the candidates parameter is not an array.
 */
export const findAnagrams = (target, candidates) => {
  if (typeof target !== 'string' || !Array.isArray(candidates)) {
    throw new Error('Invalid parameters');
  }

  const targetCharCount = getCharacterCounts(target);
  const anagrams = new Set();

  for (const candidate of candidates) {
    if (isAnagram(candidate, target, targetCharCount)) {
      anagrams.add(candidate);
    }
  }
  return Array.from(anagrams);
};
