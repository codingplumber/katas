// Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.
function reverseFibo(n){
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr.reverse().join('');
}

reverseFibo(10)

////////////////// MUCH BETTER /////////////////////
function reverseFibo(n){
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i < 2 ? i : arr[i - 1] + arr[i - 2])
  }
  return arr.reverse().join('');
}
