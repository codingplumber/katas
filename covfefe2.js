function covfefe(str) {
  //use RegExp to search the string for the first parameter, g = global and i = not case sensitive
  var search = new RegExp('coverage', 'gi');
  //use replace to change the searched for term, first parameter is what is being searched for, and the second it what replaces it
  //replace mutates the original string
  var change = str.replace(search, 'covfefe');
  if (change === str) {
    return change + ' covfefe';
  } else {
    return change;
  }
}

covfefe("ie4emi6675ywojbrzfr iczxv908sb5lxfyr2j4i fm2i0gz6bef8xedsra4i 47t1k4fnglrzdyxecdicoveragevecswxnqfy9htfn7b9 yjwhhfq3ild8u102j4i n6u1c8zr51wdvym0a4i")
