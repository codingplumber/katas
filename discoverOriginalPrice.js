function discoverOriginalPrice(discountedPrice, salePercentage){
  let oP = (100 / (100 - salePercentage)) * discountedPrice;
  return +oP.toFixed(2);
}

discoverOriginalPrice(75.75,25);
