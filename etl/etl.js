export const transform = (legacyFormat) => {
  return Object.entries(legacyFormat)
    .flatMap(([key, values]) => values.map((value) => [value, key]))
    .reduce((newFormat, [value, key]) => {
      newFormat[value.toLowerCase()] = Number(key);
      return newFormat;
    }, {});
};
