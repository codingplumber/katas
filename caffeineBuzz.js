function caffeineBuzz(n){
  let x;

  if (n % 3 === 0 && n % 4 === 0) {
    x = 'Coffee';
  } else if (n % 3 === 0) {
    x = 'Java';
  } else {
    return 'mocha_missing!';
  }

  return n % 2 !== 0 ? x : x + 'Script';
}

caffeineBuzz(36);

////////////////// or //////////////////
// function caffeineBuzz(n){
//   switch(0){
//     case n % 12: return "CoffeeScript";
//     case n % 6:  return "JavaScript";
//     case n % 3:  return "Java";
//     default:     return "mocha_missing!";
//   }
// }
