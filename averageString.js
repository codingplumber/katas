function averageString(str) {
  const nums = wordsAndNums(str.split(' '))
  const length = nums.length;

  if (valid(nums)) {
    return 'n/a'
  } else {
    const floored = [Math.floor(sum(nums)/length)];
    const worded = wordsAndNums(floored);
    return worded.pop();
  }
}

function wordsAndNums(x) {
  return x.map(x => {
    switch(x) {
      case 'zero':
        return 0;
      case 'one':
        return 1;
      case 'two':
        return 2;
      case 'three':
        return 3;
      case 'four':
        return 4;
      case 'five':
        return 5;
      case 'six':
        return 6;
      case 'seven':
        return 7;
      case 'eight':
        return 8;
      case 'nine':
        return 9;
      case 0:
        return 'zero';
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return false;
    }
  })
}

function valid(x) {
  return x.some(x => x === false)
}

function sum(x) {
  return x.reduce((sum, value) => sum + value);
}


averageString("zero nine five two");

///////////////////////////////// BETTER //////////////////////////////////
// function averageString(str) {
//   var numObj = {
//     'zero': 0,
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9
//   },
//   sum = 0;
//   str = str.split(' ');
//   for(var i = 0; i < str.length; i++) {
//     if(numObj[str[i]] === undefined) {
//       return 'n/a';
//     } else {
//       sum += numObj[str[i]];
//     }
//   }
//   return Object.keys(numObj)[Math.floor(sum/str.length)];
// }
