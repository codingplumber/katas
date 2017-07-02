function elimination(arr){
  let doubles = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        doubles = arr[i];
      }
    }
  }
  if (doubles) {
    return doubles
  } else {
    return null;
  }
}

elimination([2,5,34,1,22,1])
