var isLoggedIn = true;

if (isLoggedIn) {
    console.log('Zalogowano');
} else {
    console.log('Nie zalogowano');
}

console.log(typeof isLoggedIn); // boolean

// Wartości fałszywe
// false
// 0
// ""
// null
// undefined
// NaN

var value = 'true' // to jest string

console.log(typeof value); // string

if (value) {
    console.log('Ta wartość nie jest fałszywa')
} else {
    console.log('Ta wartość jest fałszywa');
}

