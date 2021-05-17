const A = {
  x: 5,
  y: 10,
};

const B = {
  z: 50,
};

const point = {
  ...A,
  ...B,
};

console.log(point); // { x: 5, y: 10, z: 50 }
point.x = 13;       // to tylko kopia pola x
console.log(A.x); // 5

const C = {
  coordinate: {
    x: 6,
    y: 7,
  },
  id: 123,
};

const D = {
  ...C.coordinate,
}

console.log(D); // { x: 6, y: 7 }