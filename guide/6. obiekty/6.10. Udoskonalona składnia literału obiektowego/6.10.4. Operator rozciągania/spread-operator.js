const position = { x: 10, y: 20 };
const dimension = { width: 100, height: 75 };
const rect = { ...position, ...dimension };
console.log(rect.x + rect.y + rect.width + rect.height);

const obj = { id: 100 };
const pObj = { id: 111, ...obj };
console.log(pObj.id); // => 100, obiekt obj nadpisuje właściwości

const qObj = { ...obj, x: 200 }; //
console.log(qObj.x); // => 200, teraz właściwość obj zostaje nadpisana

const objOne = Object.create({ x: 303 });
const pObjOne = { ...objOne };
console.log(pObjOne.x); // => undefined, gdyż operator rozciąga tylko własne właściwości
