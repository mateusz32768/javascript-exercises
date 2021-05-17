function myFunc(a, b, c) {
  return (a + b + c) / 3;
}

console.log(myFunc.toString());

// function myFunc(a, b, c) {
//   return (a + b + c) / 3;
// }

console.log(parseInt.toString());
//"function parseInt() { [native code] }"

const some_obj = {
  name: 'Ninja',
  job: 'Ochroniarz',
  say: function (who) {
    return `Sie ma ${who}, jestem ${this.name} i pracuję jako ${this.job}`;
  },
}

console.log(some_obj.say('Johny'));
// Sie ma Johny, jestem Ninja
const my_obj = {
  name: 'Guru programowania',
  job: 'Programista'
};

console.log(some_obj.say.call(my_obj, 'Johny'));
