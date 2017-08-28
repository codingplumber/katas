reverse = function(array) {
  const yarra = [];
  for (let i = array.length - 1; i >= 0; i--) {
    yarra.push(array[i]);
  }
  return yarra;
}

reverse([1,null,14,"two"]);
