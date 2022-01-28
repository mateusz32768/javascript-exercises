// Trzy sposoby tworzenia funkcji

sayHello(); // Witaj 

// tak zadeklarowana funkcja podlega hoistingowi
function sayHello() {
  console.log('Witaj');
}


//sayHello2(); //  TypeError: sayHello2 is not a function

// tak nie 
// zmienna sayHello2 przechowuje referencję do funkcjii
var sayHello2 = function () {
  console.log('Cześć');
};


sayHello2();

// Trzeci sposób tworzenia funkcji.
// Przydatny jeśli chcielibyśby się odwołać do funkcji w jej wnętrzu
// Patrz funkcje rekurencyjne
// Poniżej przykład nieudolnej rekurencji

console.log('\nStart rekurencji\n');

var i = 0;

var sayHello3 = function hello() {
  i++;
  if (i > 5) {
    return 0;
  }

  console.log('Siema');
  console.log(hello());
}

//hello(); // ReferenceError: hello is not defined

sayHello3();

// Witaj
// Cześć

// Start rekurencji

// Siema
// Siema
// Siema
// Siema
// Siema
// 0
// undefined
// undefined
// undefined
// undefined