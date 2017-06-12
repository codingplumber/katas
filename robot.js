function robot(skinScan) {
  for (var i = 0; i < skinScan.length; i++) {
    for (var j = 0; j < skinScan[i].length; j++) {
      if (skinScan[i][j] === 'X') {
        skinScan[i][j] = '*';
      }
    }
  }
  return skinScan;
}
