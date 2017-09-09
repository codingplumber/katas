function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return text
    .split('')
    .filter(x => alphabet.includes(x.toLowerCase()))
    .map(x => alphabet.indexOf(x.toLowerCase()) + 1)
    .join(' ');
}

alphabetPosition("The sunset sets at twelve o' clock.");
