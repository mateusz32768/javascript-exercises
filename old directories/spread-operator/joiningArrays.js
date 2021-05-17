const strArray = ['wiadomości', 'prezydentura', 'kombinacje', 'półprawdy', 'kłamstwa'];
const news = ['dobra nowina', 'odejście w hańbie', 'do widzenia'];

const newNews = [...strArray, ...news];

for(let message of newNews){
  console.log(message);
}