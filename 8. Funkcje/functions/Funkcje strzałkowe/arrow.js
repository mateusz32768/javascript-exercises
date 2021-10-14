const showAnyThings = (arg) => {
  console.log(`Konsola: ${arg}`);
  return arg;  // Nie można pominąć tego return
}

let msg = showAnyThings('Notebook');
console.log(msg);

// const showAnny = arg => {return arg;}
const showAnny = arg => arg;  // pomijamy słowo return
console.log(showAnny('Welcome'));


const whatThis = () => {
  // this to obiekt globalny - pochodzący z zakresu leksykalnego,
  // tzn. z tego w którym jest zdefiniowana funkcja strzałkowa
  console.log(this);

}

whatThis();
