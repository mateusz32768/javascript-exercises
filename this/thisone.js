// this jest to specjalne słowo kluczowe, które jest
// automatycznie definiowane w zakresie każdej funkcji
// Jednak to, do czego się ono odwołuje, może sprawiać
// trudności nawet najbardziej doświadczonym  programistą

// Poniżej ilustracja motywacji stojącej za utworzeniem
// mechanizmu this:

console.log('Jestem w pliku pierwszym');

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  const greeting = `Witaj, jestem ${identify.call(this)}`;
  return greeting;
}

const me = {
  name: 'Kyle',
};

const you = {
  name: 'Czytelnik',
};

console.log(identify.call(me));
console.log(identify.call(you));

console.log(speak.call(me));
console.log(speak.call(you));
