function isOnionArray(arr){
  let count = Math.floor(arr.length / 2),
    isOnion = [],
    first = 0,
    last = arr.length - 1;

  while (count > 0) {
    isOnion.push(arr[first] + arr[last] <= 10);
    first++;
    last--;
    count--;
  }

  return isOnion.every(x => x === true);
}

isOnionArray([6, 2, 4, 2, 2, 2, 1, 5, 0, 0]);

///////////////// BETTER //////////////////
function isOnionArray(arr){
  var i = 0, j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] > 10) return false;
    i++;
    j--;
  }
  return true;
}
