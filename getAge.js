function getAge(inputString){
  inputString = inputString.split('');
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] > 0) {
      return parseInt(inputString[i]);
    }
  }
}
