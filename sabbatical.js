function sabb(x, val, happ) {
  var s = 'sabbatical';
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (x[i].toLowerCase() === s[j]) {
        console.log(s[i], i, x[j], j)
        count++;
        break;
      }
    }
  }
  if (count + val + happ > 22) {
    return 'Sabbatical! Boom!';
  } else {
    return 'Back to your desk, boy.';
  }
}

sabb('Why are you shouting?', 7, 2)
