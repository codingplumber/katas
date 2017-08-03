function apples(kilos, price) {
  switch(true) {
    case kilos >= 11:
      return (kilos * price) - ((kilos * price) * 0.3)
    case kilos >= 9:
      return (kilos * price) - ((kilos * price) * 0.25)
    case kilos >= 7:
      return (kilos * price) - ((kilos * price) * 0.2)
    case kilos >= 5:
      return (kilos * price) - ((kilos * price) * 0.15)
    case kilos >= 3:
      return (kilos * price) - ((kilos * price) * 0.1)
    case kilos >= 1:
      return (kilos * price) - ((kilos * price) * 0.05)
    default:
      return (kilos * price);
  }
}

apples(6, 2.75);
