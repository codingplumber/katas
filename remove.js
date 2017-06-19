function remove(s){
  if (s.charAt(s.length - 1) === '!') {
    var x = s.substring(0, s.length-1);
    return x;
  }
  return s;
}

remove("Hi!!1!");
