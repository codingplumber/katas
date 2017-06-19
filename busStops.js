var number = function(busStops){
  var count = 0;
  for (var i = 0; i < busStops.length; i++) {
    count += (busStops[i][0] - busStops[i][1]);
  }
  return count;
}

number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);


////////////////////// BETTER /////////////////////////////////

// var number = function(busStops){
//   return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
// }
