const getCharacterCounts = (word) => {
  const charCount = {};
  const lowercaseWord = word.toLowerCase();

  for (const char of lowercaseWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
};

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
