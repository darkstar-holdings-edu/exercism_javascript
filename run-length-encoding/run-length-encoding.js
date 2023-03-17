export const encode = (decodedStr) => {
  return decodedStr.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
};

export const decode = (encodedStr) => {
  return encodedStr.replace(/(\d+)(.)/g, (chunk, count, char) => char.repeat(count));
};
