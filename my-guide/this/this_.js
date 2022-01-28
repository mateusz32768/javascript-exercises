'use strict';

// function identify() {
//   return this.name.toUpperCase();
// }

// function speak() {
//   var greeting = 'Witaj, jestem ' + identify.call(this);
//   console.log(greeting);
// }

var me = {
  name: 'Kyle',
};

var you = {
  name: 'Czytelnik',
};

// //identify.call(me);
// //identify.call(you);

// speak.call(me);
// speak.call(you);

// Zamiast this przekazujemy obiekt kontekstu
// jednakże jest to mniej elegancki sposób
// i nie zapewniający łatwiejszego wielokrontego użycia

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = 'Witaj, jestem ' + identify(context);
  console.log(greeting);
}

speak(me);
speak(you);
