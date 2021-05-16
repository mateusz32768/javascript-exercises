function getPriceWithDiscount(basicPrice) {
  var totalPrice; // domyślnie undefined 
  var discount; // domyślnie undefined 
  totalPrice = basicPrice * (1 - discount); // tutaj mamy: number * (1 – undefined) === NaN 
  discount = 0.2; // dopiero tutaj określamy wartość , ale nie ma ona już   znaczenia 
  return totalPrice; // zwracamy wcześniej obliczone NaN 
}

console.log(getPriceWithDiscount(120)); // NaN