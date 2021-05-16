var text = 'Witaj';

sayHello(); // undifined zmienna globalna została nadpisana
// przez zmienną lokalną, której deklaracja dzięki hoistingowi została 
// wyniesiona na początek zakresu funkcji ale bez przypisania
// dlatego, gdy zosatnie użyta przed przypisaniem będzie użyta wartość undefined

function sayHello() {
  console.log(text); // undefined

  var text = 'Cześć';

  console.log(text);
}

// kod powyżej zostanie tak przetłumaczony przez interpreter JS:

// function sayHello() {

//   var text; // undefined

//   console.log(text); 

//   text = 'Cześć'; // tu dopiero zostanie dokonane przypisanie

//   console.log(text);
// }