function greet(name) {
  return name ? 'hello ' + name + '!': null;
}

greet(null);

/////////////////// or /////////////////////////
// function greet(name) {
//   return name === null || name === '' ? null : 'hello ' + name + '!';
// }
