var number = function(busStops){
  var count = 0;
  for (var i = 0; i < busStops.length; i++) {
    count += (busStops[i][0] - busStops[i][1]);
  }
  return count;
}

number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
