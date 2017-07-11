function kaCokadekaMe(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newWord = [];
  word = word.split('');

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      if (vowels.includes(word[i + 1])) {
        if (vowels.includes(word[i + 2])) {
          if (vowels.includes(word[i + 3])) {
            if (vowels.includes(word[i + 4])) {
              newWord.push(word[i], word[i + 1], word[i + 2], word[i + 3], word[i + 4], 'ka')
              i+=4;
            }else {
              newWord.push(word[i], word[i + 1], word[i + 2], word[i + 3], 'ka');
              i+=3;
            }
          } else {
            newWord.push(word[i], word[i + 1], word[i + 2], 'ka');
            i+=2;
          }
        } else {
          newWord.push(word[i], word[i + 1], 'ka');
        i++;
        }
      } else {
        newWord.push(word[i], 'ka');
      }
    } else {
      newWord.push(word[i]);
    }
  }

  if (newWord[newWord.length - 1] === 'ka') {
    newWord.pop();
  }

  newWord.unshift('ka');

  return newWord.join('');
}

kaCokadekaMe("maintenance");

///////////////////////////// MUCH BETTER /////////////////////////////
// function kaCokadekaMe(word)
// {
//   if (!word) return "";
//   const pattern = 'aeiouAEIOU';
//   const result = ['ka'];
//   for (let i = 0; i < word.length-1; ++i){
//     if (pattern.indexOf(word[i]) !== -1 && pattern.indexOf(word[i+1]) === -1){
//       result.push(word[i] + 'ka');
//     }else{
//       result.push(word[i]);
//     }
//   }
//   result.push(word[word.length-1]);
//   return result.join("");
// }

//////////////////////// OR /////////////////////////////////
// function kaCokadekaMe(word) {
//   var vowels ="aeiouAEIOU" ;
//   var code = "ka"
//
//   for (var i = 0; i<word.length-1; i++){
//     if (!vowels.includes(word[i])) {
//       code+=word[i]
//     } else {
//       if (vowels.includes(word[i+1])) {
//          code+= word[i];
//       } else {
//           code += (word[i]+"ka");
//       }
//     }
//   }
//   return code+=word[i];
// }

///////////////////////// OR //////////////////////////////////
// function kaCokadekaMe(word) {
//   var result = "ka";
//   var chars = word.split('');
//   for (var i=0; i<chars.length; i++) {
//     if ("aeiouAEIOU".indexOf(chars[i]) !== -1) {
//       if ("aeiouAEIOU".indexOf(chars[i+1]) === -1) {
//         if (i+1 < chars.length) {
//           result += chars[i] + "ka";
//           continue;
//         }
//       }
//     }
//     result += chars[i];
//
//   }
//   return result;
// }
