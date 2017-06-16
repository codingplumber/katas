function  calculateAge(birth, age) {
  if (birth > age) {
    let x = birth - age;
    if (x > 1) {
      return "You will be born in " + x + " years.";
    } else {
      return "You will be born in 1 year.";
    }
  } else if (age > birth) {
    let x = age - birth;
    if (x > 1) {
      return "You are " + x + " years old.";
    } else {
      return "You are 1 year old.";
    }
  } else if (birth === age) {
    return "You were born this very year!";
  }
}

calculateAge(2010, 2009)
// calculateAge(2899, 2900)
// calculateAge(3400, 3400)
