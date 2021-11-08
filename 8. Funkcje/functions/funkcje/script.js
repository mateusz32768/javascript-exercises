'use strict';
// Przykład zastosowania parametru reszty operatora rozwijania
let numbString = document.getElementById('numbers');
let numbers = [];
let arrayString = [];
let sumString = document.getElementById('sum');
let button = document.getElementById('btn');
let filter = document.getElementById('filter');
let map = document.getElementById('map');

function sum(...array){// parametr reszty
	let result = 0;
	for(let i = 0; i < array.length; i++){
			result += array[i];
	}
	return result;
}

function display(){
	arrayString = numbString.value.split(',');
	for(let i = 0; i < arrayString.length; i++){
		 numbers[i] = parseInt(arrayString[i]);
	}
	
  sumString.value = sum(...numbers); // operator rozwijania
	filter.value = numbers.filter(item => (item > 7));
	map.value = numbers.map(item => (item * 2));
}

button.addEventListener('click', display);