W kodzie ktory przerabialismy pojawily się dwie rzeczy ktorych nie objasnilem. Mianowicie, biorac ten kod:

```javascript

[{id: 1}, {id: 2}].map(({ id }) => ({ id }));

```
Dzieja się takie rzeczy:
- dzialamy na `array obiektow`, ktore mają tylko `id` (ktorych wartosciami są `integers (liczby calkowite)`)
- mapujemy (loopujemy) przez kazdy z nich
- aplikujemy funkcje do kazdego obiektu
- w funkcji najpierw dokonujemy destrukturyzacji (z ang. *destructuring*): `(({ id }) =>` (w ten sposob wyciagamy `id`
  bezposrednio z obiektu, w ktorym istnieje klucz `id`
- dalej tworzymy nowy obiekt literalny z kluczem id, ktorego wartoscia stanie się wartosc id wyciagnietego w procesie 
- destrukturyzacji: => `({ id })`
- ta konkretna funkcja nie zmieni absolutnie nic, bo bierzemy obiekty z `id` i budujemy z nich nowe obiekty z `id`, 
- ale pojawiaja się tutaj dwie techniki (destructuring oraz budowanie obiektow z uzyciem argumentow funkcji 
- (mozliwe są też zmienne), ktore staja się jednoczesnie kluczami)

To jest, duzo rzeczy w malej ilosci kodu.
To nie bedzie i nie ma prawa byc latwe na poczatku.

Warto przecwiczyc to z innymi arrays obiektow, gdzie macie np. klucze `name` czy `dateOfBirth` czy `hasPet` czy 
`isLoggedIn`, itd. wowczas robimy to na tej samej zasadzie: `(({ name }) => ({ name }))`
