function crap(x, bags, cap){
  if (bags && cap) {
    var pooBags = bags * cap;
  }

  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
      if (x[i][j] === '@') {
        pooBags--;
      } else if (x[i][j] === 'D') {
        return 'Dog!!';
      }
    }
  }
  return pooBags >= 0 ? 'Clean' : 'Cr@p'
}

// crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2);

crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1);

// crap([['_','_'], ['_','@'], ['D','_']], 2, 2);
