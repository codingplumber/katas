function getDrinkByProfession(param){
  switch(param.toLowerCase()) {
    case 'jabroni':
      return 'Patron Tequila';
    case 'school counselor':
      return 'Anything with Alcohol';
    case 'programmer':
      return 'Hipster Craft Beer';
    case 'bike gang member':
      return 'Moonshine';
    case 'politician':
      return 'Your tax dollars';
    case 'rapper':
      return 'Cristal';
    default:
      return 'Beer';
  }
}

getDrinkByProfession("scHOOl counselor");

////////////////////// DIFFERENT /////////////////////////////
// function getDrinkByProfession(param){
//   let map = new Map([
//       ["jabroni", "Patron Tequila"],
//       ["school counselor", "Anything with Alcohol"],
//       ["programmer", "Hipster Craft Beer"],
//       ["bike gang member", "Moonshine"],
//       ["politician", "Your tax dollars"],
//       ["rapper", "Cristal"]
//       ]);
//
//    let normal = param.toLowerCase();
//    return map.has(normal) ? map.get(normal) : "Beer";
// }

///////////////////////// AND ///////////////////////////////
// const drinks = {
//   "jabroni": "Patron Tequila",
//   "school counselor": "Anything with Alcohol",
//   "programmer": "Hipster Craft Beer",
//   "bike gang member": "Moonshine",
//   "politician": "Your tax dollars",
//   "rapper": "Cristal"
// }
//
// const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"

///////////////////////// AND ///////////////////////////////
// function getDrinkByProfession(param){
//     var list = {
//     "jabroni": "Patron Tequila",
//     "school counselor": "Anything with Alcohol",
//     "programmer": "Hipster Craft Beer",
//     "bike gang member": "Moonshine",
//     "politician": "Your tax dollars",
//     "rapper": "Cristal"
//     }
//     return list[param.toLowerCase()]||"Beer";
// }
