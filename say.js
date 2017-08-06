var say = function(string1) {
  return (string2) => (string1 + ' ' + string2);
}

say('Hello')('World')

///////////////////// interesting ///////////////////////////
// var say = a => b => a + ' ' + b;


///////////////// interesting also //////////////////////////
// const say = string1 => string2 => `${string1} ${string2}`;
