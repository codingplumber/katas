function pattern(n){
  var output = [],
    count = n,
    spliceNum = 0;
  return n <= 0 ? '' : loop();

  function loop() {
    let temp = []
    for (var i = 1; i <= n; i++) {
      temp.push(i);
    }

    if (count > 0) {
      if (spliceNum > 0) temp.splice(0, spliceNum);
      if (count > 1) temp.push('\n');
      spliceNum++;
      output.push(temp.join(''));
    }

    count--;
    return count !== 0 ? loop() : output.join('');
  }
}

pattern(5);
