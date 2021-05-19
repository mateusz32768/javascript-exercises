# Wprowadzenie do języka JavaScript

JavaScript jest językiem programowania sieci WWW. Jest stosowany w ogromnej większości stron internetowych, a wszystkie
nowoczesne przeglądarki, wykorzystywane na komputerach, tabletach i smartfonach, posiadają interpreter tego języka.
Wszystko to sprawia, że <u>JavaScript jest najbardziej rozpowszechnionym językiem w historii programowania</u>. W
ostatniej dekadzie, od kiedy pojawiła się platforma Node.js, JavaScript jest stosowany nie tylko w przeglądarkach,
ponieważ niebywały sukces tej platformy sprawił, że <u>najwięcej programistów używa obecnie tego właśnie języka</u>.

JavaScript jest wysokopoziomowym, dynamicznym, interpretowanym językiem, przygotowanym do obiektowego i funkcjonalnego
kodowania. Typy zmiennych nie są w nim określone. Jego składnia luźno nawiązuje do języka Java, ale oba języki nie są ze
sobą powiązane. Stosowane w nim pierwszoklasowe funkcje wywodzą się z języka Scheme, a dziedziczenie prototypów z mało
znanego języka Self.

Język ten, oprócz podobnej składni, nie ma nic wspólnego z Javą. Już dawno wyrósł ze swoich skryptowych korzeni i stał
się uniwersalnym, wydajnym językiem ogólnego przeznaczenia, wykorzystywanym w poważnych projektach informatycznych
obejmujących obszerny kod.

Każdy język, aby można było go używać, musi posiadać platformę, czyli standardową bibliotekę, umożliwiającą kodowanie
podstawowych operacji, takich jak pobieranie i zwracanie danych.

Rdzeń języka JavaScript definiuje podstawowy interfejs API przeznaczony do wykonywania operacji na liczbach, testach,
tablicach, zbiorach, mapach itp., ale nie obejmuje żadnych funkcjonalności związanych z pobieraniem i zwracaniem danych.
Za tego rodzaju operacje (jak również realizację bardziej zaawansowanych funkcjonalności, na przykład obsługę sieci,
dysków i grafiki) jest odpowiedzialne „środowisko gospodarza”, w którym stosowany jest JavaScript.

Od początku takim środowiskiem była przeglądarka, która do dziś jest najczęściej stosowanym środowiskiem uruchomieniowym
kodu napisanego w JavaScripcie.

Poprzez przeglądarkę kod odbiera dane od użytkownika przekazywane za pomocą myszy i klawiatury, a od serwera — za pomocą
zapytań HTTP. Zwracanie danych polega na wyświetlaniu informacji zakodowanych w językach HTML i CSS.

**JavaScript — nazwy, wersje i tryby**
> Język JavaScript powstał w firmie Netscape. Nazwa „JavaScript” jest zastrzeżonym przez Sun Microsystems
> (dzisiaj Oracle) znakiem handlowym, reprezentującym implementację stosowaną w przeglądarce Netscape (dzisiaj Mozilla).
>
> Autorzy przekazali specyfikację języka stowarzyszeniu ECMA (ang. *European Computer Manufacturers Association*,
> Europejskie Stowarzyszenie Producentów Komputerów) w celu jej standaryzacji, ale z powodu problemów ze znakiem
> handlowym otrzymał nazwę ECMAScript (nieoficjalnie JavaScript).
>
> W tym opracowaniu nazwa ECMAScript lub skrót ES oznacza standard języka i jego wersje.
>
> W drugiej dekadzie XXI wieku wszystkie przeglądarki obsługiwały głównie wersję nr 5 języka ECMAScript. W tym
> opracowaniu stanowi ona wzorzec kompatybilności. W 2015 r. pojawiła się wersja ES6 zawierająca ważne nowe
> funkcjonalności, m.in. klasy i moduły, dzięki którym JavaScript przekształcił się ze zwykłego języka skryptowego w
> poważny język programowania, przeznaczony do wszelkich zastosowań na szeroką skalę. Kadencja wersji ES6 trwała niecały
> rok, a kolejne wersje są oznaczane rokiem wydania, tj. ES2016, ES2017, ES2018, ES2019 i ES2020.
>
> Ze względu na konieczność zachowania wstecznej kompatybilności, nie można usunąć przestarzałych
> funkcjonalności, również tych obarczonych błędami. Począwszy od wersji ES5, kod można pisać w tzw. **ścisłym
> trybie** JavaScript, wolnym od wielu wcześniejszych błędów. Wymagane jest w tym celu użycie dyrektywy `use strict`
> opisanej w specyfikacji w sekcji §5.6.3.
>
> W wersjach ES6 i nowszych samo użycie nowych funkcjonalności powoduje niejawne zastosowanie trybu ścisłego.
> Na przykład wpisanie słowa kluczowego class lub zdefiniowanie modułu sprawia, że kod jest automatycznie przełączany
> w tryb ścisły i nie można w nim stosować starych, wadliwych funkcjonalności. W niniejszej opracowaniu opisane są te
> funkcjonalności z wyraźnym zaznaczeniem, że nie są dostępne w trybie ścisłym.

W 2010 r. pojawiło się nowe środowisko gospodarza — **platforma Node**. Od tamtego czasu JavaScript nie jest już
ograniczony do interfejsów API oferowanych przez przeglądarkę, ponieważ nowa platforma daje mu dostęp do całego systemu
operacyjnego, umożliwiając zapisywanie i odczytywanie plików, wysyłanie i odbieranie danych przez sieć, jak również
wysyłanie i obieranie zapytań HTTP. **Node** jest popularną platformą wykorzystywaną do implementowania serwerów WWW,
jak również wygodnego tworzenia prostych skryptów narzędziowych stanowiących alternatywę dla skryptów powłoki.

**Nauka nowego języka programowania nie jest procesem liniowym, więc jego opis też taki nie jest**.

## Czym jest JavaScript?

Z technicznego punktu widzenia JavaScript jest obiektowym językiem skryptowym o luźnej kontroli typów.

JavaScript jest językiem **obiektowym**, a nie proceduralnym. Większość zmiennych, z którymi mamy do czynienia, to tak
naprawdę obiekty.
> Obiekt to specjalna zmienna mająca w swym wnętrzu inne zmienne nazywane **właściwościami**, a także
> funkcje nazywane **metodami**. Właściwości i metody nazywa się ogólnie **elementami składowymi**.

Poniższy kod definiuje w języku JavaScript ciąg znaków, czyli dowolny tekst ujęty w apostrofy:

```javascript
let name = 'Zenon Marek Raubuć';
```

Zmienna `name` jest w istocie obiektem typu `String` i jako taka ma właściwości (np. `length') i metody
(np. substring(), toUpperCase()), do których odwołujemy się za pomocą **notacji kropkowej**.

Aby wykorzystać funkcję dla zmiennej w kodzie proceduralnym, trzeba tę zmienną przekazać do funkcji w momencie jej
wywołania.

Ponieważ name to obiekt typu String, automatycznie ma właściwość o nazwie length, która odpowiada liczbie znaków tekstu.

```javascript
let name = 'Zenon Marek Raubuć';

const spaces = [];

for (let i = 0; i < name.length; i++) {
  if (name[i] === ' ') {
    spaces.push(true);
  }
}

console.log(`Twoje nazwisko ma ${name.length - spaces.length} liter`);
```

Z notacją kropkową można tworzyć **łańcuch wywołań**, zapewniając dostęp do zagnieżdżonych właściwości i metod:

```
pewienObiekt.pewnaWłaściwość.pewnaMetoda()
```

W języku JavaScript w zasadzie nawet funkcje i tablice są obiektami! Z drugiej strony JavaScript to język obiektowy inny
od wszystkich, bo bazujący na **prototypach** a nie na klasach, mimo iż od wersji E6 możemy posługiwać się klasami. To
stosunkowo rzadko spotykany rodzaj systemu obiektowego, który ma duży wpływ na sposób przeprowadzania operacji na
obiektach, w szczególności tych bardziej zaawansowanych.

> **UWAGA:** W wielu językach obiektowych, w tym również w języku JavaScript przyjęto, że każdy wyraz w nazwach zmiennych i funkcji jest pisany od wielkiej litery (poza pierwszym), czyli: `pewienObiekt` i `pewnaMetoda()`, a nie
> `pewien_obiekt` i` `pewna_metoda()`.


**Luźna kontrola typów** oznacza, że zmienne i dane mogą być łatwo konwertowane z jednego formatu na drugi. Na przykład
można zdefiniować liczbę, a następnie skonwertować ją na ciąg znaków.

```javascript
let balance = 5432.98;
balance += ' zł'; // => '5432.98 zł'
```

W językach z **silną kontrolą typów** utworzenie zmiennej typu `balance` musiałoby zostać poprzedzone określeniem jej
typu:

```c
int balance = 5432.98
```

Próba zamiany liczby na ciąg znaków (jak w przedstawionym wcześniej kodzie) spowoduje zgłoszenie błędu.

JavaScript to język o **dynamicznej obsłudze typów**, gdyż konwersja następuje w nim w sposób zautomatyzowany, jak w
powyższym kodzie.

Określenie język skryptowy oznacza, że kod JavaScript jest wykonywany przez inny program komputerowy. Instrukcje
zapisane w języku C są najpierw kompilowane, a następnie uruchamia się sam wynikowy kod (bez użycia dodatkowych
programów). Kod JavaScript może być np. uruchamiany w przeglądarce internetowej ze wbudowanym interpreterem języka
wykonującego wszystkie wskazane instrukcje.

## Poznawanie JavaScriptu

Aby testować kod JavaScript, potrzebny jest interpreter. Kilka wierszy kodu najprościej przetestujesz:

1. W narzędziach programistycznych zawartych w każdej nowoczesnej przeglądarce (F12, Ctrl+Shift+I, zakładka Konsola,
   konsolę można wydzielić jako osobne okno). To tzw. narzędzia deweloperskie (DevTools). Każdorazowe wciśnięcie
   klawisza Enter zatwierdza wprowadzone polecenie. Kod wielolinijkowy wprowadzimy, przechodząc do następnych linii, np.
   za pomocą kombinacji klawiszy Shift+Enter.

2. W środowisku Node. W terminalu wpisujemy polecenie **node**, aby rozpocząć interaktywną sesję.

## Hello, world!

Konsola deweloperska jest stosowana do sprawdzania prostych funkcjonalności, debugowania kodu aplikacji itp.

Często poleca się edytor kodu taki jak Visual Studio Code. Jako ciekawostkę można przytoczyć fakt, że aplikacja Visual
Studio Code została napisana właśnie w JavaScript jako aplikacja desktopowa, wykorzystująca narzędzie Electron.js.
Edytor ten jest często wybierany przez programistów JavaScript również do tworzenia aplikacji komercyjnych. Istnieje do
niego wiele dodatków wspomagających pracę z popularnymi frameworkami jak Angular, React itp.

Napisany kod w edytorze kodu można kopiować i wklejać do konsoli przeglądarki lub terminala z otwartą sesją Node. Można
też zapisywać kod w pliku (któremu nadaje się rozszerzenie .js) i uruchamiać w środowisku Node:

```
$ node plik.js
```

Node.js jest środowiskiem umożliwiającym uruchamianie skryptów napisanych w JavaScript; może być ono zainstalowane np.
na serwerze (pozwalając na wykonanie tzw. back-endu).

Wraz ze środowiskiem Node.js otrzymujemy również aplikację konsolową npm. Jest to tzw. menadżer pakietów, czyli skryptów
napisanych w JavaScript (choć nie tylko), które mogą być opublikowane jako oprogramowanie open-source i jako takie są
dostępne dla każdego. Na stronie `npmjs.com` znajduje się wyszukiwarka, pozwalająca na znalezienie różnego rodzaju
pakietów. W pracy zawodowej praktycznie każdego dnia będziesz korzystał z npm nie tylko do instalowania różnych skryptów
w celu ich wykorzystania w aplikacji, ale również do uruchamiania własnych skryptów.

Możesz również wskazywać konkretne ścieżki dostępowe, np.:

```
node ./scripts/script.js
```

W celu uruchomienia skryptu znajdującego się w folderze scripts, który jest podkatalogiem bieżącego folderu aplikacji.

# Struktura leksykalna

Struktura leksykalna języka programowania to zestaw podstawowych zasad pisania kodu w tym języku. Jest to niskopoziomowa
składnia specyfikująca nazwy zmiennych, znaki komentarza, sposób oddzielania instrukcji od tekstu itp.

## Tekst programu

JavaScript jest językiem, w którym istotna jest wielkość liter.

W JavaScripcie spacje umieszczane pomiędzy tokenami kodu są pomijane. W większości przypadków pomijane są również
podziały wierszy. Dzięki swobodzie stosowania spacji, wcięć i podziałów wierszy można formatować kod w czytelny i spójny
sposób.

Białymi znakami, oprócz zwykłej spacji (\u0020), są również tabulator oraz niektóre znaki kontrolne ASCII i Unicode.
Podziałem wiersza może być znak nowego wiersza, powrót karetki (ang. carriage return) oraz para znaków powrót
karetki/przejście do następnego wiersza (ang. line feed).

## Komentarze

Stosowane są dwa rodzaje komentarzy:

1. Tekst znajdujący się od znaków `//` do końca wiersza jest traktowany jako komentarz i pomijany.
2. Komentarzem jest tekst umieszczony pomiędzy parami znaków /* i */.

Komentarzy nie można zagnieżdżać.

```javascript
// Jednowierszowy komentarz.
/* To również jest komentarz. */ // A to jest inny komentarz.
/*
* To jest komentarz wielowierszowy. Dodatkowy znak * na początku
* nie jest wymagany, ale dzięki niemu komentarz ładnie wygląda.
*/
```

## Literały

Literał to dane umieszczone bezpośrednio w programie.

```javascript
12 // Liczba dwanaście.
1.2 // Liczba jeden i dwie dziesiąte.
"Witaj, świecie!" // Ciąg znaków.
'Cześć' // Inny ciąg znaków.
true // Wartość logiczna.
false // Druga wartość logiczna.
null // Brak obiektu.
```

## Identyfikatory i zarezerwowane słowa

**Identyfikator** to po prostu nazwa.

W języku JavaScript identyfikatorami są:

* nazwy stałych,
* zmiennych,
* właściwości,
* funkcji,
* klas
* etykiet w pewnego rodzaju pętlach.

Zasady nadawania nazw:

1. Pierwszym znakiem identyfikatora musi być litera, symbol podkreślenia (_) lub dolara ($).
2. Po nim mogą następować litery, cyfry, symbole podkreślenia i dolara.
3. Pierwszym znakiem nie może być cyfra. Dzięki temu ograniczeniu można łatwo odróżniać identyfikatory od liczb.

Poniższe przykłady są poprawnymi identyfikatorami:

```javascript
i
nazwa_mojej_zmiennej
v13
_dummy
$str
```

### Zarezerwowane słowa

Najlepiej jest unikać stosowania wszelkich zarezerwowanych słów w charakterze identyfikatorów, z wyjątkiem `from`, `set`
i `target`, które są bezpieczne i powszechnie używane.

```
as  const  export  get  null  target  void
async  continue  extends  if  of  this  while
await  debugger  false  import  return  throw  with
break  efault  finally  in  set  true  yield
case  delete  for  instanceof  static  try
catch  do  from  let  super  typeof
class  else  function  new  switch  var
```

Te słowa też są zarezerwowane, gdyż mogą się pojawić w przyszłych wersjach standardu:

```
enum  implements  interface  package  private  protected  public
```

Ze względów historycznych nie można w pewnych przypadkach stosować jako identyfikatorów słów
`arguments` i `eval`. Dlatego najlepiej w ogóle ich nie używać.

## Unicode

Kod JavaScript składa się ze znaków Unicode. W identyfikatorach można stosować litery, cyfry i ideogramy Unicode
(ale nie symbole emoji). Nazwami stałych i zmiennych mogą być symbole matematyczne i słowa z innych języków niż
angielski. Jednak aby kod był przenośny i łatwy w edytowaniu przyjęto programistyczną konwencję stosowania w
identyfikatorach nazw angielski lub stosowania tylko i wyłącznie znaków ASCII.

### Sekwencje ucieczki Unicode

**Sekwencje ucieczki** (ang. *escape sequence*) umożliwiające kodowanie znaków Unicode wyłącznie za pomocą znaków ASCII.
Sekwencja ucieczki składa się ze znaków `\u`:

* oraz następujących po nich dokładnie czterech cyfr szesnastkowych (dopuszczalne są małe i wielkie litery A – F).
* lub od jednej do sześciu cyfr szesnastkowych zamkniętych w nawiasach klamrowych.

Sekwencje ucieczki można stosować:

* w literałach znakowych,
* literałach wyrażeń regularnych
* identyfikatorach

Znakowi é opowiada sekwencja ucieczki `\u00E`. Sposoby użycia nazwy zmiennej zawierającej ten znak:

```javascript
let café = 12 // nazwa zmiennej ze znakiem Unicode
caf\u00e9 // odwołanie do zmiennej
caf\u{E9} // inna postać tej samej sekwencji ucieczki
```

Zapis z nawiasami klamrowymi został wprowadzony w wersji ES6, aby można było stosować znaki Unicode zakodowane za pomocą
więcej niż 16 bitów, na przykład emoji:

```javascript
console.log('\u{1f600}')
```

Sekwencje ucieczki można również stosować w komentarzach. Ponieważ komentarze są pomijane, są one interpretowane jak
znaki ASCII, a nie Unicode.

### Normalizacja Unicode

<!--TODO -->

## Opcjonalne średniki

W JS można nie stosować średników, jednakże zalecam dla poprawy czytelności kodu stosowanie średników, aby oznaczać
koniec instrukcji. Poza tym nie stosując średników, należy uwzględnić kilka niausów z tym związanych.

<!-- TODO -->


W JavaScripcie nie trzeba stosować średnika, jeżeli poszczególne instrukcje są umieszczone w osobnych wierszach. Nie
trzeba go również umieszczać na końcu programu ani w miejscu, w którym następnym tokenem jest zamykający nawias
klamrowy `(})`.

W JavaScripcie można przyjąć dwa style odnośnie do średników:

1. Umieszczamy średniki, aby oznaczyć koniec instrukcji.
2. Pomijanie średników wszędzie, gdzie jest to dopuszczalne, i stosowaniu ich tylko w sytuacjach, w których są wymagane.

# Typy, wartości i zmienne

Programy komputerowe wykonują operacje na wartościach, np. na liczbie 3,14 lub ciągu znakowym "Witaj świecie!". Jeśli w
programie trzeba przechować wartość w celu jej póżniejszego wykorzystania , przypisuje się ją do zmiennej.

Do fundamentalnych cech każdego języka programowania należą:

1. Zestaw dostępnych typów danych, czyli rodzaje reprezentowanych i przetwarzanych wartości.
2. Funkcjonowanie zmiennych.

## Informację ogólne i definicje

W JS istnieją dwie kategorie typów danych:

1. Prymitywne, które obejmują:

* liczby
* teksty (inaczej ciągi znaków)
* wartości logiczne
* wartości specjalne:
  * null
  * undefined

2. Obiektowe
3. Typ specjalny:

* Symbol — umożliwiający definiowanie rozszerzeń języka bez naruszania wstecznej kompatybilności ze starszymi wersjami.

W języku JS każda wartość inna niż liczba, ciąg znaków, wartość logiczna, symbol, null i undefined jest **obiektem**
Obiekt jest nieuporządkowaną kolekcją **właściwości** posiadających nazwy i wartości (prymitywne lub obiektowe).
Natomiast uporządkowaną kolekcję ponumerowanych wartości nazywamy **tablicą**, która jest obiektem zawierającym
specjalne, wbudowane funkcjonalności.

<!--TODO-->

## Liczby

<!--TODO-->

Podstawowy typ `Number` służy do reprezentowania liczb całkowitych i przybliżania liczb rzeczywistych. Liczby w
JavaScripcie są zapisywane w 64-bitowym formacie zdefiniowanym w normie IEEE 754. Za jego pomocą można wyrażać liczby od
najmniejszych ±5×10<sup>−324</sup> do największych ±1,7976931348623157×10<sup>308</sup>.

Liczba umieszczona bezpośrednio w kodzie JavaScript nosi nazwę **literału liczbowego**.

Typ liczbowy służy do reprezentacji liczb, przy czym nie ma występującego w klasycznych językach programowania
rozróżnienia na typy całkowitoliczbowe i rzeczywiste (zmiennopozycyjne).

Liczby zapisywane są za pomocą literałów (stałych napisowych, z ang. *string constant* , *literal constant*) liczbowych,
czyli ciągów znaków składających się na liczbę, np. 24 (umieszczony w kodzie skryptu tekst 24 to dwa znaki, dwójka i
czwórka, które razem stanowią literał — stałą napisową — interpretowany jako liczba 24).

Obowiązują przy tym następujące zasady.

* Jeżeli ciąg cyfr nie jest poprzedzony żadnym znakiem lub jest poprzedzony znakiem +, reprezentuje wartość dodatnią,
  jeżeli natomiast jest poprzedzony znakiem –, reprezentuje wartość ujemną.
* Jeżeli literał rozpoczyna się od cyfry 0, jest traktowany jako wartość ósemkowa.
* Jeżeli literał rozpoczyna się od ciągu znaków 0x, jest traktowany jako wartość szesnastkowa (heksadecymalna). W
  zapisie wartości szesnastkowych mogą być wykorzystywane zarówno małe, jak i wielkie litery alfabetu, od A do F.
* Literały mogą być zapisywane w notacji wykładniczej, w postaci X.YeZ, gdzie X to część całkowita, Y — część
  dziesiętna, natomiast Z to wykładnik potęgi liczby 10. Zapis taki oznacza to samo, co X.Y * 10<sup>Z</sup>.

Przykłady literałów:

```javascript
123 // dodatnia całkowita wartość dziesiętna 123 
- 123 // ujemna całkowita wartość dziesiętna -123
012 // dodatnia całkowita wartość ósemkowa równa 10 w systemie dziesiętnym 
- 024 // ujemna całkowita wartość ósemkowa równa -20 w systemie dziesiętnym 
0xFF // dodatnia całkowita wartość szesnastkowa = 255 
- 0x0f//ujemna całk. wartość szes. = -15 
2.12 //  dodatnia wartość rzeczywista = 2.12 
- 3.14 // ujemna wartość rzeczywista = -3.14 
4.3e3 // dodatnia wartość rzeczywista = 4300 
2.3e-3 // dodatnia wartość rzeczywista = 0.0023
```

Liczby całkowite i zmiennoprzecinkowe w JS są typu "number".

Z typem "number" jest skojarzona wartość NaN (Not a Number), która reprezentuje wartość, która nie ma sensu.

Jeśli zastosujemy operator `typeof` na wartości lub zmiennej przechowującej liczbę całkowitą, lub zmiennoprzecinkową to
zwróci nam wartość "number".

W języku JS do przechowywania pojedynczych wartości liczbowych używana jest stała liczba 64 bitów, czyli możemy
reprezentować 2 do 64 różnych liczb, czyli 18 kwintylionów (18 z osiemnastoma zerami). Przepełnienie, czyli próba
zapisania liczby przekraczającej rozmiarem możliwości określonej ilości bitów jest mało prawdopodobne. Za pomocą tych
bitów musimy też reprezentować liczby ujemne oraz liczby niecałkowite. Toteż jeden bit musi wskazywać znak liczby, a
nie, które bity muszą przechowywać informację o położeniu punktu dziesiętnego. Z tego powodu największa liczba
całkowita, jaką można zapisać, należy do przedziału 9 kwadrylionów (15 zer).

Obliczenia na liczbach całkowitych są dokładne, a na liczbach zmiennoprzecinkowych są obarczone błędami.

### Literały całkowite

W języku JavaScript liczby dziesiętne zapisuje się w postaci sekwencji cyfr, na przykład:

```javascript
0
3
100000
```

### Liczby ósemkowe i szesnastkowe

Jeśli liczba zaczyna się cyfrą 0o, jest uznawana za ósemkową, jeśli od 0x za szesnastkową. ES6 zapewnia prefiks `0o` (
lub 0O) do reprezentowania liczb ósemkowych.

```javascript
console.log(0o776) // 510
```

Literał w postaci liczby szesnastkowej składa się ze znaków 0x lub 0X i następujących po nich cyfr szesnastkowych. Cyfra
szesnastkowa jest zwykłą cyfrą z zakresu od 0 do 9 lub literą z zakresu od a (lub A) do f (F) reprezentującą liczbę z
zakresu od 10 do 15. Poniżej są przedstawione przykładowe literały szesnastkowe:

```javascript
0xff // => 255 = 15*6 + 15
```

### Literały binarne

Z binarną reprezentacji liczby całkowitej możemy skorzystać na dwa sposoby:

```javascript
parseInt('111', 2) // 7
0b111 // 7 (es6) dostępny jest też prefiks OB
```

### Literały wykładnicze

Zapis 2e+3 oznacza, że należy przesunąć kropkę dziesiętną (w tradycyjnym zapisie w języku polskim jest to przecinek)
przy liczbie 2 w prawo o 3 pozycje. Zapis 2e - 3 oznaczałby, że należy przesunąć kropkę w lewo.

```javascript
typeof 2.7e-5 // 'number'
```

### Literały zmiennoprzecinkowe

Do zapisywania literałów zmiennoprzecinkowych wykorzystuje się tradycyjną składnię liczb rzeczywistych, obejmującą część
całkowitą, następujący po niej symbol dziesiętny i część ułamkową.

> **Separatory w literałach liczbowych**
>
> Aby poprawić czytelność długiego literału liczbowego, można umieścić w nim znaki podkreślenia
> rozdzielające grupy cyfr, na przykład:

```javascript
let bilion = 1_000_000_000; // separator tysięcy
let bytes = 0x89_AB_CD_EF; // separator bajtów
let bits = 0b0001_1101_0111; // półbajtów
let fraction = 0.123_456_789 // zastosowanie  separatora w części ułamkowej
```

### Działania arytmetyczne

Oprócz podstawowych operatorów arytmetycznych dostępne są bardziej zaawansowane operatory matematyczne. Są to funkcje i
stałe zdefiniowane jako właściwości obiektu Math:

```javascript
Math.pow(2, 53) // => 9007199254740992: liczba 2 podniesiona do potęgi 53.
Math.round(.6) // => 1.0: zaokrąglenie do najbliższej liczby całkowitej.
Math.ceil(.6) // => 1.0: zaokrąglenie w górę do najbliższej liczby całkowitej.
Math.floor(.6) // => 0.0: zaokrąglenie w dół do najbliższej liczby całkowitej.
Math.abs(-5) // => 5: wartość bezwzględna.
Math.max(x, y, z) // Wybranie największej wartości.

Math.min(x, y, z) // Wybranie najmniejszej wartości.
Math.random() // Liczba pseudolosowa z zakresu 0 <= x < 1.0.
Math.PI // π: stosunek obwodu do średnicy koła.
Math.E // e: podstawa logarytmu naturalnego.
Math.sqrt(3) // => 3**0.5: pierwiastek kwadratowy liczby 3.
Math.pow(3, 1 / 3) // => 3**(1/3): pierwiastek sześcienny liczby 3.
Math.sin(0) // Funkcja trygonometryczna (są również Math.cos, Math.atan i inne funkcje).
Math.log(10) // Logarytm naturalny z 10.
Math.log(100) / Math.LN10 // Logarytm liczby 100 przy podstawie 10.
Math.log(512) / Math.LN2 // Logarytm liczby 512 przy podstawie 2.
Math.exp(3) // Sześcian stałej e.
```

Począwszy od wersji ES6 obiekt Math, zawiera jeszcze więcej funkcji:

```javascript
Math.cbrt(27) // => 3: pierwiastek sześcienny.
Math.hypot(3, 4) // => 5: pierwiastek kwadratowy sumy kwadratów argumentów.
Math.log10(100) // => 2: logarytm przy podstawie 10.
Math.log2(1024) // => 10: logarytm przy podstawie 2.
Math.log1p(x) // Logarytm naturalny (1+x); dokładny w przypadku bardzo małych wartości x.
Math.expm1(x) // Math.exp(x)–1; odwrotność Math.log1p().
Math.sign(x) // –1, 0 lub 1, jeżeli argument jest, odpowiednio, mniejszy, równy lub większy od zera.
Math.imul(2, 3) // => 6: zoptymalizowane mnożenie 32-bitowych liczb całkowitych.
Math.clz32(0xf) // => 28: liczba wiodących zerowych bitów liczby całkowitej 32-bitowej.
Math.trunc(3.9) // => 3: zamiana na liczbę całkowitą poprzez usunięcie części ułamkowej.
Math.fround(x) // Zaokrąglenie do najbliższej 32-bitowej liczby zmiennoprzecinkowej.
Math.sinh(x) // Sinus hiperboliczny (są również Math.cosh(), Math.tanh() i inne funkcje).
Math.asinh(x) // Arcus sinus hiperboliczny (są również Math.acosh(), Math.atanh() i inne funkcje).
```

W języku JavaScript przepełnienie, niedomiar i dzielenie przez zero nie powodują zgłoszenia błędu. Jeżeli wynik operacji
jest większy niż największa dopuszczalna wartość (przepełnienie), zwracana jest specjalna wartość `Infinity` (
nieskończoność lub `-Infinity`.

Wartości nieskończone funkcjonują zgodnie z oczekiwaniami, tj. wynikiem dodawania, odejmowania, mnożenia i dzielenia z
użyciem jakiejkolwiek innej wartości jest również nieskończoność (z ewentualnie zmienionym znakiem).

Dzielenie przez zero nie skutkuje zgłoszeniem błędu. Wynikiem jest po prostu wartość Infinity lub -Infinity. Wynikiem
dzielenia zera przez zero jest specjalna wartość `NaN` (ang. *not-a-number* — nieliczba). Reprezentuje ona również wynik
dzielenia wartości `Infinity` przez `Infinity`, pierwiastek kwadratowy z liczby ujemnej oraz wynik operacji
arytmetycznej z użyciem operandów, których nie można przekształcić na liczby.

Warto pamiętać, wykonując operacje arytmetyczne, że język JavaScript w przypadku niedozwolonej operacji zwróci jedną z
dwóch wartości specjalnych:

* `NaN` (skrót od *Not a Number*, czyli to nie liczba)
* `Infinity`.

Przykładami sytuacji, w których wystąpią tego rodzaju wartości, są między innymi próba pomnożenia liczby przez tekst lub
próba dzielenia przez zero, która, co zadziwiające, nie informuje o błędzie.

W języku JavaScript są zdefiniowane globalne stałe `Infinity` i `NaN`, oznaczające, odpowiednio, nieskończoność i
wartość nieliczbową. Analogiczne wartości są również właściwościami obiektu `Number`:

```javascript
Infinity // Liczba dodatnia, zbyt duża, aby można ją było wyrazić.
Number.POSITIVE_INFINITY // Jak wyżej.
1 / 0 // => Infinity

Number.MAX_VALUE * 2 // => Infinity; przepełnienie
- Infinity // Liczba ujemna, zbyt duża, aby można ją było wyrazić.
Number.NEGATIVE_INFINITY // Jak wyżej.
- 1 / 0 // => –Infinity
- Number.MAX_VALUE * 2 // => –Infinity
NaN // Wartość nieliczbowa.
Number.NaN // Wartość nieliczbowa zapisana w inny sposób.
0 / 0 // => NaN
Infinity / Infinity // => NaN
Number.MIN_VALUE / 2 // => 0: niedomiar.
- Number.MIN_VALUE / 2 // => –0: "ujemne zero".
- 1 / Infinity // -> –0: również "ujemne zero".
- 0

// Właściwości i metody obiektu Number zdefiniowane w wersji ES6:
Number.parseInt() // Odpowiednik globalnej funkcji parseInt().
Number.parseFloat() // Odpowiednik globalnej funkcji parseFloat().
Number.isNaN(x) // Czy x ma wartość NaN?
Number.isFinite(x) // Czy x jest liczbą skończoną?
Number.isInteger(x) // Czy x jest liczbą całkowitą?
Number.isSafeInteger(x) // Czy x jest liczbą całkowitą z zakresu –(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => –(2**53–1)
Number.MAX_SAFE_INTEGER // => 2**53–1
Number.EPSILON // => 2**–52: najmniejsza różnica między liczbami.
```

Wartość nieliczbowa `NaN` ma pewną nietypową cechę, mianowicie nie można jej porównywać z żadną inną wartością, nawet z
nią samą. Porównanie jej z samą sobą daje wynik negatywny:

```javascript
NaN === NaN // => false
```

Niezależnie od wartości, jaką przyjmie zmienna, przyrównanie jej do `NaN` daje wartość `false`.

```javascript
let myVariable; // => undefined
console.log(myVariable === NaN); // => false

myVariable = NaN;
console.log(myVariable === NaN); // => false

myVariable = 'To jest moja zmienna';
console.log(myVariable === NaN);  // => false
```

Oznacza to, że stosując zapis `x === NaN`, nie można sprawdzić, czy zmienna x ma wartość `NaN`. Zamiast tego należy użyć
wyrażenia `x !== x` lub `Number.isNaN(x)`. Każde z nich ma wartość `true` tylko wtedy, gdy `x` ma taką samą wartość jak
globalna stała `NaN`.

Globalna funkcja `isNaN()` zwraca true, jeśli jej argument ma wartość `NaN` lub nie można go przekształcić w liczbę.

```javascript
console.log("Różne wyniki");
let message = 'JavaScript is the best';

console.log(isNaN('123')); // => false
console.log(isNaN(message)); // => true

console.log(Number.isNaN(message)); // => false
console.log(Number.isNaN('123')); // => false
```

Funkcja `Number.isFinite()` zwraca wartość `true`, jeżeli jej argument ma wartość inną niż `NaN`, `Infinity`
i `-Infinity`.

Globalna funkcja `isFinite()` zwraca `true`, jeżeli jej argument jest lub może być przekształcony w skończoną liczbę.

### NaN

Wbrew swojej nazwie „nie-liczba” `NaN` jest specjalną wartością, która także jest liczbą.

```javascript
typeof NaN // "number"
```

`NaN` otrzymasz, jeśli spróbujesz wykonać działanie, które powinno dawać liczbę, i to działanie nie powiedzie się. Jeśli
spróbujesz na przykład pomnożyć 10 przez znak "f" , wynikiem będzie `NaN`, ponieważ w oczywisty sposób " f " nie jest
prawidłowym argumentem dla mnożenia.
`NaN` jest jak wirus: nawet jeśli tylko jeden z argumentów działania ma wartość `NaN` , cały wynik można wyrzucić do
kosza.

```javascript
0 / 0 // NaN
Infinity / Infinity // NaN
```

Globalna właściwość `NaN` jest wartością reprezentującą Not-A-Number.

NaN jest właściwością obiektu globalnego. Innymi słowy, jest to zmienna o zasięgu globalnym. Początkowa wartość NaN to
Not-A-Number - taka sama jak wartość Number.NaN. W nowoczesnych przeglądarkach NaN nie jest konfigurowalną właściwością,
której nie można zapisywać. Nawet jeśli tak nie jest, unikaj jego zastępowania. Użycie NaN w programie jest raczej
rzadkie.

Istnieje pięć różnych typów operacji, które zwracają NaN:

1. Nie można przeanalizować liczby (np. `ParseInt("blabla")` lub `Number(undefined)`)
2. Operacja matematyczna, w której wynik nie jest liczbą rzeczywistą (np. `Math.sqrt (-1)`)
3. Operand argumentu to `NaN` (np. `7 ** NaN`)
4. Forma nieokreślona (np. `0 * Infinity` lub `undefined + undefined`)
5. Dowolna operacja, która obejmuje ciąg znaków i nie jest operacją dodawania (np. `"foo" / 3`)

`NaN` porównuje nierówną wartość (za pośrednictwem `==`,`!=`, `===` i `!==`) z dowolną inną wartością — w tym z inną
wartością `NaN`. Użyj `Number.isNaN()` lub `isNaN()`, aby najdokładniej określić, czy dana wartość to NaN. Lub wykonaj
samo-porównanie: NaN, i tylko NaN, porówna się nierówno.

```javascript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Number.isNaN(NaN);  // true

function valueIsNaN(v) {
  return v !== v;
}

valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

Jednak zwróć uwagę na różnicę między `isNaN()` i `Number.isNaN()`: pierwsza zwróci true, jeśli wartość jest
obecnie `NaN   lub jeśli będzie to `NaN` po przekształceniu w liczbę, podczas gdy druga zwróci prawda tylko wtedy, gdy
wartość jest obecnie NaN:

```javascript
isNaN('hello world');        // true
Number.isNaN('hello world'); // false
```

Ponadto niektóre metody tablicowe nie mogą znaleźć `NaN`, podczas gdy inne mogą.

```javascript
let arr = [2, 4, NaN, 12];
arr.indexOf(NaN);                      // -1 (false)
arr.includes(NaN);                     // true
arr.findIndex(n => Number.isNaN(n));   // 2
```

### Number.isNaN()

Metoda `Number.isNaN()` określa, czy przekazana wartość to `NaN`, a jej typ to `Number`. Jest to bardziej solidna wersja
oryginalnej, globalnej `isNaN()`.

### isNaN()

Funkcja `isNaN()` określa, czy wartość jest `NaN`, czy nie. Ponieważ przymus wewnątrz funkcji `isNaN` może być
zaskakujący, możesz alternatywnie użyć `Number.isNaN()`.

### Format zmiennoprzecinkowy i błędy zaokrąglenia

Liczb rzeczywistych jest nieskończenie wiele, ale w języku JavaScript można w formacie zmiennoprzecinkowym wyrazić ich
skończoną liczbę. Oznacza to, że w kodzie liczby rzeczywiste są często przybliżeniami faktycznych wartości.

Powszechnie, szczególnie w operacjach finansowych, stosowane są ułamki dziesiętne, takie jak 1/10, 1/100 itp., których
nie można dokładnie wyrazić za pomocą zmiennoprzecinkowego formatu binarnego.

```javascript
let x = .3 - .2; // Trzydzieści groszy minus dwadzieścia groszy.
let y = .2 - .1; // Dwadzieścia groszy minus dziesięć groszy.
x === y // => false: obie wartości są różne!
x === .1 // => false: .3–.2 nie jest równe .1
y === .1 // => true: .2–.1 jest równe .1
```

Z powodu błędów zaokrąglenia różnica między przybliżeniami liczb 0,3 i 0,2 nie jest dokładnie taka sama jak między
przybliżeniami 0,2 i 0,1.

Jeżeli przybliżenie zmiennoprzecinkowe jest źródłem problemów w kodzie, należy stosować skalowalne liczby całkowite. Na
przykład wartości monetarne należy wyrażać w groszach, a nie w ułamkach złotego.

### Typ BigInt — dowolnie duże liczby całkowite

## Tekst

<!--TODO-->

## Wartości logiczne

<!--TODO-->

## Wartości null i undefined

### null

Słowo kluczowe `null` jest zazwyczaj wykorzystywane do sygnalizowania braku wartości.

```javascript
typeof null // => 'object' czyli specjalny obiekt oznaczający brak obiektu
```

W praktyce null jest traktowana jako <u>jedyna wartość osobnego typu</u>, oznaczająca brak liczby, ciągu znaków i  
obiektu.

### undefined

Słowo `undefined` też oznacza brak wartości:

1. Przyjmuje

<!--TODO-->

## Symbole

<!--TODO-->

## Obiekt globalny

<!--TODO-->

## Niemutowalne prymitywne wartości i mutowalne odwołania do obiektów

<!--TODO-->

## Konwersje typów

<!--TODO-->

## Deklarowanie zmiennych i przypisywanie wartości.

**Identyfikatory** reprezentują wartości. Wiążąc nazwę z wartością, można wykorzystywać tę wartość w tworzonym kodzie.
Operacja ta zazwyczaj jest nazywana przypisywaniem wartości zmiennej. Termin „zmienna” sugeruje, że można przypisywać
różne wartości, a więc zawartość zmiennej zmienia się w trakcie działania programu. Jeżeli nazwie zostanie przypisana
wartość na stałe, wówczas stosuje się pojęcie stałej.

**Identyfikatory** reprezentują wartości. Wiążąc nazwę z wartością, co nazywamy przypisaniem wartości **zmiennej**,
możemy ją wielokrotnie wykorzystać w kodzie. W trakcie działania programy, jak sugeruje termin „zmienna”, jej zawartość
może się zmieniać. Nazwie można przypisać wartość na stałe, wtedy mówimy o **stałej**.

Zmienne i stałe przed użyciem trzeba zadeklarować. Od wersji ES6 służą do tego celu słowa kluczowe`let` i `const`. W
starszych wersjach zmienne deklarowało się za pomocą słowa `var`.

### Podstawy działania zmiennych

Sposób działania zmiennych najprościej przedstawić, wykorzystując proste (prymitywne) typy zmiennych. Przez prostą
zmienną określamy zmienną, która przechowuje tylko i wyłącznie jedną wartość. Przykładowo zmienna liczbowa przechowuje
jedną liczbę, natomiast zmienna tekstowa od zera od większej liczby znaków — rozumiany jako jeden ciąg znaków ujmowany w
cudzysłów lub apostrofy albo w grawisy.

W języku JavaScript to **wartości**, a nie zmienne mają określony typ. Co więcej, wiele wartości można przedstawić w
postaci **literału** lub **obiektu**.

```javascript
let myVariable = 'JavaScript jest bardzo prosty';
```

Powyższy kod deklaruje zmienną o nazwie `myVariable` przypisując jej wartość 'JavaScript jest prosty'.

### Deklaracja zmiennych

<u>Deklaracja zmiennej oznacza formalne poinformowanie o jej istnieniu</u>. W wielu językach, na przykład w C i Javie,
deklaracja zmiennej musi nastąpić przed próbą jej użycia. JavaScript nie wymaga deklaracji zmiennej; można od razu
zacząć korzystać z referencji:

```javascript
value = 144;
```

Średnik na końcu wiersza oznacza koniec polecenia. Nie jest wymagany, ale warto go stosować. Choć deklaracja zmiennych w
języku JavaScript nie jest wymagana, tak naprawdę powinno się ją wykonać w każdej sytuacji. Do tego celu służą słowa
kluczowe let, const i var (obecnie niezalecane):

```javascript
let name; // deklaracja zmiennej => undefined
name = 'Larry Ullman'; // inicjacja wcześniej zadeklarowanej zmiennej
let myName = 'Zenon Marek Raubuć'; // definicja zmiennej = deklaracja + inicjacja
```

Niezadeklarowane zmienne, czyli takie, których pierwsza referencja nie zawiera słowa kluczowego `let`, `const` lub
`var`, znajdą się w przestrzeni globalnej, której tak naprawdę należy unikać.

JavaScript jest językiem o **słabej kontroli typów**, co między innymi oznacza, iż zmienna nie ma jednego, ściśle
określonego typu. Żaden z przykładów nie deklarował zmiennej `name` jako zmiennej typu tekstowego. Dodanie poniższego
wiersza za powyższymi nie spowoduje zgłoszenia żadnego błędu:

```javascript
name = 23;
```

Wiersz ten najprawdopodobniej doprowadzi do powstania błędu logicznego lub błędu wykonania, ponieważ pozostały kod
będzie zakładał, że `name` jest tekstem. Zmienne w JavaScript nie zawierają informacji o typie, bo ten jest związany z
wartością. Jeżeli zmienna `name` zawiera zero lub więcej znaków, jest traktowana jako zmienna tekstowa; jeśli zawiera
wartość `23`, jest uważana za zmienną liczbową.

Słowa `let` można wykorzystać do jednoczesnej deklaracji wielu zmiennych:

```javascript
let firstName, lastName;
let name = 'Larry', surname = 'Ullman';
```

> **ZMIENNE GLOBALNE**
> Wszystkie zmienne mają zdefiniowany **zasięg**, czyli przestrzeń, w której są zdefiniowane i dostępne dla programisty.
> Zmienne zdefiniowane w funkcji mają zasięg ograniczony do tej funkcji, czyli istnieją tylko wewnątrz funkcji.
> Istnieje jeszcze zasięg na poziomie bloku kodu, w którym to zmienna istnieje tylko wewnątrz pary nawiasów klamrowych,
> między którymi została zdefiniowana. Zmienne zadeklarowane poza funkcjami lub bez użycia słowa kluczowego
> mają zasięg **globalny**. Istnieje kilka powodów, dla których warto unikać zmiennych globalnych.
>
> Jeśli zmienna nie musi być zmienną globalną, nie powinna nią być. Ponadto zmienne globalne mają negatywny wpływ na
> wydajność, bo muszą istnieć przez cały czas działania aplikacji, niezależnie od tego, czy są wykorzystywane, czy też
> nie. Zmienne z funkcji istnieją tylko w trakcie wykonywania funkcji (po ich wywołaniu). Poza tym zmienne globalne
> są źródłem trudnych do znalezienia błędów logicznych lub błędów wykonania, bo mogą wchodzić w konflikt z innymi
> zmiennymi globalnymi. Doskonałym przykładem jest użycie zmiennej globalnej, a następnie dołączenie marnie napisanej
> biblioteki zewnętrznej, która również tworzy zmienną globalną o takiej samej nazwie.


Kiedy w JavaScripcie do deklarowania zmiennych używało się tylko słowa kluczowego `var`, ze względu na hoisting
stosowano zasady, które — mimo iż mamy teraz do dyspozycji słowa `let` i `const` niepodlegające hoistingowi — są nadal
aktualne:

1. Zawsze deklaruj zmienne najszybciej, jak to możliwe, w zasięgu, w którym powinny być widoczne.
2. Zmienne deklarowane poza funkcjami powinny pojawić się na początku kodu.
3. Zmienne deklarowane w funkcjach powinny znaleźć się na pierwszym miejscu w kodzie tychże funkcji.

### Nazwy zmiennych

Aby utworzyć zmienną, trzeba jej nadać nazwę, czyli tak zwany **identyfikator**. Zasady dotyczące nazw zmiennych w
języku JavaScript są następujące:

* nazwa musi zaczynać się od litery, znaku podkreślenia lub znaku dolara.
* pozostała część nazwy może zawierać dowolną kombinację liter, podkreśleń i cyfr (a także kilku innych, mniej typowych
  znaków).
* słowa zarezerwowane języka JavaScript nie mogą być nazwami zmiennych.
* w nazwach zmiennych jest uwzględniana wielkość liter.

W kodzie warto unikać stosowania nazw istniejących już zmiennych. Kod JavaScript uruchamiany w przeglądarce internetowej
ma automatycznie zdefiniowane niektóre zmienne, na przykład `window` lub `document`. Obie są ważne, więc nie należy ich
nadpisywać własnymi nazwami. Jeżeli naprawdę konieczne jest użycie podobnej nazwy, dodaj do niej dodatkowe znaki, na
przykład theWindow.

### Przypisywanie wartości

Pojedynczy znak równości jest operatorem przypisania, czyli służy do przypisania wartości z prawej strony do zmiennej
wskazanej po jego lewej stronie. Oto przykład deklaracji i przypisania zmiennej liczbowej:

```javascript
let amount;
amount = 56.98;
```

Przypisania można również dokonać w jednym wierszu:

```javascript
let bigValue = 1234567.98;
```

W tym przypadku następuje nie tylko deklaracja zmiennej, ale również jej **inicjalizacja**, czyli określenie wartości
początkowej. Nie trzeba inicjować zmiennych w momencie deklaracji, ale czasem jest to najsensowniejsze rozwiązanie.

### Deklaracje za pomocą słów kluczowych let i const.

Przykłady deklaracji:

```javascript
let number; // => undefined
let message; // => undefined

// Deklarowanie kilku zmiennych za pomocą jednej instrukcji
let sum, product;

// Dobrą praktyką jest przypisywanie wartości w deklaracji zmiennej.
let caption = 'JavaScript is the best';
let balance = 5234.78;
```

Przykłady deklaracji stałych:

```javascript
const MILES_TO_KM = 0.625
const KM_TO_MILES = 1.6 
```

Stałą trzeba zainicjować w miejscu jej zadeklarowania. Przy próbie modyfikacji stałej jest zgłaszany błąd TypeError.

Powszechnie stosowaną (ale nie uniwersalną) konwencją jest używanie w nazwach stałych wyłącznie wielkich liter.

> **Kiedy stosować słowo kluczowe const?**
>
> Są dwie szkoły:
> 1. Tylko z wartościami, które nie mogą się zmieniać np. stałe fizyczne itp.
> 2. Ze wszystkimi wartościami, które nie będą się zmieniać (wiele tzw. zmiennych nie jest modyfikowanych przez
     > cały czas działania programu). Jeżeli okaże się, że jakaś wartość będzie się zmieniać, należy w
     > deklaracji zmienić słowo na let. W ten sposób zapobiega się błędom wynikającym z niezamierzonych modyfikacji
     > zmiennych.

W pętli `for/in` i `for/of` dozwolone jest stosowanie instrukcji `const`, jeżeli tylko w ciele pętli takiej „zmiennej”
nie jest przypisywana nowa wartość. W takim przypadku deklaracja stałej oznacza jedynie, że wartość pozostaje niezmienna
na czas jednej iteracji pętli.

#### Zasięgi zmiennych i stałych

Zasięg zmiennej jest obszarem kodu źródłowego, w którym zmienna jest zdefiniowana (dostępna). Zmienne i stałe
zadeklarowane za pomocą słów `let` i `const` mają zasięg blokowy, czyli poza blokiem są niedostępne.

W JS blokami są mn.in.:

* klasy
* funkcje
* ciała instrukcji if/else
* ciała pętli while i for

Jeżeli deklaracja zostanie użyta ponad wszystkimi blokami, to zmienna lub stała jest **globalna**.

W środowisku Node i modułach klienckich języka JavaScript zasięgiem zmiennej globalnej jest plik, w którym zmienna jest
zadeklarowana, a w tradycyjnym skrypcie klienckim jest to dokument HTML.

#### Wielokrotne deklaracje

Użycie więcej niż jednej deklaracji let lub const z tą samą nazwą jest błędem składniowym. Poprawne za to jest (choć
należy tego unikać) deklarowanie zmiennych o takich samych nazwach w zagnieżdżonych blokach:

```javascript
const variable = 22; // Deklaracja globalna zmiennej variable

if (variable % 2 === 0) {
  let variable = true;
  console.log(variable);
} else {
  let variable = false;
  console.log(variable);
}

// let variable = "Nie uważasz, że składnia JS jest dziwna ?";
// => SyntaxError: Identifier 'variable' has already been declared
```

#### Deklaracje i typy

W językach statycznie typowanych (np. C++, Java) celem deklaracji zmiennej jest określenie typu wartości, jakie można
tej zmiennej przypisać.

W języku JavaScript nie ma związku pomiędzy deklaracją zmiennej a jej typem. Poprawne jest na przykład przypisanie
zmiennej najpierw liczby, a później ciągu znaków (co jest jednak złą praktyką).

### Deklarowanie zmiennych za pomocą instrukcji var

W starszych wersjach języka niż ES6 zmienne można było deklarować wyłącznie za pomocą słowa kluczowego `var`, a stałych
nie można było deklarować w ogóle. Składnia słowa `var` jest taka sama jak `let`:

```javascript
var x;
var data = [], count = data.length;

for (var i = 0; i < count; i++) {
  console.log(data[i]);
}
```

Zasady deklarowania zmiennej za pomocą słowa kluczowego `var`:

1. Zasięgiem zmiennej zadeklarowanej za pomocą słowa `var` jest ciało funkcji, w której jest zadeklarowana, niezależnie
   od tego, jak głęboko.
2. Instrukcja var użyta poza ciałem funkcji deklaruje zmienną globalną i staje się właściwością obiektu globalnego, do
   którego można się odwołać za pomocą identyfikatora `globalThis`. Takiej właściwości nie można usunąć za pomocą
   operatora `delete`.

3. Za pomocą słowa `var` można wielokrotnie deklarować tę samą zmienną.
   <!--Ponieważ zasięgiem zmiennej zadeklarowanej za
   pomocą `var` jest funkcja. Zmiennej `i` często używa się do przechowywania liczb całkowitych, w szczególności
   indeksów w pętlach. Jeżeli funkcja zawiera kilka pętli, zazwyczaj każda z nich rozpoczyna się
   od `for(var i = 0; ....`. Ponieważ słowo `var` nie ogranicza zasięgu zmiennej do ciała pętli, w każdej z nich można
   bezproblemowo ponownie deklarować i inicjować tę samą zmienną.  TODO do wyjaśnienia !!! -->

4. Zmienna może być zainicjowana w środku funkcji, ale jej definicja jest przenoszona na początek funkcjiale zanim
   zostanie wykonany kod inicjujący, ma wartość `undefined`. Użycie takiej zmiennej przed jej zainicjowaniem nie
   powoduje zgłoszenia błędu. Jest to jednak wadliwa funkcjonalność, będąca przyczyną wielu błędów, którą koryguje
   instrukcja `let`. Odwołanie się do zadeklarowanej w ten sposób zmiennej przed jej zainicjowaniem skutkuje zgłoszeniem
   błędu, a nie uzyskaniem wartości `undefined`.

4. Deklaracja zmiennej jest przenoszona automatycznie przez interpreter na początek jej zakresu. Może być użyta przed
   miejscem deklaracji, ale otrzyma wtedy wartość `undefined`.

Poniżej próbki kodu to testowania trybu ścisłego i deklarowania zmiennej za pomocą `var`:

```javascript
// 'use strict';
var x;
var data = [], count = data.length;

var message = 'Js is the best';

for (var i = 0; i < count; i++) {
  console.log(data[i]);
}

console.log(message);

var message = 'JavaScript to bardzo dziwny język';

console.log(message);
balance = 5329.99;
balance += ' zł'

//var balance;

console.log(`Saldo konta wynosi ${balance}`);
```

> **Stosowanie niezadeklarowanych zmiennych**
> Jeżeli w trybie ścisłym nastąpi próba użycia niezadeklarowanej zmiennej, zostanie zgłoszony błąd referencji.
> Natomiast poza trybem ścisłym przypisanie wartości do nazwy, która nie została zadeklarowana za pomocą słów
> `let`, `cons`t lub `var`, spowoduje utworzenie nowej zmiennej globalnej, niezależnie od głębokości zagnieżdżenia się funkcji
> lub bloku kodu. Niemal zawsze jest to niepożądany efekt, który może być przyczyną błędów. Jest to jeden z głównym
> powodów, dla którego należy stosować tryb ścisły. Utworzona w taki przypadkowy sposób zmienna globalna funkcjonuje tak,
> jakby została zadeklarowana za pomocą słowa kluczowego `var`, tj. jest to właściwość globalnego obiektu. Jednak w
> odróżnieniu od zmiennej zadeklarowanej jawnie przy użyciu `var` można ją usunąć za pomocą operatora `delete`.

### Przypisania destukturyzujące

<!-- TODO -->
Składnia **przypisania destrukturyzującego** umożliwia deklarowanie wielu zmiennych i przypisywanie im wartości. Po
prawej stronie znaku równości umieszcza się tablicę obiektów (wartość „strukturalną”), a po lewej jedną lub kilka nazw
zmiennych.

```javascript
let [x, y] = [2, 4]; // <=> let x = 2, y = 4;

[x, y] = [x + 1, y + 1] // <=> x = x + 1 ; y = y + 1;
x; // => 3

[x, y] = [x++, y++] // <=> x = x++; y = y++; 
x; // => 3

[x, y] = [++x, ++y] // <=> x = ++x; y = ++y;
x; // => 4
```

# Wyrażenia i operatory

<!--TODO -->

## Inne operatory

<!-- TODO -->

### Operator typeof

Operator `typeof` jest jednoargumentowy i umieszcza się go przed operandem, który może być dowolnego typu. Zwracanym
wynikiem jest ciąg znaków opisujący typ operandu.

Poniższa tabela przedstawia wyniki operatora `typeof` użytego ze wszystkimi wartościami dostępnymi w języku JavaScript.

| x | typeof x |
| --- | ---|
| `undefined` | "undefined" |
| `null` | "object" |
| `true` lub `false` | "boolean" |
| dowolna liczba lub NaN | "number" |
| dowolna liczba BigInt | "bigint" |
| dowolny ciąg znaków | "string" |
| dowolny symbol | "symbol" |
| dowolna funkcja | "function" |
| dowolny obiekt inny niż funkcja | "object" | 

Funkcje, w języku JavaScript, są specjalnego rodzaju obiektami, ale operator typeof odróżnia je od obiektów do tego
stopnia, że rezerwuje dla nich osobną zwracaną wartość.

# Instrukcje

**Instrukcje** w analogi do językoznawstwa można nazwać zdaniami lub poleceniami. Podczas gdy wyrażenia są
**wyliczane** aby uzyskać wynik, instrukcje są wykonywane, aby coś się stalo.

## Pętle

W języku JavaScript jest pięć rodzajów pętli:

1. `while`
2. `do/while`
3. `for`
4. `for/of` (z odmianą `for/await`)
5. `for/in`

Najczęściej wykorzystywane są do iterowania tablic.

### Instrukcja while

Instrukcja `while` jest podstawową pętlą.

**Składnia**:
> while (wyrażenie)<br>
> &nbsp;&nbsp;&nbsp;&nbsp;instrukcja

### Pętla for

W większości przypadków pętla zawiera zmienną licznikową, inicjowaną przed rozpoczęciem wykonywania pętli. Przed
wykonaniem kolejnej iteracji wartość tej zmiennej jest sprawdzana, a na końcu ciała pętli, tuż przed kolejnym
sprawdzeniem, inkrementowana lub modyfikowana w inny sposób.

**Składnia instrukcji** *for*:
> for (inicjalizacja; sprawdzenie; inkrementacja)<br>
> &nbsp;&nbsp;&nbsp;&nbsp;instrukcja

# Obiekty

## Wprowadzenie do obiektów

## Tworzenie obiektów

Obiekt można utworzyć za pomocą:

* literału obiektowego
* słowa kluczowego `new`
* funkcji `Object.create()`

### Literały obiektowe






