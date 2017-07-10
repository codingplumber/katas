function isAlt(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < word.length; i++) {
    if (i !== word.length - 1) {
      if (vowels.includes(word[i])) {
        if (!vowels.includes(word[i + 1])) {
          continue;
        } else {
          return false
        }
      } else if (!vowels.includes(word[i])) {
        if (vowels.includes(word[i + 1])) {
          continue;
        } else {
          return false
        }
      }
    }
  }
  return true;
}

isAlt("babef");

//////////////////////////// BETTER ///////////////////////////////
// function isAlt(word) {
//   return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
// }
