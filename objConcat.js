function objConcat(arr){
  return Object.assign({}, ...arr);
}

var a={'1':'1','2':'2','3':'3'},
    b={'3':'4','5':'6','6':'7','7':'8'},
    c={'5':'9','8':'9','6':'12','23':'35'},
    o=[a,b,c];

objConcat(o);
