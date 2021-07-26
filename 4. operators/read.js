const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Podaj rok urodzenia Chopina =>  ', (value) => {
  typeof value === 'string' ? `${value}` : value.toString();

  if(value === '1810') {
    console.log('Podałeś prawidłowy rok');
  } else {
    console.log('Podałeś nieprawidłowy rok');
  }
  rl.close();
});






