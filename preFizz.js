function preFizz(n) {
  var arr = [];
  for (var i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
}

preFizz(20);

///////////////////////////// BETTER ////////////////////////////

// preFizz = n => new Array( n ).fill().map( (val, index) => index + 1 );
