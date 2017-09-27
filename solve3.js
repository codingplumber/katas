function solve(s){
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let total = 0
    , temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      temp++;
      if (temp > total) {
        total = temp;
      }
    }
    else {
      temp = 0;
    }
  }
  return total;
}

solve("suoidea");
