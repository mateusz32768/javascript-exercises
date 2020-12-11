// this jest to specjalne słowo kluczowe, które jest
// automatycznie definiowane w zakresie każdej funkcji
// Jednak to, do czego się ono odwołuje, może sprawiać
// trudności nawet najbardziej doświadczonym  programistą

// Poniżej ilustracja motywacji stojącej za utworzeniem
// mechanizmu this:

console.log('Funkcje obsługujące kontekst za pomocą this');

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

console.log(identify.call(me)); // KYLE
console.log(identify.call(you)); // CZYTELNIK

console.log(speak.call(me)); // Witaj, jestem KYLE
console.log(speak.call(you)); // Witaj, jestem CZYTELNIK
