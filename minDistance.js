function minDistance(n){
  const arr = [];
  let smallest = n;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }

  arr.map((x, i, arr) => {
    if (arr[i + 1] - arr[i] < smallest) {
      smallest = arr[i + 1] - arr[i];
    }
  });

  return smallest;
}

minDistance(13013);
