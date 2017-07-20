decodeMorse = function(morseCode){
  let totalWords = [];
  const code = morseCode.split('   ');

  for (let i = 0; i < code.length; i++) {
    totalWords.push(mapCode(code[i]));
  }

  return totalWords
    .map(x => x.join(''))
    .filter(x => x !== '')
    .join(' ');
}


function mapCode(codePart) {
  return codePart
    .split(' ')
    .map(x => {
      switch(x) {
        case('.-'):
          return 'A';
        case('-...'):
          return 'B';
        case('-.-.'):
          return 'C';
        case('-..'):
          return 'D';
        case('.'):
          return 'E';
        case('..-.'):
          return 'F';
        case('--.'):
          return 'G';
        case('....'):
          return 'H';
        case('..'):
          return 'I';
        case('.---'):
          return 'J';
        case('-.-'):
          return 'K';
        case('.-..'):
          return 'L';
        case('--'):
          return 'M';
        case('-.'):
          return 'N';
        case('---'):
          return 'O';
        case('.--.'):
          return 'P';
        case('--.-'):
          return 'Q';
        case('.-.'):
          return 'R';
        case('...'):
          return 'S';
        case('-'):
          return 'T';
        case('..-'):
          return 'U';
        case('...-'):
          return 'V';
        case('.--'):
          return 'W';
        case('-..-'):
          return 'X';
        case('-.--'):
          return 'Y';
        case('--..'):
          return 'Z';
        case('...---...'):
          return 'SOS';
        case('-.-.--'):
          return '!';
        case('.-.-.-'):
          return '.';
      }
    })
}

decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.- ');
