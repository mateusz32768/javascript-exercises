const journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(
  ['praca', 'dotknięcie drzewa', 'pizza', 'bieganie', 'telewizja'],
  false
);
addEntry(
  ['praca', 'lody', 'kalafior', 'lasagne', 'dotknięcie drzewa', 'mycie zębów'],
  false
);
addEntry(['weekend', 'rower', 'przerwa', 'orzeszki ziemne', 'piwo'], true);

console.log(journal);
