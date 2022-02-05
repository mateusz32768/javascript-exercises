function convert(...args) {
  return args.map(x => x.toUpperCase());
 }

let array = convert('jeden', 'trzy', 'pięć', 'siedem', 'dziewięć');
console.log(array);

function convertBis(args){
  return args.map(x => x.toUpperCase());
}

const args = ['jeden', 'trzy', 'pięć', 'siedem', 'dziewięć']

array = convertBis(args);
console.log(array);