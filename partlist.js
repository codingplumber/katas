function partlist(arr) {
  const returnArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let slicedEnd = arr.slice(i + 1).join(' ')
      , slicedFront = arr.slice(0, i + 1).join(' ');
    returnArr.push([slicedFront, slicedEnd]);
  }
  return returnArr
}


partlist(["I", "wish", "I", "hadn't", "come"]);
