let myName = 'Zenon Marek Raubuć';

const spaces = [];

for(let i = 0; i < myName.length; i++){
  if(myName[i] === ' '){
    spaces.push(true);
  }
}

console.log(`Twoje nazwisko ma ${myName.length - spaces.length} liter`);
