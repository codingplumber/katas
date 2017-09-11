function validPhoneNumber(phoneNumber){
  let x = phoneNumber;
  if (x[0] === '(' && x[4] === ')') {
    if (x[5] === ' ' && x[9] === '-') {
      if (x.length === 14) {
        return true;
      }
    }
  }
  return false;
}

validPhoneNumber("(123) 456-7890");
////////////// BETTER ///////////////
function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
