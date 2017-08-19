function matchArrays(v,r){
  let count = 0;
  for (let i = 0; i < v.length; i++) {
    if (r.includes(v[i])) {
      count++;
    }
  }
  return count;
}

matchArrays([ 'incapsulation', 'OOP', 'array' ], [ 'time', 'propert', 'paralelism', 'OOP' ]);

///////////////// or ////////////////////
// const matchArrays = (v, r) => v.filter(e => r.indexOf(e) != -1).length;
