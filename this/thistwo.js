console.log('Funkcje obsługujące jawnie kontekst');

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  const greeting = `Witaj, jestem ${identify(context)}`;
  return greeting;
}

const me = {
  name: 'Kyle',
};

const you = {
  name: 'Czytelnik',
};

console.log(identify(me));
console.log(identify(you));
console.log(speak(me));
console.log(speak(you));
