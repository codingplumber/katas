function wordSearch(query, seq){
  const x = seq.filter(word => word.toLowerCase().includes(query.toLowerCase()));
  return (x.length > 0) ? x : ["Empty"];
}

wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]);
