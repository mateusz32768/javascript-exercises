const sandwich = {
  bread: 'chleb tygrysi',
  meat: 'tuńczyk',
  cheese: 'szwajcarski',
  toppings: ['sałata', 'pomidor', 'musztarda'],
  ketchup: true,
};

const { bread, meat } = sandwich;

console.log(1, bread, meat);

let { cheese, ketchup } = sandwich;

console.log(2, cheese, ketchup);

let { toppings: elements } = sandwich;
console.log(3, elements);

let { toppings } = sandwich;
console.log(4, toppings);

let [, tomato] = toppings;
console.log(5, tomato);

let {
  toppings: [salat],
} = sandwich;
console.log(6, salat);

let {
  toppings: [, , mustard],
} = sandwich;
console.log(7, mustard);
