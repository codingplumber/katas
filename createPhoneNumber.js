function createPhoneNumber(numbers){
  'use strict';
  const y = numbers;
  y.map((x, i, arr) => {
    if (i === 0) y.splice(0, 0, '(');
    if (i === 4) y.splice(4, 0, ')');
    if (i === 5) y.splice(5, 0, ' ');
    if (i === 9) y.splice(9, 0, '-');
  });
  return y.join('');
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

///////////////////// BETTER /////////////////////
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";

  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
