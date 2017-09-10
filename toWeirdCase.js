function toWeirdCase(string){
  const arr = string.split(' ');
  return arr
    .map(x => {
      return x
        .split('')
        .map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('');
    }).join(' ');
}

toWeirdCase('This is a test');
