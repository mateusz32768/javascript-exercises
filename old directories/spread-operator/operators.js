const arr = [2, 5, 7, 8, 11];

function sumArray(...array){
  let result = 0;

  for(let i = 0; i < array.length; i++){
    result += array[i];
  }

  console.log(result);
}

sumArray(arr);
sumArray(...arr);



