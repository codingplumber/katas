function all( arr, fun ){
  if (!arr) {
    return true;
  } else {
    return arr.map(function(elem) {
      if (fun(elem)) {
        return true;
      }
      return false;
    }).every(function(elem) {
      if (elem) {
        return true;
      }
      return false;
    });
  }
}

all([1, 2, 3, 4, 5, 12], function(v){return v<9});
