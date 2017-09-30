function isLeapYear(year) {
  const end = year.toString().substring(2);
  if (end === '00' && year % 400 === 0) {
    return true;
  }
  if (end !== '00' && year % 4 === 0) {
    return true;
  }
  return false;
}

isLeapYear(1984);

////////////////////// BETTER ////////////////////
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
