function sum(num1, num2) {
  console.log(arguments); //[Arguments] { '0': 2, '1': 5, '2': 10 }
  console.log(arguments.length); // 3
  console.log(arguments[0]); // 2

  if (
    arguments.length === 2 &&
    typeof num1 === 'number' &&
    typeof num2 === 'number'
  ) {
    //  Walidacja argumentów funkcji ilość i typów
    // Jeśli nie chcemy mieć kłopotów to zastosujmy ją
    // bo JS nie wyświeli nam błędy jak podamy nie taką 
    // ilość i nie takie argumenty jak byśmy sobie życzyli
    return num1 + num2;
  } else {
    console.error('Niepoprawna ilość argumentów lub nieodpowiednie typy argumentów');
    return 'error';
  }


}

console.log(sum(2, 5, 10)); // 7 gdyby nie było walidacji
console.log('\nPoprane argumenty\n');
console.log(sum(4, 7));

// zmienna arguments to obiekt tablicopodobny (ang. array-like)
// do jej elementów odwołujemy sie jak do elementów tablicy
// posiada włąściwość length, lecz nie można stosować funkcji
// (metod) obiektu Array
// za pomocą arguments[i] można zmodyfikować argumenty i np. sum(2, 7);
// może się okazac nie równe 9
// zmienna ta będzie zawierała nawet te argumenty, które nie są 
// zadeklarowane jako parametry np. 10

function sumOne() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sumOne(5, 6, 7, 3, 22));

// [Arguments] { '0': 2, '1': 5, '2': 10 }
// 3
// 2
// Niepoprawna ilość argumentów lub nieodpowiednie typy argumentów
// error

// Poprane argumenty

// [Arguments] { '0': 4, '1': 7 }
// 2
// 4
// 11
// 43