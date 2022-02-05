
// Operator rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy
//...nazwa (dowolna zgodnie z zasadami dla zmiennej)
// zwraca tablicę (arguments nie jest tablicą)

function showAllArguments(...items) { // items jest tablicą
 console.log(items);
 console.log(arguments);
 return items;
}
// showAllArguments("1", 2, 12, "ab", true, "Adam")

function addAllWords(...words) {
 let txt = "";
 for (let i = 0; i < words.length; i++) {
  txt += `${words[i]} `;
 }
// words.forEach(word => txt += `${word} `)
 console.log(txt);
//  console.log(words);
}

// addAllWords();
// addAllWords("ja", "ty", 2, "Gdańsk")

// dzięki operatorowi rest możemy zbierać pozostałe argumenty (które zostały umieszczone poza parametrami)

function showUsers(owner, ...others) {
 console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`)
}


// showUsers("Adrian");
// showUsers("Adrian", "Jadzia", "Staszek", "Henio"); 


/* ---------------------------------------- */

// METODY A FUNKCJE
// Metody to funkcje umieszczone w obiektach (poznamy w przyszłości).

const objectExample = {
 name: "Adam",
 showName: function() {
  console.log("Jan")
 },
 showAge() {
  console.log(30);
 }
}

// objectExample.showName();
// objectExample.showAge();

const showName = function() {
 console.log("Jan")
}

// showName();
