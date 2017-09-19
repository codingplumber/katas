function removeSmallest(numbers) {
  let smallest = [...numbers]
      .sort((a,b) => a - b)
      .shift(),
    count = 0;

  return numbers.filter(x => {
    if (x === smallest && count < 1) {
      count++;
      return x !== smallest
    }
    return x;
  })
}

removeSmallest([66,165,154,228,156,278,15,109,4,170,399,127,225,232,316]);
