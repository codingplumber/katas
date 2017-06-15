function solution(number){
  var nums = [];
  if (number > 0) {
    for (var i = 1; i < number; i++) {
      if (i % 3 === 0) {
        nums.push(i);
      } else if (i % 5 === 0) {
        nums.push(i);
      }
    }

    if (nums.length > 1) {
      return nums.filter((elem, i, nums) => {
        return nums.indexOf(elem) === i;
      }).reduce((total, num) => {
        return total + num;
      });
    } else {
      return Number(nums);
    }

  } else if (number <= 0) {
    return 0;
  }
}

solution(10);

///////////// BETTER SOLUTION //////////////
// function solution(number){
//   var sum = 0;
//
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }
