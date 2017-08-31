function countMe(data){
  const d = [];
  let count = 1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] != Number(data[i])) {
      return '';
    }
    if (data[i] !== data[i + 1]) {
      d.push(count);
      d.push(data[i]);
      count = 1;
    } else {
      count++;
    }
  }
  return d.join('');
}

countMe('1112223344441234');

//////////////// with forEach ////////////////////
// function countMe(data){
//   var arr = []; var count = 1; var isConsecutiveDigitCountInserted = false;
//   if(!Number(data))
//   return '';
//
//   var array = Array.from(data);
//   array.forEach((item,index)=>{
//     if(array[index] === array[index + 1]){
//      count++;
//      isConsecutiveDigitCountInserted = true;
//     }
//     else {
//       if(!isConsecutiveDigitCountInserted) count = 1;
//       arr.push(count);
//       arr.push(item);
//       isConsecutiveDigitCountInserted = false;
//     }
//   });
//   return  arr.join('');
// }
