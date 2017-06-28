function XO(str) {
  const x = [];
  const o = [];
  const z = str.split('')
               .map(elem => {
                 if (elem.toLowerCase() === 'x') {
                   x.push(elem);
                 } else if (elem.toLowerCase() === 'o') {
                   o.push(elem);
                 }
               });
  return x.length === o.length ? true : false;
}

XO("OoxXoX");

/////////////////////////// BETTER ////////////////////////////////
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
