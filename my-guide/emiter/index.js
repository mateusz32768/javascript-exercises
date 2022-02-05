// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('message', (msg) => console.log(`Wiadomość: ${msg}`));

// emitter.emit('message', 'Hello world!');

const Puller = require('./puller');

const puller = new Puller('http://api.examples.com');

function printData(data) {
  console.log(`Otrzymane dane: $${data.data} z adresu: ${data.url} `);
}

puller.on('data', printData);

puller.pull();