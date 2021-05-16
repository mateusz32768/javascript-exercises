let str = '1';
str *= 3;
typeof str; // 'number'
str = '4';
str++;
typeof str; // 'number'
str = '5';
str = str + 1;
typeof str; // 'string
str = '6';
str += 1;
typeof str; // 'string'
str; // '61'
str * 1; // 61

let movie = '101 dalmatyńczyków';
movie * 1; // NaN

let def = 103;
def = '' + def;
typeof def;
//'string'
