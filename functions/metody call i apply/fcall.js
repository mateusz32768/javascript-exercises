const some_obj = {
  name: 'Ninja',
  say: function (who) {
    let str = `Siema ${who} jestem ${this.name}`;
    return console.log(str);
  },
};

some_obj.say('stary');

const my_obj = {name: 'Guru programowania'};

some_obj.say.call(my_obj, 'Wojtek');

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
