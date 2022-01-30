const monkey = {
  hair: true,
  feeds: 'banany'
}

function Human(name) {
  this.name = name;
}

Human.prototype = monkey;