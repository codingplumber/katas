var kookaCounter = function(laughing) {
  if (laughing.length > 0) {
    return count(laughing);
  } else {
    return 0;
  }
}

function count(x) {
  let count = 1;
  x = x.split('a');
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'H') {
      if (x[i + 1] === 'h') {
        count++;
      }
    } else if (x[i] === 'h') {
      if (x[i + 1] === 'H') {
        count++;
      }
    }
  }
  return count;
}

kookaCounter("hahahahaha");
