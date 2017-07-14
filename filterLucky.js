var filterLucky=x=>{
  return x.filter(y => {
    y = y.toString();
    for (var i = 0; i < y.length; i++) {
      if (y[i] == 7) {
        return y
      }
    }
  });
}

filterLucky([1,2,3,4,5,6,7,68,69,70,15,17])

/////////////////////////// OR /////////////////////////////////
// const filterLucky = xs => xs.filter(x => x.toString().includes('7'));

////////////////////////// OR //////////////////////////////////
// var filterLucky=x=>{
//   return x.filter(function(el) {
//     if(el.toString().split('').indexOf('7') != -1) {
//       return el;
//     }
//   });
// }
