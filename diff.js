function diff(a, b) {
  var arr1 = a.filter(function(val) {
    return b.indexOf(val) === -1;
  });
  var arr2 = b.filter(function(val) {
    return a.indexOf(val) === -1;
  });
  var differences = arr1.concat(arr2);
  differences.sort();
  return differences = differences.filter(function(elem, index, diff) {
    return diff.indexOf(elem) === index;
  });
}



var A = ['a','a','t','e','f','i','j'];

var B = ['t','g','g','i','k','f'];

diff(A, B);
