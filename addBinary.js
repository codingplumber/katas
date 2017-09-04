function addBinary(a,b) {
  var c = a + b;
  return (c >>> 0).toString(2);
}

addBinary(1,2);
