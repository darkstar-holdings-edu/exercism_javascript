export const hey = (message) => {
  if (message.trim().length === 0) {
    return 'Fine. Be that way!';
  }

  const parsedMessage = message.replace(/[^a-zA-Z\?\!]/g, '');

  switch (true) {
    case parsedMessage.endsWith('?'):
      if (/^[A-Z]+\?$/.test(parsedMessage)) {
        return "Calm down, I know what I'm doing!";
      }

      return 'Sure.';

    case /^[A-Z]+!*$/.test(parsedMessage):
      return 'Whoa, chill out!';

    default:
      return 'Whatever.';
  }
};
