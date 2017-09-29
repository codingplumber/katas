function findUnknowNumber(x,y,z){
  for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (i % 3 === x && i % 5 === y && i % 7 === z) {
      return i;
    }
  }
}

findUnknowNumber(1,3,5);

///////////////// BETTER ///////////////////////
const findUnknowNumber = (x, y ,z, n = 1) =>
  n % 3 === x && n % 5 === y && n % 7 === z ? n : findUnknowNumber(x, y, z, n + 1);
