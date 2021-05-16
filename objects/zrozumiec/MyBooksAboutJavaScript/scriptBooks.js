const books = [];

function addBook(title, author, edition, year, isEbook) {
  books.push({ title, author, edition, year, isEbook });
}

addBook('Zrozumieć JavaScript', 'Marijn Haverbeke', 'Helion', 2020, true);
addBook(
  'Programowanie zorientowane obiektowo w języku JavaScript',
  'Ved Antani, Stoyan Stefanov',
  'Helion',
  2018,
  true
);
addBook(
  'JavaScript. Tworzenie nowoczesnych aplikacji webowych',
  'Tomasz Sochacki',
  'Helion',
  2020,
  true
);
addBook(
  'JavaScript. Interaktywne aplikacje webowe',
  'Tomasz Sochacki',
  'Helion',
  2020,
  true
);

addBook(
  'JavaScript. Przewodnik dla absolutnie początkujących',
  'Kirupa Chinnathambi',
  'Helion',
  2017,
  true
);

addBook(
  'React 16. Framework dla profesjonalistów',
  'Adam Freeman',
  'Helion',
  2020,
  true
);

addBook(
  'Platforma Node.js. Przewodnik webdevelopera',
  'Helion',
  'David Herron',
  2017,
  true
);

addBook(
  'Tworzenie aplikacji internetowych z użyciem Node i Express. Korzystnie ze stosu JavaScript',
  'Ethan Brown',
  'Helion',
  2020,
  true
);

addBook(
  'Nowoczesne aplikacje internetowe. MongoDB, Express, AngularJS, Node.js',
  'Jeff Dickey',
  'Helion',
  2016,
  true
);

function displayBooks() {
  for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}. ${books[i].title}; rok wydania ${books[i].year}`);
  }
}

displayBooks();

//console.log(books);
