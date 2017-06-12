function findLongest(array){
  var longest = 0;
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].toString().length > count) {
      longest = array[i];
      count = array[i].toString().length;
    }
  }
  return longest;
}

findLongest([9000, 8, 800, 9900]);
