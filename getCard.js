function getCard() {
  let arr = [];
  let count = 0;
  let max;
  let min;

  setRange();

  return arr.map((x, i, arr) => {
    if (i < 5) return `B${x}`;
    if (i >= 5 && i < 10) return `I${x}`;
    if (i >= 10 && i < 14) return `N${x}`;
    if (i >= 14 && i < 19) return `G${x}`;
    return `O${x}`;
  });

  function setRange() {
    if (arr.length < 24) {
      if (count <= 4) {
        max = 15;
        min = 1;
      } else if (count > 4 && count <= 9) {
        max = 30;
        min = 16;
      } else if (count > 9 && count <= 13) {
        max = 45;
        min = 31;
      } else if (count > 13 && count <= 18) {
        max = 60;
        min = 46;
      } else {
        max = 75;
        min = 61;
      }
      return getRandom();
    }

    function getRandom() {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      if (arr.includes(random)) {
        getRandom();
      } else {
        arr.push(random);
        count++;
        return setRange();
      }
    }
  }
}

getCard();
