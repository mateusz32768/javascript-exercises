
// CO TO JEST HOISTING - CO DZIEJE SIĘ PO WYWOŁANIU KODU

// Interpreter czyta nasz kod od początku do końca, więc kolejność ma znaczenie, ale hoisting ten proces zaburza.

// Zanim kod zostanie wykonany, jest przetworzony. Interpreter przechodzi przez kod kilka razy (szuka błędów,
// wyszukuje deklaracji...).

// Hoisting — przeniesienie części deklaracji na początek zakresu.

// ZMIENNE

// console.log(typeNumber);
// console.log(typeString);
// console.log(typeBoolean);
// console.log(tablica);
// console.log(obiekt);
// console.log(funkcja);
// console.log(foo); // undefined

// foo();
// funkcja();

// dwie instrukcje: deklaracja i inicjalizacja (przypisanie wartości)
const typeNumber = 20;
let typeString = "tekst";
var typeBoolean = false;

var tablica = [];
let obiekt = {};
const funkcja = function() {
  console.log('Hello funkcja');
};

var foo = function() {
  console.log('Hello');
}

// foo();
// funkcja();

// Wartość przypisana do zmiennej nie ma znaczenia. Liczy się sposób deklaracji (const, let, var). Jeśli
// stworzyliśmy zmienną za pomocą var i próbujemy jej użyć, przed tym za nim ją zadeklarowaliśmy, to ona będzie
// istnieć, ale będzie miała przypisaną wartość undefined. Hoistingowi przy var podlega tylko deklaracja.

//Jeśli zadeklarowaliśmy zmienną za pomocą const lub let i próbujemy jej użyć wcześniej, to nawet nie będzie undefined
// tylko błąd. Zmienna "is not defined". Ponieważ const i let nie podlega hoistingowi.

/* --------------------------------- */


// FUNKCJA STWORZONA ZA POMOCĄ DEKLARACJI.
// Funkcja stworzona za pomocą deklaracji (a nie przypisania do zmiennej) podlega hoistingowi i może być wywołana
// nawet przed jej zadeklarowaniem.

// funkcjaNazwana ();

// console.log(funkcjaLet);
// console.log(funkcjaVar);

function funkcjaNazwana() {
 console.log("jestem");
}

// funkcjaConst () //błąd — nie jest zdefiniowane, bo zmienna const nie podlega hoistingowi

// console.log(funkcjaVar)
// funkcjaVar () // na tym etapie (przed stworzeniem) będzie zawierała undefined, więc tak naprawdę próbujemy tu zrobić
// coś takiego undefined ()


const funkcjaConst = function() {
 console.log("ok");
};
let funkcjaLet = function() { };

var funkcjaVar = function() { };


// Reasumująć hositingowi (przenoszeniu deklaracji na początek zakresu) podlegają funkcje i deklaracje zmiennych,
// ale tylko za pomocą var. Hoistingowi nie podlega przypisane wartości w zmiennych.

// Trzeba wiedzieć, ze hoisting istnieje, i niekonieczne trzeba to "wykorzystywać". Być może najlepiej go unikać (a
// więc nie używać var i deklaracji funkcji)
