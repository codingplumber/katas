String.prototype.camelCase=function(){
  return this
    .split(' ')
    .map(x => x ? x[0].toUpperCase() + x.slice(1) : x.trim(x))
    .join('');
};

" test case ".camelCase();
