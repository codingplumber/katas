function alan(x){
  var terms = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London'];
  const usedTerms = [];

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < terms.length; j++) {
      if (x[i] === terms[j]) {
        usedTerms.push(terms[j]);
        terms.splice(j, 1);
      }
    }
  }
  return usedTerms.length === 5 ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
}

alan(
[ 'Disappointment',
  'Backstabbing Central',
  'Tiverton',
  'Spiksworth',
  'Rejection',
  'Backstabbing Central',
  'Shattered Dreams Parkway' ]);
