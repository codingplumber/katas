function getAges(sum,difference){
  if (sum < 0 || difference < 0 || difference > sum) {
    return null;
  } else {
    sum = sum - difference;
    const age1 = sum / 2 + difference;
    const age2 = sum / 2;
    return [age1, age2]
  }
}

getAges(24,4);
