let anObject = {
  left: 1,
  right: 2,
};

console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log('left' in anObject);

anObject.right = undefined;

console.log(anObject.right);
console.log('right' in anObject);

console.log(Object.keys(anObject));

anObject.reverse = 3;
anObject.forward = 4;
console.log(Object.keys(anObject));

let someObj = { one: 'one', second: 'second' };

Object.assign(someObj, anObject);

console.log(someObj);

const arr = [1, 3, 5, 6, 7, 8];
console.log(typeof arr);
