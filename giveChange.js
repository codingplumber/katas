function giveChange(amount) {
  const arr = [];
  if ((amount % 100) < amount) {
    arr[5] = Math.floor(amount / 100);
    amount = amount - (Math.floor(amount / 100) * 100);
  } else {
    arr[5] = 0;
  }
  if (((amount % 50) < amount)) {
    arr[4] = Math.floor(amount / 50);
    amount = amount - (Math.floor(amount / 50) * 50);
  } else {
    arr[4] = 0;
  }
    if ((amount % 20) < amount) {
    arr[3] = Math.floor(amount / 20);
    amount = amount - (Math.floor(amount / 20) * 20);
  } else {
    arr[3] = 0;
  }
  if (((amount % 10) < amount)) {
    arr[2] = Math.floor(amount / 10);
    amount = amount - (Math.floor(amount / 10) * 10);
  } else {
    arr[2] = 0;
  }
    if ((amount % 5) < amount) {
    arr[1] = Math.floor(amount / 5);
    amount = amount - (Math.floor(amount / 5) * 5);
  } else {
    arr[1] = 0;
  }
  if (((amount % 1) < amount)) {
    arr[0] = Math.floor(amount / 1);
    amount = amount - (Math.floor(amount / 1) * 1);
  } else {
    arr[0] = 0;
  }
  return arr;
}

giveChange(217);

////////////////////////////// BETTER //////////////////////////////////
// const bills = [100, 50, 20, 10, 5, 1];
//
// const giveChange = amount => (
//   bills
//     .map(value => {
//       let result = Math.trunc(amount / value);
//       amount = amount % value;
//
//       return result;
//     })
//     .reverse()
// );

///////////////////////////// REVERSE //////////////////////////////////
// function giveChange(amount) {
//   return amount
//     .map((e, i, arr) => {
//       switch(i) {
//         case 0:
//           return e * 1;
//         case 1:
//           return e * 5;
//         case 2:
//           return e * 10;
//         case 3:
//           return e * 20;
//         case 4:
//           return e * 50;
//         case 5:
//           return e * 100;
//       }
//     })
//     .reduce((total, num) => total + num);
// }
