let regex = /a+/gi; // każde wystąpienia litery a+, 
//globalnie niezważając na wielkość liter

const n = 'Ania';

console.log(n.replace(regex, 'ko'));
console.log(regex.test('kolejka'));

regex = /A+/g;

console.log(n.replace(regex, 'ko') + 'k');

const regexp = new RegExp('a+', 'ig');

