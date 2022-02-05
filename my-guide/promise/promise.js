const request = require('request');

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(body));
    });
  });
}

let message;
makeRequest('https://swapi.co/api/people/1')
  .then(character => {
    message = `${character.name} played in`;
    return makeRequest(character.films[0]);
  })
  .then(film => {
    message += ` ${film.title}.`;
    return message;
  })
  .then(message => console.log(message))
  .catch(error => console.error(error));
