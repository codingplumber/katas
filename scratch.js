function scratch(lottery){
  let winnings = 0
  lottery.filter(x => {
    let z = x.split(' ')
    if (z[0] === z[1] && z[1] === z[2]) {
      return winnings+=Number(z[3])
    }
  })
  return winnings
}

scratch([
"tiger tiger tiger 100",
"rabbit dragon snake 100",
"rat ox pig 1000",
"dog cock sheep 10",
"horse monkey rat 5",
"dog dog dog 1000"
])
