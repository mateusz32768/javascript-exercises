// Sprawdzenie czy liczba jest parzysta
var even;

var number = prompt('Podaj liczbę całkowitą');

parseInt(number) % 2 ? even = 'nieparzysta' : even = 'parzysta';

alert(`Podałeś liczbę: ${number}, która jest ${even}`);
