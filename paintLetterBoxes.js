var paintLetterboxes = function(start, end) {
  let letterCount = [0,0,0,0,0,0,0,0,0,0];
  for (let i = start; i <= end; i++) {
    let x = i.toString().split('');
    for (let j = 0; j < x.length; j++) {
      letterCount[x[j]]++;
    }
  }
  return letterCount;
}

paintLetterboxes(125, 132);
