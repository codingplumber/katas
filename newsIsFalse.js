function newsIsFalse(news) {
  let abigail = ['a', 'b', 'i', 'g', 'a', 'i', 'l'];
  news
    .split('')
    .forEach(x => {
      if (abigail[0] === x) {
        abigail.splice(0, 1)
      }
    });

  return abigail.length < 1 ? 'YES' : 'NO';
}


newsIsFalse("f,n,x,n,f,i,v,m,d,g,i,n,y,k,e,p,y,r,f,q,b,s,j,t,q,v,s,u,e,c,e,p,i,r,e,s,h,o,z,c,j,g,u,i,w,o,h,x,e,e,h,k,e,s,b,l,c,q,o,l,j,z,x,e,c,u,q,d,f,i,v");

/////////////////// COOL ////////////////////
function newsIsFalse(news) {
  return /a.*b.*i.*g.*a.*i.*l/i.test(news) ? "YES" : "NO";
}
/////////////////// OR /////////////////////
const newsIsFalse = news => news.match(/a.*b.*i.*g.*a.*i.*l/)? "YES": "NO";
/////////////////// OR ////////////////////
const newsIsFalse = n => /a.*b.*i.*g.*a.*i.*l/.test(n) ? 'YES': 'NO'
