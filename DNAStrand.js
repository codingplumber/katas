function DNAStrand(dna){
  return dna
    .split('')
    .map(x => {
      switch(x) {
        case 'A':
          return 'T';
        case 'T':
          return 'A';
        case 'C':
          return 'G';
        case 'G':
          return 'C';
        default:
          return x;
      }
    })
    .join('');
}

DNAStrand("ATTGC");

//////////////////////////// OR //////////////////////////////
// function DNAStrand(dna){
//   var complements = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C'
//   };
//   return dna.split('').map(function(char) {
//     return complements[char];
//   }).join('');
// }
