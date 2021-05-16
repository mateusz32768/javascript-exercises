const events = require('events');
const util = require('util');

function Pulser() {
  events.EventsEmiter.call(this);
}