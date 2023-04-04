const WORDS_REGEX = /\w+('\w+)?/g;

export const countWords = (text) => {
  return [...text.toLowerCase().matchAll(WORDS_REGEX)]
    .map((match) => match[0])
    .reduce((counts, word) => {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    }, {});
};
