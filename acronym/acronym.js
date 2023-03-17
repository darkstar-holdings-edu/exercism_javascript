const RE = new RegExp('(?<=^|\\s|-|_)([a-zA-Z])', 'gm');

export const parse = (phrase) => {
  return phrase
    .match(RE)
    .map((c) => c.toUpperCase())
    .join('');
};
