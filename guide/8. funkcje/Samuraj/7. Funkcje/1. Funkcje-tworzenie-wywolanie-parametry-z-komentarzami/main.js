// FUNKCJE
// noinspection JSVoidFunctionReturnValueUsed

/*

Funkcje są obiektami (jak tablica), można je wywołać (jedyny obiekt, który można wywołać) - nazwaFunkcji(), coś
robią z danymi (efekt uboczny) lub coś zwracają (return). Są wielokrotnego użytku.

Można ich używać tam, gdzie innych obiektów (są first-class objects, czyli są pełnoprawnymi obiektami) np.
przypisać do zmiennych, jako argumentu w innej funkcji czy jako wartość
 zwracana z funkcji.

JAK STWORZYĆ FUNKCJE
 1. WYRAŻENIE FUNKCYJNE (ang. function expression)

    const nazwaFunkcji = function () {} ;

 */

const showMessage = function () {
  console.log("wywołałem funkcję showMessage")
}

showMessage()

/*

2. DEKLARACJA FUNKCJI (ang. function declaration):
   function nazwaFunkcji () {}

 Deklaracji funkcji jest hoistingowana i dlatego możliwe jest wywołanie funkcji przed jej deklaracją.
*/

showCourseName();

function showCourseName() {
  console.log('Programowanie w JS');
}

function addNumbers(x, y) {
  return x + y;
}

addNumbers(2, 4);

/*
3. KONSTRUKTOR (Function Constructor)
*/

const nazwaFunkcji = new Function ();
const textAlert = new Function("text", "alert(text);");

// textAlert('działa!')

// ostatni argument to ciało funkcji.


// W większych programach rekomenduje używanie pierwszej opcji, a więc wyrażenia funkcyjnego (bezpieczne const).
// 3. opcja nie używana


// 4. FUNKCJA STRZAŁKOWA, FUNKCJA ZE STRZAŁKĄ (ARROW FUNCTION, FLAT ARROW)

// const nazwaFunkcjiCoRobi = () => {};
const nameFunction = function () {}

// Funkcja strzałkowa ma inną składnię i trochę inne zachowania, zawsze jest anonimowa

// Szczególnie użyteczna dla prostych zadań

// const showMeTextMyArrowFunction = (text) => {
//   console.log(text)
// };

const showMeTextMyArrowFunction = txt => console.log(txt);

showMeTextMyArrowFunction("hej! z funkcji strzałkowej");


/* ---------------------------------------- */

// PRZYPISANIE FUNKCJI DO INNEJ ZMIENNEJ
// Funkcje są obiektami, a więc działają jak inne obiekty, jeśli chodzi o przypisanie
// (czyli przypisujemy referencje, obiekt jest ciągle jeden).

const showNewCourse = showCourseName;

showCourseName();
showNewCourse();
// to jest dokładnie ta sama funkcja (nie jej kopia)

/* ---------------------------------------- */

// WYWOŁYWANIE FUNKCJI (invoking)
// nazwa () - tak wywołujemy funkcje
// nazwa (argument1, argument2) - wywoła
// Stworzona funkcja, może być wywołana wielokrotnie (może też nie być wywołana nigdy)
// innych wartości czy obiektów niż funkcja wywołać się nie da.

/* ---------------------------------------- */

// ZWRACANIE WARTOŚCI Z FUNKCJI
// funkcja może coś robić i może coś zwracać.
// Domyślnie każda funkcja po wykonaniu zadania zwraca undefined
// Możemy to zmienić (i często to robimy) używając instrukcji return


// Przykład 1 - Funkcja, która wpływa na program (efekt uboczny), nic nie zwraca (formalnie zwraca undefined)

const divideBy2 = function (number) {
  console.log(number / 2);
}

const result1 = divideBy2(10);

console.log(result1);

let number = 0
const add = function () {
  number++;
  console.log(number);
}

// Przykład 2 - Funkcja, która tylko przetwarza dane (bez efektu ubocznego) i zwraca wartość
const divideBy3 = function (number) {
  return number / 3; //słowo kluczowe return
}

const result2 = divideBy3(20);

// Przykład 3 - Funkcja z efektem ubocznym i zwracająca wartość

const divideBy5 = function (number) {
  const result = number / 5
  console.log(result);
  return result;
}

const result3 = divideBy5(26);

// PARAMETRY I ARGUMENTY

// Parametr element składowy funkcji na etapie jej tworzenia. Nie trzeba ich umieszczać (funkcja nie musi mieć parametrów)

// Bez parametru
const showMyName = function () {
  console.log("Bartek");
}

// Z parametrem
// Parametr-pojecie używane dla określenia nazwy użytej przy tworzeniu funkcji
const showUserName = function (userName) {
  console.log("witaj " + userName);
}

// Argument-pojęcie użyte przy wywołaniu funkcji.
showUserName("Franciszek");

// Przykładowo w funkcji powyżej tworząc funkcję, ustawiamy jeden parametr.
// Przy wywołaniu w miejsce parametru
// podajemy argument, który pełni rolę wartości dla parametru.

// Jeśli nie podamy argumentu, to w jego miejsce zostanie wstawione undefined

// showUserName();

// Jeśli podamy więcej argumentów niż parametrów, to nie spowoduje to błędu
showUserName("Piotr", 200);

showUserName.length; //mówi ile argumentów oczekuje funkcja (czyli ile parametrów
// posiadała funkcja w momencie tworzenia)

showUserName();

// Mój kod

const func = param => {
  if(param === undefined) {
    return 0;
  } return param * param;
}

let product = func(5);

console.log(product);

product = func();

console.log(product);

const summa = (...items) => {
  let result = 0;
  items.forEach((item) => {
    result += item;
  });

  return result;
}

console.log(summa(3, 4, 5, 6));

