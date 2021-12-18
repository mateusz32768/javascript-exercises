const persons = [
  { name: 'Marek', surname: 'Kowalski' },
]

const books = [
  {
    author: 'Henryk Sienkiewicz',
    title: 'W pustni i w puszczy',
    display() {
      console.log(`${this.author}, ${this.title}`);
    },
  },

  {
    author: 'Adam Mickiewicz',
    title: 'Pan Tadeusz',
    show() {
      console.log(`${this.author} napisał epopeję pod tytułem "${this.title}"`);
    }
  }
]


console.log(books[0].author);
books[0].display();  // element tablicy wywołuje metodę

console.log(books[1].author);
books[1].show();  // wyrażenie wywołujące funkcję (metodę)