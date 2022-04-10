# Gramatyka i typy

To jest tłumaczenie. Orginał: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

Ten rozdział omawia podstawową gramatykę JavaScript, deklaracje zmiennych, typy danych i literały.

## Podstawy

JavaScript zapożycza większość swojej składni z Javy, C i C++, ale ma na niego również wpływ Awk, Perl i Python.

JavaScript rozróżnia wielkość liter i używa zestawu znaków Unicode. Na przykład słowo Früh (co oznacza „wcześnie” w
języku niemieckim) może być użyte jako nazwa zmiennej.

```javascript
let Früh = 'foobar';
```

Ale zmienna `früh` to nie to samo co `Früh`, ponieważ JavaScript rozróżnia wielkość liter.

W JavaScript instrukcje (_ang. instructions_) nazywane
są [instrukcjami](https://developer.mozilla.org/en-US/docs/Glossary/Statement) (_ang. statements_) i są oddzielone
średnikami
`(;)`.

Średnik nie jest konieczny po instrukcji (_ang. statement_), jeśli jest napisany w osobnym wierszu. Ale jeśli potrzeba
więcej niż jednej instrukcji w wierszu, należy je oddzielić średnikami.

> Uwaga: ECMAScript zawiera również reguły automatycznego wstawiania średników ([ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion))
> do instrukcji końcowych.
> (Aby uzyskać więcej informacji, zobacz szczegółowe informacje o [gramatyce leksykalnej](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
> JavaScript.)

Uważa się jednak, że najlepszą praktyką jest pisanie zawsze średnikiem po insrtukcji(*ang. statement*), nawet jeśli jest
nie jest to bezwzględnie potrzebne. Ta praktyka zmiejsza szanse na pojawienie się błędów w kodzie.

Tekst źródłowy skryptu JavaScript jest skanowany od lewej do prawej i jest konwertowany na sekwencję elementów
wejściowych, które są *tokenami (niepodzielnymi jednostkami leksykalnymi), znakami kontrolnymi, terminatorami linii,
komentarzami lub [białymi znakami](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace)*. (Spacje, tabulatory i
znaki nowego wiersza są uważane za białe znaki).

## Komentarze
