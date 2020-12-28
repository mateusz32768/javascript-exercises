/*
 * TypeError oznacza, że silnik odnalazł wartość ale doszło do próby wykonania
 * nielegalnej/niemożliwej operacji. Często spotykaną sytuacją w praktyce jest
 *próba wywołania <code>undefined</code>, kiedy spodziewamy się wyszukania wartości funkcyjnej.
 **/

'use strict';
var c = {
  functionWithoutMissingCharacters() {
    console.log('kwakwa');
  },
};

c.functionWithMissingCharacters(); // Uncaught TypeError: c.functionWithMissingCharacters is not a function
