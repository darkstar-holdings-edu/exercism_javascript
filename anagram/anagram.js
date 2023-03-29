const getCharCounts = (word) => {
  const charCount = {};

  for (const char of word.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
};

export const findAnagrams = (target, candidates) => {
  if (typeof target !== 'string' || !Array.isArray(candidates)) {
    throw new Error('Invalid parameters');
  }

  const targetCharCount = getCharCounts(target);

  const isAnagram = (candidate) => {
    if (candidate.length !== target.length || candidate.toLowerCase() === target.toLowerCase())
      return false;

    const candidateCharCount = getCharCounts(candidate);

    for (const char in candidateCharCount) {
      if (candidateCharCount[char] > (targetCharCount[char] || 0)) {
        return false;
      }
    }

    return true;
  };

  const anagrams = new Set();

  for (const candidate of candidates) {
    if (isAnagram(candidate)) {
      anagrams.add(candidate);
    }
  }

  return [...anagrams];
};
