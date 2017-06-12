function alphabetWar(fight) {
  let right =[];
  let left = [];
  let victims = [];
  for (var i = 0; i < fight.length; i++) {
    switch(fight[i]) {
      case 'w':
        left.push(4);
        break;
      case 'p':
        left.push(3);
        break;
      case 'b':
        left.push(2);
        break;
      case 's':
        left.push(1);
        break;
      case 'm':
        right.push(4);
        break;
      case 'q':
        right.push(3);
        break;
      case 'd':
        right.push(2);
        break;
      case 'z':
        right.push(1);
        break;
      default:
        victims.push(fight[i]);
    }
  }

  let leftTotal = left.reduce((a, b) => {
    return a + b;
  }, 0);
  let rightTotal = right.reduce((a, b) => {
    return a + b;
  }, 0);

  if (leftTotal > rightTotal) {
    return 'Left side wins!'
  } else if (rightTotal > leftTotal) {
    return 'Right side wins!'
  } else {
    return "Let's fight again!";
  }
}

alphabetWar("wwwwww")
