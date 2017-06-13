function caseUnification(s) {
  let bigCount = 0;
  let littleCount = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      console.log('big', s[i])
      bigCount++;
    } else {
      console.log('little', s[i])
      littleCount++;
    }
  }
  if (bigCount > littleCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

caseUnification("aBa");
