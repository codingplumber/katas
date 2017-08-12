function closest(arr){
  if (arr.includes(0)) {
    return 0;
  } else {
    let closest = 0;
    for (let i = 0; i < arr.length; i++) {
      let current = Math.abs(arr[i]);
      if (i === 0) {
        closest = arr[0];
      } else {
        if (current < Math.abs(closest)) {
          closest = arr[i];
        } else if (current === Math.abs(closest)) {
          if (closest === arr[i]) {
            continue;
          }
          return null;
        }
      }
    }
    return closest;
  }
}

closest([ -91, 91, -466, -386, 0, -91 ]);
