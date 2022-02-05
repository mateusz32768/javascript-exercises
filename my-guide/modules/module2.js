const util = require('util');
let A = 'another value A';
let B = 'another value B';
const m1 = require('./module1');

util.log(`A = ${A}; B = ${B} \n values = ${util.inspect(m1.values())}`);
