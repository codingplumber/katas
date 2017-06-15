function killcount(counselors, jason){
  var killed = [];
  for (var i = 0; i < counselors.length; i++) {
    if (counselors[i][1] < jason) {
      killed.push(counselors[i][0]);
    }
  }
  return killed;
}

var counselors = [["Mike", 7],["Alysa", 3]];
killcount(counselors, 7);
