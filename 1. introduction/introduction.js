let name = 'Zenon Marek Raubuć';

const spaces = [];

for(let i = 0; i < name.length; i++){
  if(name[i] === ' '){
    spaces.push(true);
  }
}

console.log(`Twoje nazwisko ma ${name.length - spaces.length} liter`);
