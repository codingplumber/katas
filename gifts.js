GIFTS = {
    1: 'Toy Soldier',
    2: 'Wooden Train',
    4: 'Hoop',
    8: 'Chess Board',
   16: 'Horse',
   32: 'Teddy',
   64: 'Lego',
  128: 'Football',
  256: 'Doll',
  512: "Rubik's Cube"
}

function gifts(number) {
  let getKeys = [];
  let presents = [];
  let k = Object.keys(GIFTS);

  while (number > 0) {
    for (var i = 0; i < k.length; i++) {
      if (number < k[i]) {
        getKeys.push(k[i - 1]);
        number = number - k[i - 1];
        break;
      }
      else if (number > k[i] && k[i] === k[k.length - 1]) {
        getKeys.push(k[i]);
        number = number - k[i];
        break;
      } else if (number === k[i]) {
        getKeys.push(k[i]);
        number = number - k[i];
        break;
      }
    }
  }

  let j = getKeys.length - 1;
  while (j >= 0) {
    presents.push(GIFTS[getKeys[j]]);
    j--;
  }

  return presents.sort();
}

gifts(1023);
