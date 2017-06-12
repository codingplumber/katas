function insurance(age, size, numofdays){
  var base = 50;
  if (age < 25) {
    base += 10;
  }

  if (size === 'economy') {
    base += 0;
  } else if (size === 'medium') {
    base += 10;
  } else {
    base += 15;
  }

  if (numofdays < 0) {
    return 0;
  } else {
    return base * numofdays;
  }
}
