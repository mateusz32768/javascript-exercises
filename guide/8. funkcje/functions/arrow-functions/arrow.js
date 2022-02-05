const showAnyThings = (arg) => {
  console.log(`Konsola: ${arg}`);
}

showAnyThings('Notebook');

const showAnny = arg => arg;  // pomijamy słowo return
console.log(showAnny('Welcome'));


const whatThis = () => {
  // this to obiekt globalny - pochodzący z zakresu leksykalnego,
  // tzn. z tego w którym jest zdefiniowana funkcja strzałkowa
  console.log(this);

}

whatThis();

const ob = x => {
  return { value: x }
}; // zwracamy obiekt

console.log(ob(5));

const another = x => {
  value: x
}; // zwraca undefined

console.log(another(6));


