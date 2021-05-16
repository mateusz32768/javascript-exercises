const EventEmitter = require('events');
const util = require('util');

function Puller(url) {
  EventEmitter.call(this);
  this.url = url;
}

Puller.prototype.pull = function () {
  const self = this;

  self.interval = setInterval(function () {});
};

util.inherits(Puller, EventEmitter);

module.exports = Puller;
