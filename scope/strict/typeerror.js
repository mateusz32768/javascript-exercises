/*
 * TypeError oznacza, że silnik odnalazł wartość ale doszło do próby wykonania
 * nielegalnej/niemożliwej operacji. Często spotykaną sytuacją w praktyce jest
 * próba wywołania undefined, kiedy spodziewamy się wyszukania wartości funkcyjnej.
 **/

'use strict';
var character = {
  functionWithoutMissingCharacters() {
    console.log('kwakwa');
  },
};

character.functionWithMissingCharacters(); // Uncaught TypeError: character.functionWithMissingCharacters is not a function
