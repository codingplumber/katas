function checkExpiryValid (date) {
  const month = new Date().getMonth();
  let year = new Date().getFullYear();
  const d = formatDate(date);
  let y = year.toString().split('')
  y = y.slice(y.length - 2).join('')
  if (d[1] > y) {
      return true
  } else if (d[1] === y) {
    if (d[0] >= month) {
      return true;
    }
  }
  return false;
}

function formatDate(d) {
  for (var i = 0; i < d.length; i++) {
    if (d[i] === '/' || d[i] === '-') {
      d = d.split(d[i])
    }
  }
  if (d[1].length > 2) {
    d[1] = d[1].slice(d[1].length - 2);
  }
  return d
}

checkExpiryValid('06/2017')
