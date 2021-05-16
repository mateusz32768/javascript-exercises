const some_obj = {
  name: 'Ninja',
  say: function (who) {
    return `Siema ${who}, jestem ${this.name}`;
  },
}

console.log(some_obj.say('stary'));

const my_obj = {
  name: 'Guru programowania',
};

console.log(some_obj.say.call(my_obj, 'koleś'));
// console.log();
// console.log();
// console.log();
// console.log();