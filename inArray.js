function inArray(array1,array2){
  let arr = array1.filter(x => {
    let i = 0;
    while (i < array2.length) {
      if (array2[i].includes(x)) {
        return x;
      }
      i++;
    }
  });
  return arr.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["live", "strong", "arp"];

inArray(a1, a2);

///////////////// GOOD //////////////////
// function inArray(arr1, arr2) {
//   return arr1.filter(function(needle) {
//     return arr2.some(function(haystack) {
//       return haystack.indexOf(needle) > -1;
//     });
//   }).sort();
// }
