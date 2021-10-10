// 6.2.1 Literały obiektowe
const book = {
	title: 'JavaScript',
	'sub-title': 'Kompletny przewodnik',
	forWhom: 'dla każdego', // for jest słowem zarezerwowanym, więc chyba nie najlepszy pomysł

	author: {
		firstName: 'David',
		lastName: 'Flanagan',
	},
};

// 6.2.3. Prototypy
// Prototypem każdego literału obiektwego jest obiekt zawarty we właściwości
// Object.prototype 

console.log('Prototyp', Object.prototype);
console.log(book.__proto__);
console.log(book.__proto__ == Object.prototype);

// 6.2.4. Funkcja Object.create()

const books = Object.create(book);
 
console.log(books.author.firstName);
console.log(books.hasOwnProperty('author'));
console.log(book.hasOwnProperty('title'));
console.log(book.hasOwnProperty('author'));

console.log(Object.getPrototypeOf(books) === book);
