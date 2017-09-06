function sentencify(words) {
  words[0] = words[0].split('');
  var first = words[0][0].toUpperCase();
  var last = words[0].splice(1).join('');
  words[0] = first.concat(last);

  words[words.length - 1] = words[words.length - 1].concat('.')

  return words.join(' ');
}

sentencify(["i", "am", "an", "AI"]);

//////////////////////// BETTER ////////////////////////
function sentencify(words) {
  var s = words.join(' ');
  return s.replace(s.charAt(0), s.charAt(0).toUpperCase()) + '.';
}
