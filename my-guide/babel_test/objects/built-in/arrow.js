// const greeter = {
//   default: 'Witaj, ',
//   greet: function (names) {
//     names.forEach(function (name) {
//       console.log(`${this.default} ${name}`);
//     });
//   },
// };

// Nie można odczytać właściwości 'default' wartości undefined

// console.log(greeter.greet(['świecie', 'kraju']));

const greeter = {
  default: 'Witaj',
  greet: function (names) {
    let that = this;
    names.forEach(function (name) {
      console.log(`${that.default} ${name}`);
    });
  }
};

console.log(greeter.greet(['świecie', 'kraju']));

