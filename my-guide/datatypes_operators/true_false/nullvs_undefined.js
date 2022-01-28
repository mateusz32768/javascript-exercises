var yourName; // undefined - to jest wartość tak samo jak 23 czy 45.7 czy 'word';
typeof yourName // 'udefined' - to jest typ (nazwa typu czyli ciąg zanaków - string)

your = 'Jan'; // 'Jan'
typeof yourName; // 'string'

lastName; // ReferenceError: lastName is not defined - zmienna  nie została zadeklarowana
typeof lastName; // 'undefined'

// czyli operator typeof nie rozstrzyga czy dana zmienna istnieje (jest zadekłarowana)

var firstName = null;
firstName; // null
typeof firstName; // 'object' a nie null jest to błąd, który już nie zostanie poprawiony

var person = {};
typeof person.name; // 'undefined'

person.name = null;
typeof person.name; // 'object'

var student = {
  name: null
}

// Jest bardzo istotna różnica między warością null a undefined. Wartość null oznacza, że z jakiegoś powodu 
// pusta wartość została przypisana i w określonych okolicznościach np. jako odpowiedź serwera zostanie uzupełniona.
// czyli wartość ustawiona, ale jest to wartość pusta, a undefined oznacza, że wartość nie została nigdy ustawiona



