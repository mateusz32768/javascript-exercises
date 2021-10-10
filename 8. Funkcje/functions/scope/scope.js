function getPriceWithDiscount(basicPrice) {
  const totalPrice = basicPrice * (1 - discount);
  const discount = 0.2;
  return totalPrice;
}

console.log(getPriceWithDiscount(120));
//ReferenceError: Cannot access 'discount' before initialization