const DECIMAL_TO_ROMAN_MAP = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [6, 'VI'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

export const toRoman = (decimal) => {
  let romanConversion = '';
  let currentValue = decimal;

  for (const [key, value] of DECIMAL_TO_ROMAN_MAP) {
    while (currentValue >= key) {
      romanConversion += value;
      currentValue -= key;
    }
  }

  return romanConversion;
};
