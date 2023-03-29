const getCharCounts = (word) =>
  [...word].reduce((charCount, char) => {
    const lowerCaseChar = char.toLowerCase();
    charCount[lowerCaseChar] ? charCount[lowerCaseChar]++ : (charCount[lowerCaseChar] = 1);
    return charCount;
  }, {});

export const findAnagrams = (target, candidates) => {
  const targetCharCount = getCharCounts(target);

  return [...candidates].reduce((anagrams, word) => {
    if (word.length === target.length && word.toLowerCase() !== target.toLowerCase()) {
      const candidateCharCount = getCharCounts(word);

      let isAnagram = true;
      for (const char in candidateCharCount) {
        if (candidateCharCount[char] > (targetCharCount[char] || 0)) {
          isAnagram = false;
          break;
        }
      }

      if (isAnagram) {
        anagrams.push(word);
      }
    }

    return anagrams;
  }, []);
};
