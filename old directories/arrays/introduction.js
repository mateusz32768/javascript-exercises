//TODO kolekcja książek do JavaScript
function Book(author, title, published, cover, description) {
  this.author = author;
  this.title = title;
  this.published = published;
  this.cover = cover;
  this.description = description;

  //TODO methods
}

const friends = [{ friend: 'Łukasz' }, { mother: 'Krystyna' }, { father: 'Jan' }];

const mother = friends[1];
console.log(mother.mother);
console.log(friends[1].mother);

const arrays = [[2, 3, 4], [4, 2, 1, ['Jan']]];

console.log(arrays[1][3][0]); //"Jan"
console.log(typeof arrays[1][3]); // "object"

console.log(typeof arrays[1][3][0]) // "string";
