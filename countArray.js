function count(array){
  return array
    .reduce((obj, index) => {
      if (!obj[index]) {
        obj[index] = 0;
      }
      obj[index]++;
      return obj;
    }, {});
}

count(['a', 'a', 'b', 'b', 'b']);
