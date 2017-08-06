function numberToPower(number, power){
  var num = [];
  if (power === 0) {
    return 1;
  } else {
    for (let i = 0; i < power; i++) {
      num.push(number);
    }
  }
  return num.reduce((a, b) => a * b);
}

numberToPower(10, 4);
