function vowelIndices(word){
  const vowels = [];
  for (var i = 0; i < word.length; i++) {
    switch(word[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        vowels.push(i + 1);
        break;
    }
  }
  return vowels;
}

vowelIndices("apple");

/////////////////////////////////////////
// function vowelIndices(word){
//   const str = 'aeiouy';
//   const arr = word.toLowerCase().split('');
//   let answer = [];
//   arr.forEach((name, i) => {
//     if (str.indexOf(name) !== -1) {
//       answer.push(i + 1);
//     }
//   });
//   return answer;
// }
