function greet(language) {
  var greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  for (var key in greetings) {
    if (greetings[language]) {
      return greetings[language];
    } else {
      return greetings.english;
    }
  }
}
greet('fsf');

/////////////////////// BETTER ///////////////////////////
// function greet(lang) {
//   return langs[lang]||langs['english'];
// }
