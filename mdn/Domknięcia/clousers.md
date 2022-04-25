# Domknięcia

Zamknięcie to połączenie funkcji powiązanej (zamkniętej) z odniesieniami do jej stanu otaczającego (środowiska
leksykalnego). Innymi słowy, zamknięcie daje dostęp do zakresu funkcji zewnętrznej z funkcji wewnętrznej. W JavaScript
domknięcia są tworzone za każdym razem, gdy tworzona jest funkcja, w momencie tworzenia funkcji.

## Zasięg leksykalny

```javascript
function init() {
  var name = 'Mozilla'; // name jest zmienną lokalną utworzoną przez funkcję init
  function displayName() {
    // displayName jest wewnętrzną (lokalną) funkcją, domknięciem
    console.log(name); // używa zmiennej zadeklarowanej w funkcji nadrzędnej
  }

  displayName();
}

init();
```

Jest to przykład zakresu leksykalnego, który opisuje, w jaki sposób parser rozwiązuje nazwy zmiennych, gdy funkcje są
zagnieżdżone. Słowo leksykalne odnosi się do faktu, że zakres leksykalny wykorzystuje lokalizację, w której zmienna jest
zadeklarowana w kodzie źródłowym, w celu określenia, gdzie ta zmienna jest dostępna. Funkcje zagnieżdżone mają dostęp do
zmiennych zadeklarowanych w ich zewnętrznym zakresie.

## Domknięcie

```javascript
function makeFunc() {
  var name = 'Mozilla';

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();

myFunc();
```

Wewnętrzna funkcja `displayName()` jest zwracana z funkcji zewnętrznej przed wykonaniem.

Zamknięcie to połączenie funkcji i środowiska leksykalnego, w którym funkcja została zadeklarowana. To środowisko składa
się ze wszystkich zmiennych lokalnych, które były w zakresie w momencie tworzenia zamknięcia. W tym przypadku `myFunc`
jest odwołaniem do instancji funkcji `displayName`, która jest tworzona po uruchomieniu `makeFunc`.
Wystąpienie `displayName`
utrzymuje odwołanie do swojego **środowiska leksykalnego**, w którym istnieje nazwa zmiennej. Z tego powodu, kiedy
myFunc jest wywoływana, nazwa zmiennej pozostaje dostępna do użycia, a "Mozilla" jest przekazywana do `console.log`.

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

W istocie `makeAdder` jest fabryką funkcji. Tworzy funkcje, które mogą dodać konkretną wartość do swojego argumentu. W
powyższym przykładzie fabryka funkcji tworzy dwie nowe funkcje — jedną, która dodaje pięć do swojego argumentu, i drugą,
która dodaje 10.

`add5` i `add10` to oba zamknięcia. Mają tę samą definicję treści funkcji, ale przechowują różne środowiska leksykalne.
W środowisku leksykalnym `add5` `x` wynosi `5`, podczas gdy w środowisku leksykalnym `add10` `x` wynosi `10`.

## Praktyczne domknięcia

Domknięcia są przydatne, ponieważ umożliwiają powiązanie danych (środowiska leksykalnego) z funkcją, która operuje na
tych danych. Ma to oczywiste podobieństwa do programowania obiektowego, w którym obiekty umożliwiają kojarzenie danych
(właściwości obiektu) z jedną lub większą liczbą metod.

W związku z tym możesz użyć zamknięcia wszędzie tam, gdzie normalnie mógłbyś użyć obiektu tylko jedną metodą.

Sytuacje, w których możesz chcieć to zrobić, są szczególnie częste w sieci. Większość kodu napisanego we front-endowym
JavaScript jest oparta na zdarzeniach. Definiujesz pewne zachowanie, a następnie dołączasz je do zdarzenia wyzwalanego
przez użytkownika (takiego jak kliknięcie lub naciśnięcie klawisza). Kod jest dołączany jako `callback` (pojedyncza
funkcja, która jest wykonywana w odpowiedzi na zdarzenie).

Załóżmy na przykład, że chcemy dodać przyciski do strony, aby dostosować rozmiar tekstu. Jednym ze sposobów na zrobienie
tego jest określenie rozmiaru czcionki elementu `html`, a następnie ustawienie rozmiaru innych elementów na stronie (
takich jak nagłówki) za pomocą względnej jednostki `rem`:

```css
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  font-family: Arial;
  background-color: #333;
  color: #fff
}

.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3.6rem;
  text-align: center;
  font-weight: normal;
}

h2 {
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
}

button {
  padding: 5px 15px;
  color: fuchsia;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
}

.container-for-btns {
  margin-top: 50px;
}

```

```javascript
function makeSize(size) {
  switch (size) {
    case 'small':
      size = 50;
      break;
    case 'medicore':
      size = 62.5;
      break;
    case 'big':
      size = 100;
      break;
    default:
      size = 62.5;
  }

  return function() {
    const root = document.querySelector(':root');
    root.style.fontSize = `${size}%`;
  };
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => makeSize(e.target.id)())
);

```

```html

<button id="small">small</button>
<button id="small">small</button>
<button id="medicore">medicore</button>
<button id="big">big</button>
```

Uruchom kod za pomocą [JSFiddle](https://jsfiddle.net/marco_collander/s0htj1q3/78/)

## https://jsfiddle.net/marco_collander/s0htj1q3/78/

## Emulacja prywatnych metod z domknięciami

Języki takie jak Java umożliwiają deklarowanie metod jako prywatnych, co oznacza, że mogą być wywoływane tylko przez
inne metody w tej samej klasie.

JavaScript wcześniej nie miał natywnego sposobu
deklarowania [metod prywatnych](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#private_methods)
, ale możliwe było emulowanie metod prywatnych przy użyciu domknięć. Metody prywatne są przydatne nie tylko do
ograniczania dostępu do kodu. Zapewniają również potężny sposób zarządzania globalną przestrzenią nazw.

Poniższy kod ilustruje, jak używać zamknięć do definiowania funkcji publicznych, które mogą uzyskiwać dostęp do funkcji
i zmiennych prywatnych. Zauważ, że te zamknięcia są zgodne
z [wzorcem projektowania modułu](https://www.google.com/search?q=javascript+module+pattern)

```javascript
var counter = (function() {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.

```

Wspólne środowisko leksykalne jest tworzone w treści funkcji anonimowej, która jest wykonywana, gdy tylko zostanie
zdefiniowana (znana również jako IIFE). Środowisko leksykalne zawiera dwa prywatne elementy: zmienną o nazwie
privateCounter i funkcję o nazwie changeBy. Nie możesz uzyskać dostępu do żadnego z tych prywatnych członków spoza
funkcji anonimowej. Zamiast tego możesz uzyskać do nich dostęp za pomocą trzech funkcji publicznych, które są zwracane z
anonimowego opakowania.

Te trzy funkcje publiczne są domknięciami, które dzielą to samo środowisko leksykalne. Dzięki zakresowi leksykalnemu
JavaScript, każdy z nich ma dostęp do zmiennej privateCounter i funkcji changeBy.

```javascript
var makeCounter = function() {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value());  // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.

```

Zwróć uwagę, jak te dwa liczniki zachowują swoją niezależność od siebie. Każde zamknięcie odwołuje się do innej wersji
zmiennej privateCounter poprzez własne zamknięcie. Za każdym razem, gdy jeden z liczników jest wywoływany, jego
środowisko leksykalne zmienia się poprzez zmianę wartości tej zmiennej. Zmiany wartości zmiennej w jednym zamknięciu nie
wpływają na wartość w drugim zamknięciu.

> Uwaga: Używanie domknięć w ten sposób zapewnia korzyści, które zwykle są kojarzone z programowaniem obiektowym.
> W szczególności ukrywanie i hermetyzacja danych.

## Zamknięcie łańcucha zakresu

Każde zamknięcie ma trzy zakresy:

* Zakres lokalny (zakres własny)
* Zakres funkcji zewnętrznych
* Global Scope

Częstym błędem jest nie zdawanie sobie sprawy, że w przypadku, gdy funkcja zewnętrzna sama jest funkcją zagnieżdżoną,
dostęp do zakresu funkcji zewnętrznej obejmuje zakres obejmujący funkcję zewnętrzną — skutecznie tworząc łańcuch
zakresów funkcji. Aby zademonstrować, rozważ poniższy przykładowy kod.

```javascript
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20

```

