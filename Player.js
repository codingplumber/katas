function Player(name, position, age, dribbling, pass, shoot) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.dribbling = dribbling;
  this.pass = pass;
  this.shoot = shoot;
}

////////////// or /////////////////////
function Player(name, position, age, dribbling, pass, shoot) {
  Object.assign(this, {name, position, age, dribbling, pass, shoot});
}

////////////// class //////////////////
class Player {
  constructor(name, pos, age, dribble, pass, shoot) {
    Object.assign(this, {
      name     : name,
      position : pos,
      age      : age,
      dribbling: dribble,
      pass     : pass,
      shoot    : shoot,
    });
  }
}

/////////////// deconstructing /////////////
function Player(name, position, age, dribbling, pass, shoot) {
  return { name, position, age, dribbling, pass, shoot };
}
