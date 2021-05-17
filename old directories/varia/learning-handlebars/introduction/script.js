
(function () {
  'use strict;'

  let template = document.querySelector('#template').innerHTML;
  let handlebars = Handlebars.compile(template);



  let generatedHTML = handlebars(student);
  let targetElement = document.querySelector('.persons');

  targetElement.insertAdjacentHTML('beforeend', generatedHTML);

  // Procedura postępowania z szablonami Handlebars
  // Pakujemy zawartość szablonu do zmiennej
  // zmienną czyli zawartość szablonu kompilujemy metodą compile
  // obiektu Handlebars, która zwraca referencję do funkcji.
  // Do tej funkcji przekazujemy obiekt, którego właściwości zostaną wykorzystane 
  // w skompilowanym szablonie. Funkcja zwraca wygenerowany kod HTML, który 
  // umieszczamy na stronie.

  targetElement.insertAdjacentHTML('beforeend', handlebars(saleswoman));

  // Szablon template-product-list

  template = document.querySelector('#template-product-list').innerHTML;
  handlebars = Handlebars.compile(template);

  const productListData = {
    title: 'Great offers!',

    products: {
      'product-football': {
        name: 'Football',
        price: '$10'
      },

      'product-volleyball': {
        name: 'Volleyball',
        price: '$8'
      },

      'product-basketball': {
        name: 'Basketball',
        price: '$12'
      }
    }

  };

  generatedHTML = handlebars(productListData);
  targetElement = document.querySelector('.container');

  targetElement.insertAdjacentHTML('beforeend', generatedHTML);

})();


