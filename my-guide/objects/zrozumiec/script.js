const JOURNAL = require('./journal');

require('./journal');

function tableFor(event, journal) {
  const table = [0, 0, 0, 0];

  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) {
      index += 1;
    }
    if (entry.squirrel) {
      index += 2;
    }
    table[index] += 1;
  }

  return table;
}

console.log(tableFor('pizza', JOURNAL));

function journalEvents(journal) {
  const eventsTable = [];
  for (const entry of journal) {
    for (const event of entry.events) {
      if (!eventsTable.includes(event)) {
        eventsTable.push(event);
      }
    }
  }

  return eventsTable;
}

console.log(journalEvents(JOURNAL));

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(phi([76, 9, 4, 1]));

for (const event of journalEvents(JOURNAL)) {
  console.log(`${event}:  ${phi(tableFor(event, JOURNAL)).toFixed(4)}`);
}

console.log('************ Dane filtrowane ******************');

for (const event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL)).toFixed(2);
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(`${event}: ${correlation}`);
  }
}

for (const entry of JOURNAL) {
  if (
    entry.events.includes('orzeszki') &&
    !entry.events.includes('mycie zębów')
  ) {
    entry.events.push('orzeszki zęby');
  }
}

console.log('***********************************************');

console.log(JOURNAL);

console.log('***********************************************');

console.log(phi(tableFor('orzeszki zęby', JOURNAL)));
