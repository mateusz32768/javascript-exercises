let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let ageStr;

  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
  }

  return `${personExp} ${ageStr}`;
}

let output = myTag`That ${person} is a ${age} text text ${age} text text`;
console.log(output)

function template(strings, ...keys) {
  return (function (...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function (key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

console.log(template`${0}${1}${0}`);
