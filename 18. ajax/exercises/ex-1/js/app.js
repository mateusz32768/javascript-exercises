window.onload = () => {
  'use strict';

  const btnTest = document.querySelector('#btn');

  btnTest.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        document.querySelector('#output').innerHTML = request.responseText;
      } else {
        document.querySelector('#output').innerHTML = request.statusText;
      }
    };

    request.open('GET', 'resource/test.txt', true);
    request.send('');

  })
}
