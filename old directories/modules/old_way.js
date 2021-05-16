const weekDay = (function () {
  const names = [
    'Sunday',
    'Moday',
    'Thuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    },
  };
})();

console.log(weekDay.name(weekDay.number('Sunday')));
console.log(weekDay.number('Wednesday'));
console.log(weekDay.name(5));
console.log(weekDay.name(11));

const x = 1;

// Pobranie danych (łańcucha kodu) i wykonanie ich jako części bieżącego kodu.

function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX('var x = 2'));
console.log(x);
