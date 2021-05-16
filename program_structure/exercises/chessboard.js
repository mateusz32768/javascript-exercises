let size = prompt('Podaj wymiar szachownicy');

for (let j = 0; j < size; j++) {
  let field = ' ';
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
      field += '#';
    } else {
      field += ' ';
    }
  }
  if (j % 2 == 0) {
    console.log(field);
  } else {
    console.log(' ' + field);
  }
}
