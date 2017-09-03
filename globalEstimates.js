function globalEstimate( estimates ){
  let min = [],
    max = [];
  estimates.map((x, i, arr) => {
    if (arr[i][0]) min.push(arr[i][0]);
    if (arr[i][1]) max.push(arr[i][1]);
  });
  min = (min.length === 1 ? 1 : min.reduce((sum, total) => {return sum + total}, 0));
  max = (max.length === 1 ? 1 : max.reduce((sum, total) => {return sum + total}, 0));

  return [min, (min + max) / 2, max]
}

globalEstimate([[1, 3], [1, 4], [1, 5]]);

//////////////////////// BETTER ///////////////////////////
const globalEstimate = e =>  e.reduce(([s1,_,s2], [a,b])=> [s1+a, (s1+s2+a+b)/2, s2+b], [0,0,0])
