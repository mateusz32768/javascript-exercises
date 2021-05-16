typeof NaN; // 'number'
isNaN(NaN); // true
isNaN('test'); // true
isNaN('123'); // false
isNaN('123A'); // true
parseInt('123A'); // 123
Number('123A'); // NaN
Number('123'); // 123

Number.isNaN('test'); // false
