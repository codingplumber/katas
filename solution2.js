function solution(str, ending){
  let x = ending.length,
    i = 0;
  const end = [],
    string = str.split('');
  while (i < x) {
    let y = string.splice(string.length - 1)
    end.push(y);
    x--;
  }
  return (end.reverse().join('') === ending) ? true : false;
}

solution('samarai', 'ai');
