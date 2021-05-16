function getPriceWithDiscount(basicPrice) {
  var totalPrice = basicPrice * (1 - discount);
  var discount = 0.2;
  return totalPrice;
}

console.log(getPriceWithDiscount(120));
// NaN; nie ma błędu jest zwrócona wartość NaN, która jest błędna