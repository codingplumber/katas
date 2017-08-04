function spongeMeme(sentence) {
  let s = sentence.split('');
  let newS = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i + 1] !== undefined) {
      newS.push(s[i].toUpperCase(), s[i + 1].toLowerCase());
      i+=1;
    } else {
      newS.push(s[i].toUpperCase(), s[i + 1]);
      i+=1;
    }
  }
  return newS.join('');
}

spongeMeme("stop Making spongebob Memes!");
