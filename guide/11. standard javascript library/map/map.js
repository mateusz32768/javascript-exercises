/*
* Obiekt Map przechowuje pary klucz-wartość i zapamiętuje pierwotną kolejność wstawiania kluczy.
* Dowolna wartość (zarówno obiekty, jak i wartości pierwotne) może być użyta jako klucz lub wartość.
*/

const passwords = new Map([['wp', 'taurus1956'], ['cba', 'lupus1935']]);
const passwordDiscord = {'discord': 'giraffe2021'};

passwords.set('paypal', 'dog2010');
passwords.set('getin', 'cat2018');
passwords.set('discord', 'giraffe2021');

console.log(`1.`, passwords.size);
console.log(`2.`, passwords.get('paypal'));
console.log(`3.`, passwords.has('wp'));

const copy = new Map(passwords);

console.log(`4.`, copy);

console.log(`5. passwords:`)

for (const [key, value] of passwords) {
  console.log(`${key} => ${value}`);
}

console.log(`6. keys:`, [...passwords.keys()]);
console.log(`7. values: `, [...passwords.values()]);
console.log(`8. passwords.entries(): `, ...passwords.entries());

console.log(`9. passwords: `)
passwords.forEach((value, key) => {
  console.log(`${key} => ${value}`);
})
