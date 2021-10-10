// (function () {

//   var arr = [1, 45, 22, 31, 3];

//   arr.sort(function (a, b) {

//     return a - b;

//   });

//   function sayHello(text, getName) {

//     var result = text + getName();

//     return result;

//   }

//   console.log(sayHello("Witaj, ", function () {
//     return "Piotr";
//   }));

// })();

// self-invoking anonymous function

// Opakowanie zmiennych i funkcji aby ich nazwy nie były widoczne na zewnatrz
// za pomocą iife

(function () {

  const arr = [1, 45, 22, 33, 13, 18, 41];

  function sortFunc(a, b) {
    return a - b;
  }

  arr.sort(sortFunc);
  console.log(arr);

  console.log(
    [34, 8, 9, 11, 19, 25]
      .sort((a, b) => a - b)
  );

  function sayHello(text, getName) {

    let result = text + getName();

    return result;
  }

  console.log(sayHello('Witaj, ', function () {
    return 'Marek';
  }));

})();



