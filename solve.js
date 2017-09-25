function solve(a){
	let odd = 0,
      even = 0;
  a.filter(x => {
  	if (x >= 0) return (x % 2 === 0) ? even++ : odd++;
  });
  return even - odd;
};

solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3]);
