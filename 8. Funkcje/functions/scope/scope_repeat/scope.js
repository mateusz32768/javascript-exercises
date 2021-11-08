function init() {

  var firstName = "Maciej";

  function sayHello(text) {

    var lastName = "Kowalski";

    console.log("Cześć, " + firstName + " " + lastName);

  }

  //sayHello();

  window.hello = sayHello;

}

init();

// garbage collector istnieje w JS
// Funkcja ma dostęp do zmiennych tam, gdzie została zdefiniowana,
// a nie tam gdzie  jest wywoływana, dlatego funkcja sayHello