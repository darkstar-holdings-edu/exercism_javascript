// This is a little nuts separating these error messages. I'm not sure why the tests are doing this.
// I certainly wouldn't actually do this. Just match the digits... if you have enough, good. If not
// throw an error that the number is malformed. I don't really see much of a benefit for these
// specific error messages.

export const clean = (phoneNumber) => {
  if (phoneNumber.match(/[a-zA-Z]/)) throw new Error('Letters not permitted');
  if (phoneNumber.match(/[@:!]/)) throw new Error('Punctuations not permitted');

  let digits = phoneNumber.match(/\d/g);

  if (digits.length < 10) throw new Error('Incorrect number of digits');
  if (digits.length > 11) throw new Error('More than 11 digits');

  if (digits.length === 11) {
    if (digits[0] !== '1') throw new Error('11 digits must start with 1');
    digits = digits.splice(1); // Parse out the country code
  }

  if (digits[0] === '0' || digits[0] === '1')
    throw new Error(`Area code cannot start with ${digits[0] === '0' ? 'zero' : 'one'}`);
  if (digits[3] === '0' || digits[3] === '1')
    throw new Error(`Exchange code cannot start with ${digits[3] === '0' ? 'zero' : 'one'}`);

  return digits.reduce((cleanedPhoneNumber, digit) => cleanedPhoneNumber + digit, '');
};
