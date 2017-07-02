function maskify(cc) {
  if (cc.length > 4) {
    cc = cc.split('');
    let last4 = [];
    last4 = cc.splice(cc.length - 4, 4);
    const first = cc.map(x => x = '#')
                    .join('');
    return first + last4.join('');
  } else {
    return cc;
  }
}

maskify('nu2z3347heswm5wb3xrmvzmmnteoearu23xrjbtlbhsoa6x1');

/////////////////////////// BETTER /////////////////////////////////
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
