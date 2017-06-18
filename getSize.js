function getSize(width, height, depth) {
  var dimensions = [];
  var surfaceArea  = (2 * width * height) + (2 * depth * height) + (2 * width * depth);
  var volume = width * height * depth;
  dimensions.push(surfaceArea, volume);
  return dimensions;
}

getSize(10, 10, 10);
//[600, 1000]
