var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]


function getNames(data){
  const arr = [];
  for (var key in data) {
    arr.push(data[key].name);
  }
  return arr;
}

getNames(data);

////////////////// with map /////////////////////
// function getNames(data){
//   return data.map(function(item){return item.name});
// }

  /* data is an array containing objects. .map acts on this array using the
  function enclosed inside of it.

  The function accepts an argument called item and applies this to "item.name".

  It is attempting to return a new array containing only their names. */
