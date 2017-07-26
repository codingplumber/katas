function oddOrEven(array) {
  if (array === 0 || array.length === 0) {
    return 'even';
  } else {
    const total = array.reduce((a, b) => a + b)
    return total % 2 !== 0 ? 'odd' : 'even';
  }
}

oddOrEven([0]);
// oddOrEven([]);
// oddOrEven([-1023, 1, -2]);

//////////////////////////// better /////////////////////////////
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

////////////////////////////// or //////////////////////////////
const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];
