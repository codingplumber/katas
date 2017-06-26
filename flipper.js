function flipper(stringArr){
  return stringArr
           .reverse()
           .map((x) => {
              if (x.length > 1) {
                x = x.split('').map(y => y.toLowerCase());
                return x.join('');
              } else {
                return x;
              }
           })
           .map(x => x.length > 1 ? x.slice(0, x.length - 1) + x.charAt(x.length - 1).toUpperCase() : x)
           .join(' ');
}

flipper([ 'hpiazijexjq1rhyf1or',
 'MDPUPX8YS50ORBE29',
  'g1zkonk7e0amqqnz5mi',
  'a',
  '2ktvwhy89sspaksm7vi' ]);

//////////////////////////// BETTER /////////////////////////////////
function flipper(stringArr){
return stringArr.map(v => v.slice(0,-1).toLowerCase() + (v.length >1 ? v.substr(-1).toUpperCase() : v))
.reverse().join(' ')
}
