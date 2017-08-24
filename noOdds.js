function noOdds( values ){
  return values.filter(x => x % 2 === 0);
}

noOdds([0, 1, 2, 3]);

/////////////// also ///////////////////
// function noOdds( values ){
//   function isEven(number){
//     return number%2 == 0;
//   }
//   return values.filter(isEven);
// }
