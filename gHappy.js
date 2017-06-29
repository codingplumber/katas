function gHappy(str) {
  str = str.split('');
  let g = str.some(elem => elem === 'g');
  if (!g) {
    return true;
  } else {
    let gCount = 0;
    let notGCount = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'g') {
        if (str[i + 1] === 'g' || str[i - 1] === 'g') {
          gCount++;
        } else {
          notGCount++;
        }
      }
    }
    return notGCount ? false : true;
  }
}

gHappy("gg0gg3gg0gg");
/////////////////////////////// BETTER ///////////////////////////////////
// function gHappy(str) {
//   let happy = true
//   str.split('').forEach((val, idx) => {
//     if (val == "g" && !([str[idx + 1], str[idx - 1]].includes("g"))) {
//       happy = false
//     }
//   })
//   return happy
// }
///////////////////////////////// OR /////////////////////////////////////
// function gHappy(str) {
//   return !/(^|[^g])g($|[^g])/.test(str)
// }
