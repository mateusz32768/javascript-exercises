// losowanie 6 liczb z 49

let number = 0;

const lotto = [];

for(i = 0; i < 6; i++){
  lotto[i] = [];
  for(j = 0; j < 6; j++){
  number = Math.floor(Math.random() * 48) + 1;
  lotto[i].push(number);
  }
}

// console.log(lotto);

// for(i = 0; i < lotto.length; i++){
//   for(j = 0; j < lotto[i].length; j++){
//     console.log(lotto[i][j]);
//   }
//   console.log('\n');
// }

for(i = 0; i < lotto.length; i++){
  console.log(lotto[i]);
}


// for(const num of lotto){
//   for(const el of num)
//   console.log(el);
// }

// console.log(Math.random());
// console.log('😎');


