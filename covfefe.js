function covfefe(str){
  let arr = str.split('');
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'c') {
      if (arr[i + 1] === 'o') {
        if (arr[i + 2] === 'v') {
          if (arr[i + 3] === 'e') {
            if (arr[i + 4] === 'r') {
              if (arr[i + 5] === 'a') {
                if (arr[i + 6] === 'g') {
                  if (arr[i + 7] === 'e') {
                    arr.splice(i, 8, 'covfefe');
                    count++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (count > 0) {
    return arr.join('');
  } else {
    return arr.join('') + ' covfefe';
  }
}

covfefe("ie4emi6675ywojbrzfr iczxv908sb5lxfyr2j4i fm2i0gz6bef8xedsra4i 47t1k4fnglrzdyxecdicoveragevecswxnqfy9htfn7b9 yjwhhfq3ild8u102j4i n6u1c8zr51wdvym0a4i");
